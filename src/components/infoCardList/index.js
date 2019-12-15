import React, { useEffect } from 'react'
import { InfoCard } from '../infoCard/index';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export const InfoCardList = () => {

    const content = useSelector(state => state.membersReducer);
    const dispatch = useDispatch();

    const config = {
        headers:{
            'X-API-KEY': ''
        }
    }

    function fetchData() {
        return dispatch => {
          axios.get('https://api.propublica.org/congress/v1/116/senate/members.json',  config
        )
          .then(res =>
            dispatch({
              type: "FETCH_MEMBERS",
              data: res.data.results[0].members
            })
          );
        };
      }

        useEffect(() => {
            dispatch(fetchData());
        }, [])

      const filterMembers = () => {  
       let filter = []
       let advanceSearch = "";


       Object.values(content.data).forEach(e => {
        
        switch(content.searchType) {
          case "name":
            advanceSearch = `${e.first_name}${e.last_name}`;
            break;
          case "title":
            advanceSearch = e.title;
            break;
          case "gender":
              advanceSearch = e.gender;
            break;
            case "party":
              advanceSearch = e.party;
            break;
              
          default:
            break;
         }

          if (advanceSearch.toLowerCase().indexOf(content.inputSearch) >= 0) {
            return filter.push(e);
          }
        });
        return filter;

      }

    return (
        <ul>
            {filterMembers().map(member => <InfoCard  id={member.id} party={member.party} fullName={`${member.first_name} ${member.last_name}`} title={member.title} key={member.id}/> )}
        </ul>     
    )
}