import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Create from "./components/Create";
import Note from "./components/Note";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  return (
    <>
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/create" element={<Create />} />
                <Route exact path="/note/" element={<Note />} />
                <Route exact path="/note/:noteURL" element={<Note />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
        <Footer />
    </>
  );
}

export default App;
