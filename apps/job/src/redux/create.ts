import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./modules/rootReducer";

const create = () => {
  const store = configureStore({ reducer: rootReducer });
  return store;
};

export default create;

export type RootState = ReturnType<ReturnType<typeof create>["getState"]>;
export type AppDispatch = ReturnType<typeof create>["dispatch"];
