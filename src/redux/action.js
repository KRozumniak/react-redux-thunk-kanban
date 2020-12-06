import axios from 'axios';

export function getColumns() {
  return (dispatch) => {
    axios.get('https://nazarov-kanban-server.herokuapp.com/column')
      .then(res => {
        dispatch({
          type: 'SET_COLUMNS',
          payload: res.data
        })
      })
      .catch((err) => {
        //handle server
        console.log(err)
      })
  }
}

export function getCards() {
  return (dispatch) => {
    axios.get('https://nazarov-kanban-server.herokuapp.com/card')
      .then(res => {
        dispatch({
          type: 'SET_CARDS',
          payload: res.data
        })
      })
      .catch((err) => {
        //handle server
        console.log(err)
      })
  }
}

export function deleteCard(cardId) {
  return (dispatch) => {
    axios.delete(`https://nazarov-kanban-server.herokuapp.com/card/${cardId}`)
      .then(res => {
        dispatch(
          getCards()
        )
      })
      .catch((err) => {
        //handle server
        console.log(err)
      })
  }
}