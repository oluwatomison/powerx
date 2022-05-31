import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserNotes = createAsyncThunk(
     "get-user-notes",
     async (userId: string, { rejectWithValue }) => {
          try {
               const response = await fetch(
                    "https://60b793ec17d1dc0017b8a6bc.mockapi.io/users",
                    {
                         method: "GET",
                         headers: { "content-type": "application/json" },
                    }
               );
               const responseData = await response.json();
               const filterWithUserId = responseData.filter(
                    (obj: any) => obj.id == userId
               );
               return filterWithUserId;
          } catch (error: any) {
               return rejectWithValue(error);
          }
     }
);

export interface NotepadProps {
     note: any;
     id: any;
}

const initialState: NotepadProps = {
     note: "",
     id: "",
};

export const notepadSlice = createSlice({
     name: "notepad",
     initialState,
     reducers: {
          getNotespadData: (state, { payload }) => {
               return {
                    ...state,
                    ...payload,
               };
          },
     },
     extraReducers: (builder) => {
          builder
               .addCase(getUserNotes.pending, (state) => {})
               .addCase(getUserNotes.fulfilled, (state, action) => {
                    state.note = action.payload;
               })
               .addCase(getUserNotes.rejected, (state, action) => {});
     },
});

export const { getNotespadData } = notepadSlice.actions;
export default notepadSlice.reducer;
