import './App.css';
import WebHome from './components/website/pages/Home'
import {Routes,Route} from 'react-router-dom'
function App() {
  return(
    <>
      <Routes>
          <Route path="/"  exact element={<WebHome />}/>
      </Routes>
     </>
    
  );
}

export default App;
