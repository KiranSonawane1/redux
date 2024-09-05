
const initialState ={
    state:0
}

const ActionReducer = (state=initialState,action) =>{
    switch (action.type) {
        case 'Increment':
          return {
            ...state,
            state: state.state + 1,
          };
        case 'Decrement':
          return {
            ...state,
            state: state.state - 1,
          };
        default:
          return state;
      }
}

export default ActionReducer;