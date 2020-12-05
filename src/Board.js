import CardItem from "./CardItem";
import {connect} from 'react-redux';
import {Col} from "reactstrap";

function Board(props) {

  const {cards = []} = props;

  return (
    <Col>
      <h3 className={`p-2 m-2 border border-secondary`}>{props.status}</h3>
      {cards
        .filter(task => task.status === props.status)
        .map(task =>
            <CardItem
              task={task}
              key={task.id}
              id={task.id}
            />
        )}
    </Col>
  );
}

const mapStateToProps = (state) => ({
  cards: state.cards,
})

export default connect(mapStateToProps)(Board);