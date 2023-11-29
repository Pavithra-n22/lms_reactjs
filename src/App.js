import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CoursePage from './components/CoursePage';
import ReactPage from './components/Reactpage';
import JavaPage from './components/Java';
import PythonPage from './components/Python';
function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/lms_reactjs' : '/';

  return (
    <Router basename={basename}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/reactpage" element={<ReactPage />} />
          <Route path="/javapage" element={<JavaPage />} />
          <Route path="/pythonpage" element={<PythonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
