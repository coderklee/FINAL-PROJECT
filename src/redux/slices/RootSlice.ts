import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'Name',
        phone_number: 'Phone Number',
        email: 'Email',
        address: "Address",
        description: "Description",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        choosePhone: (state, action) => { state.phone_number = action.payload },
        chooseEmail: (state, action) => { state.email = action.payload },
        chooseAddress: (state, action) => { state.address = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, choosePhone, chooseEmail, chooseAddress, chooseDescription } = rootSlice.actions