// Your App.js file
import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import CoursePage from './components/CoursePage';
import ReactPage  from './components/Reactpage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          
          <Route path="/" element={<HomePage/>} />
          <Route path="/course" element={<CoursePage/>} />
          <Route path="/reactpage" element={<ReactPage/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
