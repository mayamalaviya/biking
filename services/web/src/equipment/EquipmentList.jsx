import React from 'react';
import EquipmentCard from './EquipmentCard';

import { connect } from 'react-redux';

class EquipmentList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(equipmentAction.getEquipment());
  }

  handleChange = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  handleClick = (event, id) => {
    console.log(id);
    const { dispatch } = this.props;
    dispatch(equipmentAction.deleteEquipmentById(id))
  };
  
constructor () {
  this.handleInputChange = this.handleInputChange.bind(this);
};

handleInputChange (event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  this.setState({
    [name]: value
  });
};
  render() {
    return (
      <div className="text-center">
        {this.props.equipment.map(gear => (
          <EquipmentCard
            item={gear.item}
            make={gear.make}
            model={gear.model}
            yearBought={gear.yearBought}
            primaryUser={gear.primaryUser}
            usageQuantity={gear.usageQuantity}
            usageUnit={gear.usageUnit}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    equipment: state
  }
}

export default connect(mapStateToProps)(EquipmentList);
