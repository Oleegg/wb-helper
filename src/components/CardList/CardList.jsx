import { useState, useContext } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import { appContext } from "../../context/appContext";
import "./CardList.css";

const CardList = () => {
  const data = useContext(appContext).search.data;
  const [activePage, setActivePage] = useState(1);

  const pageLength = data.filter((el) => el.page === 1).length || 0;
  const listLength = data.length || 0;
  const countPage = Math.ceil(listLength / pageLength);
  const pageData = data.filter((el) => el.page === activePage);

  return (
    <>
      <div className="card-list-header">
        <div className="card-list-header__number">Место</div>
        <div className="card-list-header__img">Фото</div>
        <div className="card-list-header__article">Артикул</div>
        <div className="card-list-header__position">Позиция</div>
        <div className="card-list-header__price">Ставка</div>
        <div className="card-list-header__category">Категория</div>
        <div className="card-list-header__delivery_time">Доставка</div>
      </div>
      <div className="card-list">
        {data.length ? (
          pageData.map((el, i) => <Card key={i} index={i + 1} data={el} />)
        ) : (
          <p>no data</p>
        )}
      </div>
      <Pagination
        setActivePage={setActivePage}
        activePage={activePage}
        countPage={countPage}
      />
    </>
  );
};
export default CardList;
