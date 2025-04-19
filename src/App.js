import './App.css';
import Home from './MainPages/Home';
import { Route,  BrowserRouter as Router, Routes} from 'react-router-dom';
import Pharma from './MainPages/SubPages/Pharma';
import Logins from './MainPages/SubPages/Logins';
import PeatCare from './MainPages/SubPages/PeatCare';
import PannCorner from './MainPages/SubPages/PannCorner';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Logins />} />
          <Route path='/pannMasal' element={<PannCorner />} />
          <Route path='/pet' element={<PeatCare />} />
          <Route path='/Baby' element={<Pharma />} />
          <Route path='/Pharma' element={<Pharma />} />
        </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
