import {Container} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from "./Board";
import AddCard from "./AddCard";

function App() {
  return (
    <Container>
        <AddCard />
        <Board />
    </Container>
  );
}

export default App;
