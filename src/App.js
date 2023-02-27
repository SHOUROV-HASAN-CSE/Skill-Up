import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './component/common/Heading/Header';



function App() {
  return (
    <div>
      <Router>
      <Header/>
      </Router>
    </div>
  );
}

export default App;
