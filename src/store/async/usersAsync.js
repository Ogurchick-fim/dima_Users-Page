
import { createAsyncThunk } from '@reduxjs/toolkit';

const sampleUsers = [
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
];

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      return sampleUsers;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (id, { rejectWithValue }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const user = sampleUsers.find(u => u.id === parseInt(id, 10));
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);