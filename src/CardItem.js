import {connect} from "react-redux";
import {useState} from 'react';
import {CardTitle, Card, CardText, Col} from "reactstrap";

function CardItem(props) {

  const [newTitle, setNewTitle] = useState('');
  const [editMode, setEditMode] = useState(false);

  const editButtonHandler = () => {
    props.editCard(newTitle, props.id)
    setNewTitle('')
  }

  const deleteButtonHandler = () => {
    props.deleteCard(props.id)
  }

  return (
    <Col>
      <Card body>
        <CardTitle tag="h5">{props.task.title}</CardTitle>
        <CardText>
          {props.task.status !== 'todo' && <button onClick={() => props.moveCard(props.id, -1)}>Left</button>}
          {props.task.status !== 'done' && <button onClick={() => props.moveCard(props.id, 1)}>Right</button>}
        </CardText>
        {!editMode && <button onClick={() => setEditMode(!editMode)}>Edit</button>}
        <CardText>
          {editMode &&
          <>
            <button onClick={() => setEditMode(!editMode)}>Cancel</button>
            <button onClick={deleteButtonHandler}>Delete</button>
            <button onClick={editButtonHandler}>Save</button>
          </>
          }
        </CardText>
        <CardText>
          {editMode && <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />}
        </CardText>
      </Card>
    </Col>
  );
}

const mapStateToProps = (state) => ({
  cards: state.cards
})

const mapDispatchToProps = (dispatch) => ({
  editCard: (title, id) => dispatch({type: 'CARD_EDIT', payload: title, taskId: id}),
  deleteCard: (id) => dispatch({type: 'CARD_DELETE', payload: id}),
  moveCard: (id, value) => dispatch({type: 'CARD_MOVE', payload: {value, id}}),
})


export default connect(mapStateToProps, mapDispatchToProps)(CardItem);