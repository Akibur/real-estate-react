import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    lands: [],
    loading: false,
    landError: {
        isError: false,
        message: ""
    },
    alert: ""
};



export const getLands = createAsyncThunk(
    'lands/getLands',
    async (thunkAPI) => {

        try {
            const res = await fetch('http://localhost:5000/lands').then(
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

export const createLand = createAsyncThunk(
    'lands/createLand',
    async (land, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:5000/lands/`, {
                method: 'POST',
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('idToken')}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(land)
            }).then(
                (data) => data.json()
            ).catch((err) => console.log(err));
            return res;
        } catch (err) {
            console.log("try catch err", err);

            if (!err.response) {
                throw err;
            }
            return thunkAPI.rejectWithValue(err.response.data);
        }

    });


const landsSlice = createSlice({
    name: 'lands',
    initialState,
    reducers: {
        //pass the initial state and any payload which is in, action.payload 
        // createLand(state, action) {
        //     // Create a land
        // },
        // deleteLand(state, action) {
        //     // delete a land
        // },
    },
    extraReducers: {
        //GetLands
        [getLands.pending]: (state) => {
            state.loading = true;
        },
        [getLands.fulfilled]: (state, action) => {
            state.loading = false;
            state.lands = action.payload;
        },
        [getLands.rejected]: (state, action) => {
            state.loading = false;
            state.landError.isError = true;
            state.landError.message = action;
        },

        //CreateLand
        [createLand.pending]: (state) => {
            state.loading = true;
            state.alert = "Adding...";
        },
        [createLand.fulfilled]: (state, action) => {
            state.loading = false;
            state.alert = "Land Added Succesfully";
        },
        [createLand.rejected]: (state, action) => {
            state.loading = false;
            state.alert = "";
            state.landError.isError = true;
            state.landError.message = action.error.message;
        },

    },
});

export const landsActions = landsSlice.actions;

export default landsSlice.reducer;