import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterList: (state, action) => {
      state.name = action.payload.name;
    },
  },
});
export const { filterList } = filterSlice.actions;
export default filterSlice.reducer;
