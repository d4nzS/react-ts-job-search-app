import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isLoading: boolean;
  loaderAnimationAdvance: number;
}

const initialState: UIState = {
  isLoading: false,
  loaderAnimationAdvance: 0
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true;
    },
    removeLoading(state) {
      state.isLoading = false;
    },
    setLoaderAnimationAdvance(state, action: PayloadAction<number>) {
      state.loaderAnimationAdvance = action.payload;
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;