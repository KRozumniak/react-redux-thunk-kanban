import Board from "./Board";
import {Container, Row} from "reactstrap";
import {connect} from 'react-redux';

function Panel(props) {

  return (
    <Container className='d-flex justify-content-around flex-column'>
      <Row>
        {props.status.map(el =>
          <div>
            <Board
              key={el}
              status={el}
            />
          </div>
        )}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  status: state.statuses
})

export default connect(mapStateToProps)(Panel);