import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from '../views/homepage/homepage.js';
import { Navbar } from '../components/navbar/navbar.js';
import { EmployeeList } from '../views/employeeList/employeeList';

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/employee-create" element={<Homepage />} />
      </Routes>
    </Router>
  );
}