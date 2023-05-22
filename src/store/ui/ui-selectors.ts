import { RootState } from '../index';

export const isLoadingSelector = (state: RootState) => state.ui.isLoading;

export const loaderAnimationAdvanceSelector = (state: RootState) => state.ui.loaderAnimationAdvance;