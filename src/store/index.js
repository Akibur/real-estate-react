import { configureStore } from '@reduxjs/toolkit';
import landsSlice from './lands-slice';
import transfersSlice from './transfers-slice';


const store = configureStore({
    reducer: {
        lands: landsSlice,
        transfers: transfersSlice
    },
});

export default store;
