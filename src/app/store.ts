import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authslice from "../components/Login/authslice";
import notepadSlice from "../components/Note/noteSlice";
export const store = configureStore({
     reducer: {
          auth: authslice,
          notepadData: notepadSlice,
     },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
     ReturnType,
     RootState,
     unknown,
     Action<string>
>;
