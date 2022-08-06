export const selectCart = (state) => ({
  cart: state.cart.cart,
  cartTotal: state.cart.cartTotal,
  isCartActive: state.cart.isCartActive,
  cartStatus: state.cart.cartStatus,
});
