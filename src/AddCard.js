import {addCard, deleteColumn} from "./redux/action";
import {connect} from "react-redux";
import {useState} from "react";
import {Button, Col, Input, Row} from "reactstrap";

function AddCard(props) {
  const [inputValue, setInputValue] = useState('');

  const addButtonHandler = () => {
    props.addCard(inputValue)
    setInputValue('')
  }

  return (
    <div>
      <Row>
        <Col>
            <Button onClick={addButtonHandler}>Add card</Button>
        </Col>
        <Col xs={10}>
            <Input
              type="text"
              value={inputValue}
              placeholder={'Type some description... and then click on the button'}
              onChange={(e) => setInputValue(e.target.value)}
            />
        </Col>
      </Row>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addCard: (input) => dispatch(addCard(input))
})

export default connect(null, mapDispatchToProps)(AddCard);
