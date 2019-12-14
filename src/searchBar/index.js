import React , {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';


import './styles.scss';

const SearchBar = () => {

    const searchInput = useSelector(state => state.membersReducer);
    const dispatch = useDispatch();

    const handleChange = val => {
      console.log(val)
      dispatch({
        type: "FILTER_MEMBERS",
        value: val
      })
    }

    console.log(searchInput.inputSearch);

  return (
      <div className="searchBar">
        <input
          className="inputField"
          name="search"
          type="text"
          placeholder="Search..."
          value={searchInput.inputSearch}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

  )
}

export default SearchBar;