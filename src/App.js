import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainOptions from "./Pages/Main Options/MainOptions";
import BuyPage from "./Pages/Buy Product/BuyPage.js";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import SellPage from "./Pages/Sell Product/SellPage";
import UserPage from "./Pages/User Page/UserPage";
import GenresPage from "./Pages/Choose Genres/GenresPage";
import Requests from "./Pages/Requests Page/Requests";
import { createStore } from "redux";
import userReducer from "./Redux Use/Reducers/UserLoginReducer";
import { Provider } from "react-redux";
import Transactions from "./Admin Pages/View Transactions/Transactions";

function App() {
  const store = createStore(
    userReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<MainOptions />}></Route>
            <Route exact path="/buyborrow" element={<BuyPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/sellrent" element={<SellPage />}></Route>
            <Route path="/profile" element={<UserPage />}></Route>
            <Route path="/genres" element={<GenresPage />}></Route>
            <Route path="/requests" element={<Requests />}></Route>
            <Route path="/admintransac" element={<Transactions />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
