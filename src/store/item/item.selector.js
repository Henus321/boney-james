const DEFAULT_SIZE = '42';

export const selectItem = (state) => ({
  item: state.item.currentItem,
  colorId: state.item.colorId,
  currentSize: state.item.currentSize || DEFAULT_SIZE,
});
