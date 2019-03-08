import React from 'react';
import EquipmentCard from './EquipmentCard';

const EquipmentList = (props) => {
  return (
    <div className="text-center">
      {props.equipments.map(equipment => (
        <EquipmentCard
          item={equipment.item}
          make={equipment.make}
          model={equipment.model}
          yearBought={equipment.year_bought}
          primaryUser={equipment.primary_user}
          usageQuantity={equipment.usage_quantity}
          usageUnit={equipment.usage_unit}
          saveEquipment={props.saveEquipment}
        />
      ))}
    </div>
  )
}

export default EquipmentList;
