import {useState} from 'react';
import {Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {deleteCard, editCard, moveCard, changePriority} from "./redux/action";
import {connect} from "react-redux";

function ModalWindow(props) {
  const {card} = props;

  const initColumns = [
    'todo',
    'progress',
    'review',
    'done',
    'Maybe',
    'I will never do it again...'
  ];

  const [modal, setModal] = useState(false);
  const [input, setInput] = useState('');

  const toggle = () => setModal(!modal);

  const editButtonHandler = () => {
    props.editCard(input, card._id)
    setInput('')
    console.log(input, card._id)
  }

  const deleteButtonHandler = () => {
    props.deleteCard(card._id)
    toggle()
  }

  const moveButtonHandler = (status, value) => {
    const changeStatus = (currentStatus, value) => {
      return initColumns[initColumns.indexOf(currentStatus) + value];
    }
    props.moveCard(changeStatus(status, value), card._id)
    toggle()
  }

  const priorityButtonHandler = (cardId, value) => {
    props.changePriority(card.priority + value, cardId)
    toggle()
  }

  return (
    <div>
      <button className="btn btn-secondary" onClick={toggle}>Edit</button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit card</ModalHeader>
        <ModalBody>
          <Input
            value={input}
            placeholder={'Type here...'}
            onChange={(e) => setInput(e.target.value)}
          />
        </ModalBody>
        <ModalBody>
          <button disabled={card.status === 'todo'} onClick={() => moveButtonHandler(card.status, -1)}>Left</button>
          <button disabled={card.status === 'Maybe'} onClick={() => moveButtonHandler(card.status, 1)}>Right</button>
        </ModalBody>
        <ModalBody>
          <button onClick={() => priorityButtonHandler(card._id, -1)}>-1</button>
          <button onClick={() => priorityButtonHandler(card._id, 1)}>+1</button>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={deleteButtonHandler}>Delete</button>
          <br/>
          <button className="btn btn-secondary" onClick={editButtonHandler}>Save</button>
          <button className="btn btn-secondary" onClick={toggle}>Cancel</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
  deleteCard: (cardId) => dispatch(deleteCard(cardId)),
  editCard: (newTitle, cardId) => dispatch(editCard(newTitle, cardId)),
  moveCard: (newStatus, value, cardId) => dispatch(moveCard(newStatus, value, cardId)),
  changePriority: (value, cardId) => dispatch(changePriority(value, cardId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);