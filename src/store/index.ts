import { configureStore } from '@reduxjs/toolkit';

import { vacancyApi } from './vacancy/vacancy-api';
import vacancySlice from './vacancy/vacancy-slice';
import uiSlice from './ui/ui-slice';

export const store = configureStore({
  reducer: {
    [vacancyApi.reducerPath]: vacancyApi.reducer,
    vacancy: vacancySlice.reducer,
    ui: uiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(vacancyApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;