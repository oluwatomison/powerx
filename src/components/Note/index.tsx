import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAuth, LoginStatus } from "../Login/authslice";
import { getUserNotes } from "../Note/noteSlice";

export function Note() {
     const dispatch = useAppDispatch();
     const auth = useAppSelector(selectAuth);
     const response = useAppSelector((state) => state.notepadData.note);
     useEffect(() => {
          dispatch(getUserNotes("70"));
     }, []);

     if (auth.status !== LoginStatus.LOGGED_IN) return null;

     const {
          apiToken,
          user: { id: userId },
     } = auth;

     return (
          <textarea
               defaultValue="Note goes here..."
               value={response[0].note}
          ></textarea>
     );
}
