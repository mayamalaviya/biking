const initialState = { 
  anchor: 'left',
  equipment: [],
  id: '',
  user_id: '',
  name: '',
  state: '',
  country: '',
  notes: '',
  month: '',
  year: '',
  days: '',
};

export function trip(state = initialState, action) {
  switch (action.type) {
      case 'FETECHED_ALL_TRIP':
          return {
              ...state,
              trip: action.trip
          };
      case 'TRIP_DETAIL':
          return {
              ...state,
              id: action.id,
              user_id: action.user_id,
              name: action.name,
              state: action.state,
              country: action.country,
              notes: action.notes,
              month: action.month,
              year: action.year,
              days: action.days
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