import './App.css';
import Dictionary from "./Dictionary";
import Footer from "./Footer.js";
import Header from "./Header.js";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <Header />
      </header>
      <Dictionary />
      </div>
      <footer className="text-center">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
