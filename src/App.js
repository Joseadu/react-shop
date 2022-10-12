import "./App.css";
import AppContext from "./Context/AppContext";
import Home from "./Pages/Home/Home";
import useInitialState from "./Hooks/useInitialState";

export default function App() {
  const initialState = useInitialState();
  
  return (
    <AppContext.Provider value={initialState}>
      <Home />
    </AppContext.Provider>
  );
}