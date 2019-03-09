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

export function vendor(state = initialState, action) {
  switch (action.type) {
      case 'FETECHED_ALL_EQUIPMENT':
          return {
              ...state,
              vendor: action.vendor
          };
      case 'EQUIPMENT_DETAIL':
          return {
              ...state,
              id: action.id,
              name: action.name,
              mobile: action.mobile,
              phone_number: action.phone_number,
              address: action.address
          };
      case "USER_UPDATED":
          return state;
      case "HANDLE_ON_CHANGE":
          return {
              ...state,
              [action.props]: action.value
          };
      default:
          return state
      }
}