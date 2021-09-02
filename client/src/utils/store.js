import { createStore } from "redux";
import { reducer } from "./reducers";

export const store = createStore(reducer, {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: "",
});
