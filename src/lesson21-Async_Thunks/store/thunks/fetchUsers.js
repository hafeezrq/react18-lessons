import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3001/users');
  await pause(2000);
  return response.data;
});

// For test during dev
const pause = duration => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
