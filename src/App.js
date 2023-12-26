import { Provider } from "react-redux";
import { Routes } from "./routes";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
        <div>
          <Routes />
        </div>
      </Provider>
  );
}

export default App;
