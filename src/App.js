import CharacterList from "./CharacterList/CharacterList";
import "./App.css";

function App() {
  return (
    <div className="App" data-testid="app">
      <header className="App-header">
        <CharacterList />
      </header>
    </div>
  );
}

export default App;
