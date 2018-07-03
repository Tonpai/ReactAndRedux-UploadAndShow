import { createStore, applyMiddleware } from 'redux';

const initialState = {
  image: null,
};

const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'UPLOAD_IMAGE':
      return {
        ...state,
        image : action.image,
      };
    default:
      return state;
  }
}

const logger = store => next => action => {
  console.log("middleware :: logger");
  console.log(action);

  next(action);
}

const store = createStore(reducer, applyMiddleware(logger));

export default store;