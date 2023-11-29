import { useState } from "react";
import Header from "./components/Header/Header";
import { useRoutes } from "./pages/routes";
import { appContext } from "./context/appContext";
import { useAuth } from "./hooks/authHook";
import "./App.css";

function App() {
  const { token, login, logout } = useAuth();
  const [searchText, setSearchText] = useState("бытовая техника");
  const [searchData, setSearchData] = useState([]);
  const search = {
    data: searchData,
    text: searchText,
    setSearchText,
    setSearchData,
  };
  const auth = { token, login, logout };
  const routes = useRoutes();

  console.log("searchData", searchData);
  return (
    <appContext.Provider
      value={{
        auth,
        search,
        token,
      }}
    >
      <div className="app">
        <Header />
        <>{routes}</>
      </div>
    </appContext.Provider>
  );
}

export default App;
