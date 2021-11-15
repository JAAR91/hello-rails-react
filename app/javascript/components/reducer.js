export const FETCH_API_DATA = 'data/FETCH_API_DATA';
const LOAD_DATA = 'greetings/LOAD_DATA';

const initialState = {};

export const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
});

export const fetchData = () => ({
  type: FETCH_API_DATA,
});

export const fetchApiData = () => (next) => (action) => {
  switch (action.type) {
    case FETCH_API_DATA:
      fetch(`http://localhost:3000/api/v1/greetings`)
        .then((response) => response.json())
        .then((data) => {
          return next(loadData(data));
        });
      break;
    default:
      return next(action);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;