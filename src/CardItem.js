import {connect} from "react-redux";
import {useState} from 'react';
import {CardTitle, Card, CardText, Col} from "reactstrap";
import {deleteCard} from "./redux/action";

function CardItem(props) {

  const {card} = props;

  const [newTitle, setNewTitle] = useState('');
  const [editMode, setEditMode] = useState(false);
  //
  // const editButtonHandler = () => {
  //   props.editCard(newTitle, props.id)
  //   setNewTitle('')
  // }
  //
  // const deleteButtonHandler = () => {
  //   props.deleteCard(props.id)
  // }

  return (
    <Col>
      <Card body>
        <CardTitle>
          {card.name}</CardTitle>
        <CardText>
          {card.description}
          {/*{props.task.status !== 'todo' && <button onClick={() => props.moveCard(props.id, -1)}>Left</button>}*/}
          {/*{props.task.status !== 'done' && <button onClick={() => props.moveCard(props.id, 1)}>Right</button>}*/}
        </CardText>
        {!editMode && <button onClick={() => setEditMode(!editMode)}>Edit</button>}
            <button onClick={() => props.deleteCard(card._id)}>Delete</button>
        <CardText>
          {editMode &&
          <>
            <button onClick={() => setEditMode(!editMode)}>Cancel</button>
            <button>Save</button>
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

const mapDispatchToProps = (dispatch) => ({
  deleteCard: (cardId) => dispatch(deleteCard(cardId))
})

export default connect(null, mapDispatchToProps)(CardItem);