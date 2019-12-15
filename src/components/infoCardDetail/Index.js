import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './styles.scss'
   

const REPUBLICAN_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Republican_Disc.svg/1200px-Republican_Disc.svg.png'
const DEMOCRAT_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/2000px-US_Democratic_Party_Logo.svg.png'
const INDEPENDENT_IMAGE = 'https://pbs.twimg.com/profile_images/520616958006267904/fhZzscao_400x400.png'
export const InfoCardDetail = ({ id, party='', fullName = 'Full Name', title = 'senator'}) => {

  let PartyImage = () => {
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
      <div className="Detail-container">
           <img className="Detail-image" src={PartyImage()} alt="member"/>
           <div className="Detail-info">
                <span className="Detail-primary">{ fullName }</span>
                <span className="Detail-secondary">{ title }</span>
                <p><span className="title">Telefon</span> 089 - 358 557 88</p>
            <p><span className="title">Fax</span> 089 - 358 557 88</p>
            <p><span className="title">Mobil</span> 0179 - 673 77 41</p>
           </div>
      </div>
      <Link  to={`/`}>
        <button className="backButtom">Back</button>
      </Link>

    </article>
  )
}