import React from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import UpdateEmployee from './components/UpdateEmployee';
import Footer from './components/Footer';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import { BrowserRouter, Routes , Route } from 'react-router-dom';



function App() {
  return (
    // <> stands for fragments
    <>
    <BrowserRouter>
    <Header />
    <Navbar username="Shaun" />
    <Routes>
      <Route index element={<EmployeeList />} />
      <Route path="/" element={<EmployeeList />} /> 
      <Route path="/employeeList" element={<EmployeeList />} />
      <Route path="/addEmployee" element={<AddEmployee />} />
      <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App