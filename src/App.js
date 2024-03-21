import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Form from './Form';
import Table from './Table';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/Table" element={<Table />} />
        </Routes>
      </Router>
    </>
  )

}

export default App;
