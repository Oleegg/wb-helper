import { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/appContext";
import CardList from "../CardList/CardList";
import Priority from "../Priority/Priority";
import { useHttp } from "../../hooks/httpHook";
import Regions from "../Regions/Regions";
import "./AppContent.css";

const AppContent = () => {
  const context = useContext(appContext);
  const { request } = useHttp();
  const [regions, setRegions] = useState(null);

  useEffect(() => {
    const regionsHandler = async () => {
      try {
        const data = await request(`wb/regions/`, "GET", null, {
          Authorization: `Bearer ${context.auth.token}`,
        });
        setRegions(data);
      } catch {}
    };
    regionsHandler();
  }, [context, request]);

  return (
    <div className="content app-content">
      <div className="app-content__list">
        <Regions regions={regions} />
        <CardList />
      </div>
      <Priority />
    </div>
  );
};

export default AppContent;
