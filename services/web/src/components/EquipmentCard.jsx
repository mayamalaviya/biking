import React from 'react';

const EquipmentCard = (props) => {
  return (
    <div className='col-md-4'>
      <div className='panel panel-info'>
        <div className='panel-heading'>
          <h3 className='panel-title'>{props.item}</h3>
        </div>
        <div className='panel-body'>
          <table>
            <tr>
              <td>{props.item}</td>
              <td>{props.make}</td>
              <td>{props.model}</td>
              <td>{props.year_bought}</td>
              <td>{props.primary_user}</td>
              <td>{props.usage_quantity}</td>
              <td>{props.usage_unit}</td>
            </tr>
          </table>
        </div>
        <button
          className='btn btn-primary btn-sm'
          onClick={ () => props.editEquipment(props.id) }
        >Edit
        </button>
      </div>
    </div>
  )
}

export default EquipmentCard;
