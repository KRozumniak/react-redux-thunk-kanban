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

    case 'EDIT_CARD':
      const newCards = state.cards.map(card => {
        if (card.id === action.payload.cardId) return {
          ...card, name: action.payload.input, status: 'review'
        };
        return card;
      })
      return {
        ...state,
        cards: [...newCards]
      }


    // case 'ADD_CARD':
    //   return {
    //     ...state,
    //     cards: [...state.cards, {description: action.payload, status: 'done', name: 'default name', _id: Math.random()}]
    //   }


    default:
      return state;
  }

};

export default cards;