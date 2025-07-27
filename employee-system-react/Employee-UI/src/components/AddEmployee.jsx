import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    employeeId: '',
    name: '',
    emailId: '',
    phoneNumber: '',
    department: '',
    designation: '',
    hireDate: '',
    employeeType: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log('Employee saved successfully:', response.data);
        navigate('/employeeList');
      })
      .catch(error => {
        console.error('There was an error saving the employee!', error);
      });
  };

  const clear = () => {
    setEmployee({
      employeeId: '',
      name: '',
      emailId: '',
      phoneNumber: '',
      department: '',
      designation: '',
      hireDate: '',
      employeeType: '',
      status: ''
    });
  };

  return (
    <div className='flex max-w-xl mx-auto my-1 p-5 bg-slate-400 rounded-lg shadow-lg'>
      <div className='px-2 py-2 w-full'>
        <h1 className='font-semibold text-2xl text-gray-800 mb-4'>Add Employee</h1>

        {[
          { label: "Employee ID", name: "employeeId", type: "text", placeholder: "eg: EMP123" },
          { label: "Name", name: "name", type: "text", placeholder: "eg: Shaun Smith" },
          { label: "Email", name: "emailId", type: "email", placeholder: "eg: shaun@example.com" },
          { label: "Phone Number", name: "phoneNumber", type: "text", placeholder: "eg: 1234567890" },
          { label: "Department", name: "department", type: "text", placeholder: "eg: IT" },
          { label: "Designation", name: "designation", type: "text", placeholder: "eg: Software Engineer" },
          { label: "Hire Date", name: "hireDate", type: "date" },
          { label: "Employee Type", name: "employeeType", type: "text", placeholder: "eg: Full-time" },
          { label: "Status", name: "status", type: "text", placeholder: "eg: Active" }
        ].map(field => (
          <div key={field.name} className='mt-4'>
            <label className='text-lg text-gray-700'>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={employee[field.name]}
              onChange={handleChange}
              className='px-4 py-2 h-10 w-full border focus:ring-gray-500 focus:border-gray-500 sm:text-sm border-gray-300 rounded-md mt-2'
              placeholder={field.placeholder}
            />
          </div>
        ))}

        <div className='mt-6 flex justify-start'>
          <button onClick={saveEmployee} className="text-white font-semibold text-lg bg-blue-700 px-4 py-2 rounded-xl cursor-pointer shadow-md hover:bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out active:bg-green-700">
            Add Employee
          </button>
          <button onClick={clear} className="ml-3 text-white font-semibold text-lg bg-red-800 px-4 py-2 rounded-xl cursor-pointer shadow-md hover:bg-gradient-to-r from-red-700 to-rose-500 hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out active:bg-green-700">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
