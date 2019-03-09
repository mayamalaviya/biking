import React from 'react';
import DestinationCard from './DestinationCard';

const DestinationList = (props) => {
  return (
    <div className="text-center">
      {props.destinations.map(destination => (
        <DestinationCard
          name={destination.name}
          addedBy={destination.addedBy}
          trip_id={destination.trip_id}
          summary={destination.summary}
          detail={destination.detail}
          saveDestination={props.saveDestination}
        />
      ))}
    </div>
  )
}

export default DestinationList;
