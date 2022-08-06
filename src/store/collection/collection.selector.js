export const selectCollections = (state) => ({
  currentCollection: state.collections.currentCollection,
  qty: state.collections.currentCollection.length,
});
