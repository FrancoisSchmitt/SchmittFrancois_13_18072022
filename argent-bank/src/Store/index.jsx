import { createSlice, configureStore } from '@reduxjs/toolkit';

/**
 * @const TokenSlice is the creation of the state to store the token By default it is set to ''. 
 * @const firstNameSlice is the creation of the state to store the FirstName By default it is set to ''. 
 * @const lastNameSlice is the creation of the state to store the LastName By default it is set to ''. 
 * 
 * @const store is taken all the reducers of the Slices
 */

export const TokenSlice = createSlice({
      name: 'Token',
      initialState: {
            value: '',
      },

      reducers: {
            getToken: (state, action) => {
                  state.value = action.payload;
            },
      },
});
export const firstNameSlice = createSlice({
      name: 'firstName',
      initialState: {
            firstName: '',
      },
      reducers: {
            getFirstName: (state, action) => {
                  state.value = action.payload;
            },
      },
});

export const lastNameSlice = createSlice({
      name: 'firstName',
      initialState: {
            lastName: '',
      },
      reducers: {
            getLastName: (state, action) => {
                  state.value = action.payload;
            },
      },
});

export const { getToken } = TokenSlice.actions;
export const { getFirstName } = firstNameSlice.actions;
export const { getLastName } = lastNameSlice.actions;

export const store = configureStore({
      reducer: {
            token: TokenSlice.reducer,
            firstName: firstNameSlice.reducer,
            lastName: lastNameSlice.reducer,
      },
});
