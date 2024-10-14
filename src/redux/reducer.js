import { createSlice } from "@reduxjs/toolkit";

// Function to load data from local storage
// localStorage.clear()
const loadFromLocalStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return Array.isArray(data) ? data : []; // Ensure it always returns an array
};

const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

// Initial state with user details, wishlist, and cart items
const initialState = {
  userDetails: loadFromLocalStorage('userDetails'), // Load user details from local storage
  wishList: loadFromLocalStorage('wishlist'),
  cartItems: loadFromLocalStorage('cartItems'),
};

// Create user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Reducer for updating user details
    updateUserDetails: (state, action) => {
      state.userDetails = action.payload; // Update user details
      saveToLocalStorage('userDetails', state.userDetails); // Save to local storage
    },
    // Reducer for adding an item to the wishlist
    addToWishList: (state, action) => {
      const itemExists = state.wishList.some(item => item.id === action.payload.id);
      if (!itemExists) {
        state.wishList.push(action.payload);
        saveToLocalStorage('wishlist', state.wishList); // Save updated wishlist to local storage
      }
    },
    // Reducer for removing an item from the wishlist
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter(item => item.id !== action.payload);
      saveToLocalStorage('wishlist', state.wishList); // Save updated wishlist to local storage
    },
    // Reducer for adding an item to the cart
    addToCart: (state, action) => {
      const itemExists = state.cartItems.find(item => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
      saveToLocalStorage('cartItems', state.cartItems); // Save updated cart to local storage
    },
    // Reducer for removing an item from the cart
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      saveToLocalStorage('cartItems', state.cartItems); // Save updated cart to local storage
    },
    // Reducer for updating the quantity of a cart item
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
        saveToLocalStorage('cartItems', state.cartItems); // Save updated cart to local storage
      }
    },
  },
});

// Export the reducer and actions
export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
export const userSelector = (state) => state.user;
