// import logo from './logo.svg';
import "./App.css";

import { Switch, Route } from "react-router-dom";
import QuizPage from "./pages/quiz-page/quiz-page.component";
import LandingPage from "./pages/landing-page/landing-page.component";
import ThankyouPage from "./pages/thankyou-page/thankyou-page.component";
import Loader from "./components/loader/loader.component";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={LandingPage} />
        {/* <Route exact={true} path="/c2c/quiz/:authToken" component={QuizPage} />
        <Route exact={true} path="/couchPotato/quiz/:authToken" component={QuizPage} />
        <Route exact={true} path="/xenatus/quiz/:authToken" component={QuizPage} />
        <Route exact={true} path="//quiz/:authToken" component={QuizPage} /> */}
        <Route exact={true} path="/quiz/:authToken/" component={QuizPage} />
        <Route exact={true} path="/thankyou/#!" component={ThankyouPage} />
        {/* <Route exact={false} path="/loader" component={Loader} /> */}
      </Switch>
    </div>
  );
}

export default App;
