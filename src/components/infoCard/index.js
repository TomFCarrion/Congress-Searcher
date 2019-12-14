  
import React from 'react'
import './styles.scss'
   

const REPUBLICAN_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Republican_Disc.svg/1200px-Republican_Disc.svg.png'
const DEMOCRAT_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/US_Democratic_Party_Logo.svg/2000px-US_Democratic_Party_Logo.svg.png'
const INDEPENDENT_IMAGE = 'https://pbs.twimg.com/profile_images/520616958006267904/fhZzscao_400x400.png'
export const InfoCard = ({ id, party='', fullName = 'Full Name', title = 'senator'}) => {

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
      <div className="container">
           <img className="image" src={PartyImage()} alt="member"/>
           <div className="info">
                <span className="primary">{ fullName }</span>
                <span className="secondary">{ title }</span>
           </div>
      </div>

    </article>
  )
}