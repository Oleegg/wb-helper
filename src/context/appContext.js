import { createContext } from "react";

function noop() {}
const search = { data: [], text: "" };
const auth = { token: null, login: noop, logout: noop, isAuth: false };

export const appContext = createContext({
  auth,
  search,
});
