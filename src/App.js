import { BrowserRouter } from "react-router-dom";
import { Provider } from "./Context/SiteContext";
import Router from "./Route";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <Router />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App