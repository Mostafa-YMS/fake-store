import "./App.scss";
import CardList from "./Components/CardList";

function App() {
  return (
    <div className="main-container">
      <div style={{ width: "100%" }}>
        <div className="main-grid">
          <div className="best-sales"></div>
          <div className="products-container">
            <CardList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
