import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    transfers: [],
    transfer: {},
    userTransfers: [],
    loading: false,
    statusUpdateLoading: false,
    transferError: {
        isError: false,
        message: ""
    },
    alert: "",
};


export const getAllTransfers = createAsyncThunk(
    'transfers/getAllTransfers',
    async (thunkAPI) => {
        try {
            const res = await fetch('http://localhost:5000/transfers',
                {
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem('idToken')}`
                    }
                }
            ).then(
                (data) => data.json()
            );
            return res;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return thunkAPI.rejectWithValue(err.response.data);
        }

    });
export const getUserTransfers = createAsyncThunk(
    'transfers/getUserTransfers',
    async (userEmail, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:5000/transfers/user/${userEmail.email}`, {
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('idToken')}`
                }
            }
            ).then(
                (data) => data.json()
            );
            return res;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return thunkAPI.rejectWithValue(err.response.data);
        }

    });
export const createTransfer = createAsyncThunk(
    'transfers/createTransfer',
    async (transfer, thunkAPI) => {

        try {
            const res = await fetch(`http://localhost:5000/transfers/`, {
                method: 'POST',
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('idToken')}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(transfer)
            }).then(
                (data) => data.json()
            );
            return res;
        } catch (err) {
            console.log("try catch err", err);

            if (!err.response) {
                throw err;
            }
            return thunkAPI.rejectWithValue(err.response.data);
        }


    });
export const updateTransfer = createAsyncThunk(
    'transfers/updateTransfer',
    async (update, thunkAPI) => {
        const { email, id, status } = update;
        try {
            const transfer = { status: status };
            const res = await fetch(`http://localhost:5000/transfers/${id}`, {
                method: 'PATCH',
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('idToken')}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(transfer)
            }).then(data => data.json());
            if (email) thunkAPI.dispatch(getUserTransfers({ email: email }));
            else thunkAPI.dispatch(getAllTransfers());

            return res;
        } catch (err) {
            console.log("try catch err", err);
            if (!err.response) {
                throw err;
            }
            return thunkAPI.rejectWithValue(err.response.data);
        }
    });

const transfersSlice = createSlice({
    name: 'transfers',
    initialState,
    reducers: {
        //pass the initial state and any payload which is in, action.payload 
        // createTransfer(state, action) {
        //     // Create a transfer
        // },
        // deleteTransfer(state, action) {
        //     // delete a transfer
        // },
    },
    extraReducers: {
        //GetTransfers
        [getAllTransfers.pending]: (state) => {
            if (state.transfers.length < 1) state.loading = true;
        },
        [getAllTransfers.fulfilled]: (state, action) => {
            state.loading = false;
            state.transfers = action.payload;
        },
        [getAllTransfers.rejected]: (state, action) => {
            state.loading = false;
            state.transferError.isError = true;
            state.transferError.message = action;
        },

        //GetUserTransfers
        [getUserTransfers.pending]: (state) => {
            if (state.userTransfers.length < 1) state.loading = true;
        },
        [getUserTransfers.fulfilled]: (state, action) => {
            state.loading = false;
            state.userTransfers = action.payload;
        },
        [getUserTransfers.rejected]: (state, action) => {
            state.loading = false;
            state.transferError.isError = true;
            state.transferError.message = action;
        },

        //CreateTransfer
        [createTransfer.pending]: (state) => {
            state.loading = true;
        },
        [createTransfer.fulfilled]: (state, action) => {
            state.loading = false;
            state.alert = action?.payload?.message;
        },
        [createTransfer.rejected]: (state, action) => {
            state.loading = false;
            state.transferError.isError = true;
            state.transferError.message = action.error.message;
        },

        //UpdateTransfer
        [updateTransfer.pending]: (state) => {
            state.statusUpdateLoading = true;
        },
        [updateTransfer.fulfilled]: (state, action) => {
            state.statusUpdateLoading = false;
        },
        [updateTransfer.rejected]: (state, action) => {
            state.statusUpdateLoading = false;
            state.transferError.isError = true;
            state.transferError.message = action.error.message;
        },


    },
});

export const transfersActions = transfersSlice.actions;

export default transfersSlice.reducer;