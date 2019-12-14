  
import React from 'react'
import './styles.scss'
   

const DEFAULT_IMAGE = 'https://drogaspoliticacultura.net/wp-content/uploads/2017/09/placeholder-user.jpg'

export const InfoCard = ({ id, fullName = 'Full Name', title = 'senator', src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <div className="container">
           <img className="image" src={src} alt="member"/>
           <div className="info">
                <span className="primary">{ fullName }</span>
                <span className="secondary">{ title }</span>
           </div>
      </div>

    </article>
  )
}