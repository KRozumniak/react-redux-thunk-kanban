import {connect} from "react-redux";
import {useState} from "react";
import Panel from "./Panel";
import {Col, Container, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  const [inputValue, setInputValue] = useState('');

  const addButtonHandler = () => {
    props.addCard(inputValue);
    setInputValue('')
  }

  return (
    <Container>
      <Row className='mb-4'>
        <Col sm={6}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addButtonHandler}>Add card</button>
        </Col>
      </Row>
      <div>
        <Panel />
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cards: state.cards,
  status: state.status
})

const mapDispatchToProps = (dispatch) => ({
  addCard: (input) => dispatch({type: 'CARD_ADD', payload: input}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
