import React from 'react';

const TripCard = (props) => {
  return (
    <div className='col-md-4'>
      <div className='panel panel-info'>
        <div className='panel-heading'>
          <h3 className='panel-title'>{props.name}</h3>
        </div>
        <div className='panel-body'>
          <img src={props.banner} />
          <h4>{props.trip_id}, {props.addedBy}</h4>
          <h4>{props.summary}</h4>
          <p>{props.detail}</p>
        </div>
        <button
          className='btn btn-primary btn-sm'
          onClick={ () => props.editTrip(props.id) }
        >Edit
        </button>
      </div>
    </div>
  )
}

export default TripCard;
