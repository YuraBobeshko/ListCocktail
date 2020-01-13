import React, { useEffect, useState } from "react";

import "./Sidebar.scss";

export default function Sidebar(props) {
  const { loadDataListType, listType, saveListType } = props;

  const [currentSort, setCurrentSort] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true)

  useEffect(() => {
    if (!currentSort) {
      loadDataListType();
      setCurrentSort(listType);
    }
  }, [currentSort, listType, loadDataListType]);

  const handelListType = title => {
    setCurrentSort(
      currentSort.map(type =>
        type.title === title ? { title: type.title, sort: !type.sort } : type
      )
    );
  };

  if (currentSort) {
    return (
      <div>
        <div onClick={() => setShowSidebar(!showSidebar)} className="sidebar-menu__header">
          <img
            className={`sidebar-menu__arrow ${showSidebar ? 'active' : ''}`}
            alt="arrow"
            src="./photos/arrow.svg"
          />
        </div>
        <div className={`sidebar-menu ${showSidebar ? 'active' : ''}`}>
          {currentSort.map((type, index) => {
            return (
              <label className="sidebar-menu__item" key={type + index}>
                <input
                  value={type.sort}
                  onChange={() => handelListType(type.title)}
                  className="sidebar-menu__inputDefault"
                  type="checkbox"
                />
                {type.sort ? (
                  <img
                    alt={type.title + type.sort}
                    src="./photos/inputTrue.svg"
                    className="sidebar-menu__input"
                  />
                ) : (
                  <img
                    alt={type.title + type.sort}
                    src="./photos/inputFalse.svg"
                    className="sidebar-menu__input"
                  />
                )}
                <span className="sidebar-menu__title">{type.title}</span>
              </label>
            );
          })}
          <button
            onClick={() => saveListType(currentSort)}
            className="sidebar-menu__button"
          >
            APPLY
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
