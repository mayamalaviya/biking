import React from 'react';
import EquipmentCard from './EquipmentCard';

const EquipmentList = (props) => {
  return (
    <div className="text-center">
      {props.equipment.map(item => (
        <EquipmentCard
          item={item.item}
          make={item.make}
          model={item.model}
          yearBought={item.yearBought}
          primaryUser={item.primaryUser}
          usageQuantity={item.usageQuantity}
          usageUnit={item.usageUnit}
          saveEquipment={props.saveEquipment}
        />
      ))}
    </div>
  )
}

export default EquipmentList;
