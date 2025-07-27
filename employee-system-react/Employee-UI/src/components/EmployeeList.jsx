import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployee();
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  function handleAddEmployee() {
    navigate('/addEmployee');
  }

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete this employee?')) {
      EmployeeService.deleteEmployee(id).then((res) => {
        if (employees) {
          setEmployees((prevElements) =>
            prevElements.filter((employee) => employee.id !== id)
          );
        }
      });
    }
  };

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <>
      <div className="mb-4 mx-2">
        <button
          onClick={handleAddEmployee}
          className="my-2 bg-slate-600 cursor-pointer hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded hover:scale-110 transition-all duration-300 ease-in-out active:bg-green-800 active:scale-50"
        >
          Add Employee
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4 text-white">Current Employee List</h2>
        <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-3 bg-gray-700 text-white text-left text-sm font-semibold uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-3 bg-gray-700 text-white text-left text-sm font-semibold uppercase tracking-wider">
              Email
            </th>
            <th className="px-4 py-3 bg-gray-700 text-white text-left text-sm font-semibold uppercase tracking-wider">
              Phone Number
            </th>
            <th className="px-4 py-3 bg-gray-700 text-white text-left text-sm font-semibold uppercase tracking-wider">
              Department
            </th>
            <th className="px-4 py-3 bg-gray-700 text-white text-left text-sm font-semibold uppercase tracking-wider">
              Designation
            </th>
            <th className="px-4 py-3 bg-gray-700 text-white text-left text-sm font-semibold uppercase tracking-wider">
              Hire Date
            </th>
            <th className="px-4 py-3 bg-gray-700 text-white text-left text-sm font-semibold uppercase tracking-wider">
              Employee Type
            </th>
            <th className="px-4 py-3 bg-gray-700 text-white text-left text-sm font-semibold uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 py-3 bg-gray-700 text-white text-left text-sm font-semibold uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
          {!loading && (
            <tbody>
              {employees.map((employee, idx) => (
                <Employee
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  idx={idx}
                  key={idx}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default EmployeeList;
