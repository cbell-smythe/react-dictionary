import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> 📖 Dictionary</header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer>Coded by Chrystal Bell-Smythe</footer>
      </div>
    </div>
  );
}
