const tripReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TRIP':
      return state.concat([action.data]);
    case 'HANDLE_ON_CHANGE':
      return state.concat([action.data])
    default:
      return state;
  }
}
export default tripReducer;