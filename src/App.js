import "./styles.css";
import Data from "./Data";

import { Pet } from "./components/Pet";
import { SearchParams } from "./components/SearchParams";

export default function App() {
  return (
    <div className="App">
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
}
