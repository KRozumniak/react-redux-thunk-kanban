import {Col} from "reactstrap";
import CardItem from "./CardItem";

function Column(props) {

  const {cards, column} = props;

  return (
    <Col xs={3} style={{'border': '1px solid'}}>
      <h3>{column.title}</h3>
      <h3>Column</h3>
      {cards.filter(el => el.status === column.status)
      .map(el =>
        <CardItem
          key={el._id}
          card={el}
        />
      )}
    </Col>
  );
}

export default Column;