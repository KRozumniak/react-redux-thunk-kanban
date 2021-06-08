import {Col} from "reactstrap";
import CardItem from "./CardItem";

export default function Column(props) {
  const {cards, column} = props;

  return (
    <Col xs={2} style={{'border': '1px solid'}}>
      <h3>{column.status}</h3>
      {cards.filter(el => el.status === column.status)
        .sort((task1, task2) => task2.priority - task1.priority)
        .map(el =>
          <CardItem
            key={el._id}
            card={el}
          />
        )}
    </Col>
  );
}