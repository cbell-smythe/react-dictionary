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
        <footer>
          This application was built by Chrystal Bell-Smythe and is{" "}
          <a
            href="https://github.com/cbell-smythe/react-dictionary"
            target="_blank"
            rel="noreferrer"
            className="plain"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://focused-hermann-8b3782.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="plain"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
