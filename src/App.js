import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CoursePage from './components/CoursePage';
import ReactPage from './components/Reactpage';
import JavaPage from './components/Java';
import Datas from './components/Datas';
import PythonPage from './components/Python';
import Html from './components/Html';
import Cprog from './components/Cprog';
import Css from './components/Css';
import Angular from './components/Angular';

function App() {
  return (
    <Router basename="">
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/reactpage" element={<ReactPage />} />
          <Route path="/javapage" element={<JavaPage />} />
          <Route path="/pythonpage" element={<PythonPage />} />
          <Route path="/dataspage" element={<Datas />} />
          <Route path="/htmlpage" element={<Html />} />
          <Route path="/cprogpage" element={<Cprog />} />
          <Route path="/csspage" element={<Css />} />
          <Route path="/angularpage" element={<Angular />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
