import React from 'react';
import TripCard from './TripCard';

const TripList = (props) => {
  return (
    <div className="text-center">
      {props.trips.map(trip => (
        <TripCard
          key={trip.id}
          title={trip.Title}
          posterUrl={trip.Poster}
          saveTrip={props.saveTrip}
        />
      ))}
    </div>
  )
}

export default TripList;
