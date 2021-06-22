// import logo from './logo.svg';
import "./App.css";

import { Switch, Route } from "react-router-dom";
import QuizPage from "./pages/quiz-page/quiz-page.component";
import QuizPageCP from "./pages/quiz-page-cp/quiz-page-cp.component";
import QuizPageCTC from "./pages/quiz-page-ctc/quiz-page-ctc.component";
import QuizPageXenatus from "./pages/quiz-page-xenatus/quiz-page-xenatus.component";
import QuizPageCircuitron from "./pages/quiz-page-circuitron/quiz-page-circuitron.component";
import LandingPage from "./pages/landing-page/landing-page.component";
import ThankyouPage from "./pages/thankyou-page/thankyou-page.component";
import CouchpotatoSelectionPage from "./pages/couch-potato-page/couch-potato.component";
import Loader from "./components/loader/loader.component";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={LandingPage} />
        <Route
          exact={true}
          path="/couchPotato/selection/:authToken"
          component={CouchpotatoSelectionPage}
        />
        <Route
          exact={true}
          path="/c2c/quiz/:authToken"
          component={QuizPageCTC}
        />
        <Route
          exact={true}
          path="/couchPotato/quiz/:authToken"
          component={QuizPageCP}
        />
        <Route
          exact={true}
          path="/xenatus/quiz/:authToken"
          component={QuizPageXenatus}
        />
        {/* <Route exact={true} path="//quiz/:authToken" component={QuizPage} />  */}
        <Route
          exact={true}
          path="/circuitron/quiz/:authToken"
          component={QuizPageCircuitron}
        />
        {/* <Route
          exact={true}
          path="/xenatus/quiz/:authToken/"
          component={QuizPageXenatus}
        /> */}

        <Route exact={true} path="/thankyou/#!" component={ThankyouPage} />
        {/* <Route exact={false} path="/loader" component={Loader} /> */}
      </Switch>
    </div>
  );
}

export default App;
