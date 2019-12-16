import React,{ useState,useEffect } from 'react'
import {  useSelector } from 'react-redux';

import { BrowserRouter as Router, Route, Link, generatePath } from 'react-router-dom';

import './styles.scss'
   

const REPUBLICAN_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Republican_Disc.svg/1200px-Republican_Disc.svg.png'
const DEMOCRAT_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/2000px-US_Democratic_Party_Logo.svg.png'
const INDEPENDENT_IMAGE = 'https://pbs.twimg.com/profile_images/520616958006267904/fhZzscao_400x400.png'
export const InfoCardDetail = (props) => {

  const intialState = {
    first_name: "name",
    last_name: "Brown",
    in_office: true,
    gender: "M",
    party: "D",
    twitter_account: "default",
    facebook_account: "default",
    last_updated: "2019-12-13 06:48:43",
    phone: "202-224-3224",
    office: "307 Dirksen Senate Office Building",
    state: "CO"

  }
  const [member, setMember]= useState({title: "hola"});
  const reducer = useSelector(state => state.membersReducer);

  const selectedMember = () => { 
    const id = props.location.state.id;

    console.log(id);

    Object.values(reducer.data).forEach(e => {
      if (e.id.indexOf(id) >= 0) {
        setMember(e);
        console.log(member);
      }
    });


  }

  useEffect(() => {

    selectedMember();

  }, [member])


  const getGender = () => {
    let genderParsed;

    if(member.gender === "M") {
      genderParsed = "Male"
    } else {
      genderParsed = "Female"
    }

    return genderParsed
  }

  
  const PartyImage = () => {
    const party = member.party ;

    if (party === "D") {
       return DEMOCRAT_IMAGE
    } 
    if (party === "R") {
      return REPUBLICAN_IMAGE
    } 

    if (party === "ID") {
      return INDEPENDENT_IMAGE
    } 
  
  }

  return (
    <article>
      <div className="containerDetail">
           <img className="imageDetail" src={PartyImage()} alt="member"/>
           <div className="Detail-info">
            <p><span className="state">{`${member.office} ${member.state}`}</span></p>
            <p><span className="state">{member.last_updated}</span></p>
            <p><span className="name">{`${member.first_name} ${member.last_name}`}</span></p>
            <p><span className="title">{member.title}</span></p>
            <p><span className="title">Gender: </span>{getGender()}</p>
            <p><span className="title">Phone: </span> {member.phone}</p>
            <p><span className="title">twitter: </span>{`@${member.twitter_account}`}</p>
           </div>
      </div>
      <Link  to={`/`}>
        <button className="backButtom">Back</button>
      </Link>

    </article>
  )
}