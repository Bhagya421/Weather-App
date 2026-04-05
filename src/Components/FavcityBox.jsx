import React from 'react'
import './FavcityBox.css'

function FavcityBox({favcity, closefavcity}) {

  return (
    <div id='favbox'>
        {/* Heading with bootstrap heart icon and added color */}
        <h3>Favorite Cities <i className="bi bi-heart-fill text-danger"></i> </h3>

        {/* Ternary operator is used. p tag is displayed if rray is empty else the list of city is showed using map method where each city is deisplayed from favcity array using index */}
        {favcity.length === 0 ? (
            <p>No favorite cities added</p> 
        ) : (
            <ul>
            {favcity.map((city, index) => (
                <li key={index}>{city}</li>
            ))}
            </ul>
        )}

        {/* close the favcitybox when this btn is triggered */}
        <button onClick={closefavcity}>Close</button>
    </div>
  )
}

export default FavcityBox
