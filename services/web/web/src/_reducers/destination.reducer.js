const initialState = {
  anchor: 'left',
  destination: [],
  id: '',
  name: '',
  added_by: '',
  trip_id: '',
  summary: '',
  detail: '',
};

export function destination(state = initialState, action) {
  switch (action.type) {
      case 'FETECHED_ALL_DESTINATION':
          return {
              ...state,
              vendor: action.vendor
          };
      case 'DESTINATION_DETAIL':
          return {
              ...state,
              id: action.id,
              name: action.name,
              added_by: action.added_by,
              trip_id: action.trip_id,
              summary: action.summary,
              detail: action.detail
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