import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home";

function App() {
  return (
  <Router>
     <Header/>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add-expense" component={AddExpense} />
    </Switch>
  </Router>
  )
}

export default App;
