import React from 'react';
import './SearchBox.css';
const SearchBox = (props)=>{

    return(
        <div className="container">
            <form className="searchForm">

                <input type="text" className="searchForm__input" placeholder={props.placeholder} value={props.value}
                onChange={(e)=>{
                  props.onchange(e)
                }}
                style={props.searchBoxStyles}
                />

                <button type="submit" className="searchForm__btn"
                style={props.searchButtonStyles}
                onClick = {(e)=>{props.OnSubmit(e)}}
                >

                <i className="fa fa-search" style={props.searchIconStyles}></i>

                </button>

            </form>
        </div>
    )
}

export default SearchBox;