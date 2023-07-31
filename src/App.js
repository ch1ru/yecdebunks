import logo from './logo.svg';
import './App.css';
import PageTransition from './components/PageTransition';
import { Home } from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HebrewStudy from './pages/HebrewStudy';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/articles' exact element={<Articles />} />
          <Route path='/articles/:id' exact element={<Article />} />
          <Route path='/hebrewstudy' exact element={<HebrewStudy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
