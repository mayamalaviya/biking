const initialState = { 
  anchor: 'left',
  equipment: [],
  id: '',
  item: '',
  make: '',
  model: '',
  year_bought: '',
  primary_user: '',
  usage_quantity: '',
  usage_unit: '',
};

export function equipment(state = initialState, action) {
  switch (action.type) {
      case 'FETECHED_ALL_EQUIPMENT':
          return {
              ...state,
              equipment: action.equipment
          };
      case 'EQUIPMENT_DETAIL':
          return {
              ...state,
              id: action.id,
              item: action.item,
              make: action.make,
              model: action.model,
              year_bought: action.year_bought,
              primary_user: action.primary_user,
              usage_quantity: action.usage_quantity,
              usage_unit: action.usage_unit
          };
      case "HANDLE_ON_CHANGE":
          return {
              ...state,
              [action.props]: action.value
          };
      default:
          return state
      }
}