import {connect} from "react-redux";
import {CardTitle, Card, CardText, Col} from "reactstrap";
import {deleteCard, editCard} from "./redux/action";
import ModalWindow from "./ModalWindow";

function CardItem(props) {

  const {card} = props;

  return (
    <Col>
      <Card body>
        <CardTitle>
          {card.name}</CardTitle>
        <CardText>
          {card.description}
        </CardText>
        <CardText>
          <strong>
            Priority: {card.priority}
          </strong>
        </CardText>
        <CardText>
          <ModalWindow
            card={card}
          />
        </CardText>
      </Card>
    </Col>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteCard: (cardId) => dispatch(deleteCard(cardId)),
  editCard: (newTitle, cardId) => dispatch(editCard(newTitle, cardId))
})

export default connect(null, mapDispatchToProps)(CardItem);