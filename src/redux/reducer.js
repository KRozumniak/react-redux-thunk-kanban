const initialState = {
  statuses: [
    'todo',
    'progress',
    'review',
    'done',
  ],
  cards: [
    {
      title: 'First task',
      status: 'todo',
      done: true,
      id: 1,
    },
    {
      title: 'Second task',
      status: 'progress',
      done: false,
      id: 2,
    },
    {
      title: 'Third task',
      status: 'review',
      done: false,
      id: 3,
    },
    {
      title: 'Fourth task',
      status: 'done',
      done: false,
      id: 4,
    },
  ],
};

const cards = (state = initialState, action) => {
  switch (action.type) {

    case 'CARD_ADD':
      return {
        ...state,
        cards: [...state.cards, {title: action.payload, status: 'todo', done: false, id: Math.random()}]
      }

    case 'CARD_EDIT':
      const newCards = state.cards.map(card => {
        if (card.id === action.taskId) return {
          ...card, title: action.payload
        };
        return card;
      })
      return {
        ...state,
        cards: [...newCards]
      }

    case 'CARD_DELETE':
      const updatedCards = state.cards.filter(card => card.id !== action.payload);
      return {
        ...state,
        cards: [...updatedCards]
      }

    case 'CARD_MOVE':
      const changeStatus = (currentStatus, value) => {
        return state.statuses[state.statuses.indexOf(currentStatus) + value];
      }

      const newTasks = state.cards.map(card =>
        card.id === action.payload.id ? {...card, status: changeStatus(card.status, action.payload.value)} : card)
      return {
        ...state,
        cards: [...newTasks]
      }

    default:
      return state;
  }

};

export default cards;