import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{ FILTER_MEMBERS,ADVANCE_FILTER_MEMBERS } from '../../actions/actionTypes'



import './styles.scss';

const SearchBar = () => {

    const reducer = useSelector(state => state.membersReducer);
    const dispatch = useDispatch();

    const handleChange = val => {
      dispatch({
        type: FILTER_MEMBERS,
        value: val
      })
    }

    const handleAdvanceChange = val => {
      dispatch({
        type: ADVANCE_FILTER_MEMBERS,
        value: val
      })
    }

  return (
      <div className="searchBar">
        <input
          className="inputField"
          name="search"
          type="text"
          placeholder="Search..."
          value={reducer.inputSearch}
          onChange={(e) => handleChange(e.target.value)}
        />
        <select onChange={(e)=>handleAdvanceChange(e.target.value)}>
          <option value="name">Name</option>
          <option value="title">Title</option>
          <option value="party">Party</option>
          <option value="gender">Gender</option>
        </select>

      </div>

  )
}

export default SearchBar;