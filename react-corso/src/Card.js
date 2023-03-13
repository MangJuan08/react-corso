import React from 'react'

export const Card = (props) => {
  return (
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.nome}</h5>
      <p>
      €{props.prezzo}
      </p>
    </div>
  </div>
  )
}
