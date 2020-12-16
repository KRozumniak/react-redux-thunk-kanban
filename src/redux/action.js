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

export function addCard(input) {

  const newTask = {
    name: 'KR',
    description: input,
    status: 'done',
    priority: 0,
  }

  return (dispatch) => {
    axios.post(`https://nazarov-kanban-server.herokuapp.com/card/`, newTask)
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

export function editCard(input, cardId) {

  return (dispatch) => {
    axios.patch(`https://nazarov-kanban-server.herokuapp.com/card/${cardId}`, {name: input})
      .then(res => {
        dispatch(getCards())
        // dispatch({
        //     type: 'EDIT_CARD',
        //     payload: {input, cardId},
        //   }, getCards()
        // )
      })
      .catch((err) => {
        console.log('NOT EDITED')
        console.log(err)
      })
  }
}

