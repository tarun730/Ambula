// import { createSlice, configureStore } from '@reduxjs/toolkit'

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//     employees: [],
//   },
//   reducers: {
//     saveEmployee: (state, action) => {
//         state.employees.push(action.payload);
//       },
//   }
// })

// export const { incremented, decremented } = counterSlice.actions
 
// export const store = configureStore({
//   reducer: counterSlice.reducer
// })

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))
// export const { saveEmployee } = userSlice.actions;
// export const selectUser = (state) => state.user;

// export default userSlice.reducer;

import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'emp',
  initialState: {
    value: 0,
    employees: [],
  },
  reducers: {
    saveEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

// Correct action names
export const { saveEmployee } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

// Correct export for reducer
export const selectUser = (state) => state.user;

export default counterSlice.reducer;
