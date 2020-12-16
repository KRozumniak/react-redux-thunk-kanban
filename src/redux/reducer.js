const initialState = {
  cards: [],
  columns: []
};

const cards = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_COLUMNS':
      return {...state, columns: action.payload}

    case 'SET_CARDS':
      return {...state, cards: action.payload}

    default:
      return state;
  }

};

export default cards;