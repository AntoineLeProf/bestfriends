import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    addFriendToStore: (state, action) => {
      console.log('Add friend', action.payload);
      state.value.push(action.payload);
    },
  },
});

export const { addFriendToStore } = friendsSlice.actions;
export default friendsSlice.reducer;
