import './App.css';
import All from './All';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Construction from './Construction';
import Marketing from './Marketing';
import Software from './Software';
import About from './About';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';
import ScrollToHashElement from './ScrollToHashElement';
import EthicsPage from './EthicsPage';
import Values from './Values';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <ScrollToHashElement />
        <Routes>
          <Route path='/' element={<All />}/>
          <Route path='/construction' element={<Construction />} />
          <Route path='/marketing' element={<Marketing />} />
          <Route path='/software' element={<Software />} />

          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/ethics' element={<EthicsPage />}/>
          <Route path='/values' element={<Values />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
