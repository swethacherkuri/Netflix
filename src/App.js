import { Provider } from "react-redux";
import Body from "./components/body";
import appstore from "./utils/appstore";


function App() {
  return (
    <div>
      <Provider store={appstore}>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
