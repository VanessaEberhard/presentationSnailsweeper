import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";
import { useRecoilValue } from "recoil";

import Routes from "routes/App";
import { pageTitle } from "states/app";

function App() {
  const title = useRecoilValue(pageTitle);

  return (
    <>
      <Helmet>
        <title>{`${title} | Presentation Dylan & Vanessa`}</title>
      </Helmet>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
