import './App.css';
import SearchEngine from "./SearchEngine";
import Footer from "./Footer.js";
import Header from "./Header.js";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <Header />
      </header>
      <SearchEngine />
      </div>
      <footer className="text-center">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
