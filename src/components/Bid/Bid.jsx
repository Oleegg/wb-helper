/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from "react";
import { useHttp } from "../../hooks/httpHook";
import { appContext } from "../../context/appContext";
import "./Bid.css";

const Bid = () => {
  const { token, search } = useContext(appContext);
  const [selectValue, setSelectValue] = useState("");
  const { request } = useHttp();

  const searchHandler = useCallback(async () => {
    try {
      const data = await request(
        `wb/adverts/?type=6&input=${search.text}`,
        "GET",
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      await search.setSearchData(data.bets);
    } catch (e) {
      console.log(e);
    }
  }, [token, search, request]);

  useEffect(() => {
    searchHandler();
  }, [token]);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      searchHandler();
    }
  };

  return (
    <section className=" content bid">
      <h2>Актуальные ставки</h2>
      <div className="search-form">
        <label className="select ">
          Тип
          <select
            className="select__input"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option>Поиск</option>
          </select>
        </label>
        <div onKeyDown={onKeyDown} className="search ">
          <input
            type="text"
            value={search.text}
            onChange={(e) => search.setSearchText(e.target.value)}
            className="search__input"
            placeholder="Поиск по названию или артикулу"
          />
          <div className="search__svg" />
        </div>
        <button onClick={(e) => searchHandler(e)} className="search-form__btn">
          Найти
        </button>
      </div>
    </section>
  );
};

export default Bid;
