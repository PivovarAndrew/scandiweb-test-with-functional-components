import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  choosenAttributes: [{
    productId: 0,
    attributeSetId: 0,
    attributeId: 0
  }]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.products.splice(state.products.findIndex(product =>
        product.id === action.payload.id
      ), 1)
      if (!state.products.some(product => product.id === action.payload.id)) {
        state.choosenAttributes.splice(state.choosenAttributes.findIndex(attribute =>
          attribute.productId === action.payload.id
        ), 1)
      }
    },
    chooseAttribute: (state, action) => {
      state.choosenAttributes.find((attribute) =>
        attribute.productId === action.payload.product.id &&
        attribute.attributeSetId === action.payload.attributeSet.id
      ).id = action.payload.selectedAttribute.id
    },
    setInitialAttributes: (state, action) => {
      // debugger;
      if (!state.products.some(product => product.id === action.payload.id)) {
        action.payload.attributes?.forEach((attributSet) => {
          state.choosenAttributes.push({
            productId: action.payload.id,
            attributeSetId: attributSet.id,
            id: attributSet.items[0].id
          })
        })
      }
      // debugger;
    }
  }
});

const { actions, reducer } = cartSlice;

export const {
  addToCart,
  removeFromCart,
  chooseAttribute,
  setInitialAttributes
} = actions;

export const selectProducts = (state) => state.cart.products;

export const selectChoosenAttributes = (state) => state.cart.choosenAttributes;

export default reducer;
