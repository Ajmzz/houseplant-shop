import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Snake Plant', price: 10, category: 'Indoor', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Aloe Vera', price: 12, category: 'Succulent', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Peace Lily', price: 15, category: 'Flowering', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Spider Plant', price: 8, category: 'Indoor', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Cactus', price: 9, category: 'Succulent', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Fern', price: 11, category: 'Outdoor', image: 'https://via.placeholder.com/150' },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
