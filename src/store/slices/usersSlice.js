
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, fetchUser } from '../async/usersAsync';

const initialState = {
  users: [
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      address: "123 Main St, Wonderland",
      avatar: "https://via.placeholder.com/150",
      phone: "555-1234",
      geo: "12.34, 56.78",
      username: "alice123"
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      address: "456 Elm St, Dreamland",
      avatar: "https://via.placeholder.com/150",
      phone: "555-5678",
      geo: "98.76, 54.32",
      username: "bob456"
    },
  ],
  selectedUser: null,
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; 
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedUser = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedUser = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default usersSlice.reducer;