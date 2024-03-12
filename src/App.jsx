import "./App.css";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <main className="app__page-wrapper">
      <HomePage />

      <footer className="app__footer">
        <div className="app__footer-pill">
          <span className="app__footer-text">made with 💜 in welly.</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
