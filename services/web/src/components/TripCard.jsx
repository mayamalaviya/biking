import React from 'react';

const TripCard = (props) => {
  return (
    <div className='col-md-4'>
      <div className='panel panel-info'>
        <div className='panel-heading'>
          <h3 className='panel-title'>{props.name}</h3>
        </div>
        <div className='panel-body'>
          <img src={props.banner} alt='Image' />
          <h4>{props.state}, {props.country}</h4>
          <h4>{props.month} {props.year} for {props.days}</h4>
          <p>{props.notes}</p>
        </div>
        <button
          className='btn btn-primary btn-sm'
          onClick={ () => props.editTrip(props.name) }
        >Edit
        </button>
      </div>
    </div>
  )
}

export default TripCard;
