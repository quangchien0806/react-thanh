import { configureStore } from "@reduxjs/toolkit";
import user from "./../features/crud/crud";

export const store = configureStore({
  reducer: { user },
});
