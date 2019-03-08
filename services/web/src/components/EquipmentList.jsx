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
          year_bought={equipment.year_bought}
          primary_user={equipment.primary_user}
          usage_quantity={equipment.usage_quantity}
          usage_unit={equipment.usage_unit}
          saveEquipment={props.saveEquipment}
        />
      ))}
    </div>
  )
}

export default EquipmentList;
