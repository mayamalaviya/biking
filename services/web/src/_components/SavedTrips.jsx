import React from 'react';
import { Link } from 'react-router-dom';

const SavedTrips = (props) => {

  return (
    <div>
      <br/><br/>
      <div className="text-center"><Link to='/'>Home</Link></div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Date Added</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            props.saved.map((trip) => {
              return (
                <tr key={trip.id}>
                  <td>{ trip.id }</td>
                  <td>{ trip.title }</td>
                  <td>{ trip.created_at }</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default SavedTrips;
