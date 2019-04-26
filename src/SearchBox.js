import React from "react";
import "./SearchBox.module.css";
const SearchBox = props => {
  return (
    <div>
      <form className="searchForm" style={props.searchFormStyles}>
        <input
          type="text"
          className="searchForm__input"
          placeholder={props.placeholder}
          value={props.value}
          onChange={e => {
            props.onchange(e);
          }}
          style={props.searchBoxStyles}
        />

        <button
          type="submit"
          className="searchForm__btn"
          style={props.searchButtonStyles}
          onClick={e => {
            props.OnSubmit(e);
          }}
        >
          <i className="fa fa-search" style={props.searchIconStyles} />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
