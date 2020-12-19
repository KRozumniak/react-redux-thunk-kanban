import Column from "./Column";
import {Row} from "reactstrap";
import {addCard, getCards, getColumns} from "./redux/action";
import {connect} from "react-redux";
import {useEffect} from "react";

function Board(props) {

  const {cards = [], columns = []} = props;

  useEffect(() => {
    props.getColumns();
    props.getCards();
  }, [])

  return (
    <Row>
      {columns.map(el =>
        <Column
          key={el._id}
          cards={cards}
          column={el}
        />
      )}
    </Row>
  );
}

const mapStateToProps = (state) => ({
  cards: state.cards,
  columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
  getColumns: () => dispatch(getColumns()),
  getCards: () => dispatch(getCards()),
  addCard: (input) => dispatch(addCard(input))

})

export default connect(mapStateToProps, mapDispatchToProps)(Board);
