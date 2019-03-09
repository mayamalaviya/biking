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
              <td>{props.yearBought}</td>
              <td>{props.primaryUser}</td>
              <td>{props.usageQuantity}</td>
              <td>{props.usageUnit}</td>
              <td><button 
                onClick={()=>this.props.dispatch({type:'DELETE_EQUIPMENT',id:this.props.equipment.id})}>
                Delete</button>
              </td>
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
