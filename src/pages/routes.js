import { Route, Routes } from "react-router-dom";
import AuthPage from "./in/SignIn";
import HomePage from "./HomePage/HomePage";

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<AuthPage />} />
    </Routes>
  );
};
