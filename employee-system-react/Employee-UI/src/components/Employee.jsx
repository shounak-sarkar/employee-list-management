import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({ employee, deleteEmployee, idx }) => {
  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  const editButton =
    'bg-green-800 text-white px-2 py-1 rounded mr-2 cursor-pointer hover:bg-green-500 hover:scale-105 transition-all duration-100 ease-in-out active:bg-green-800 active:scale-90 gap-2';

  const deleteButton =
    'bg-red-800 text-white px-2 py-1 rounded cursor-pointer hover:bg-red-500 hover:scale-105 transition-all duration-100 ease-in-out active:bg-red-800 active:scale-90';

  return (
    <tr key={employee.id} className={idx % 2 === 0 ? 'bg-slate-500 text-white' : 'bg-gray-700 text-white'}>
    <td className="px-4 py-3 whitespace-nowrap text-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>{employee.name}</td>
    <td className="px-4 py-3 whitespace-nowrap text-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>{employee.emailId}</td>
    <td className="px-4 py-3 whitespace-nowrap text-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>{employee.phoneNumber}</td>
    <td className="px-4 py-3 whitespace-nowrap text-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>{employee.department}</td>
    <td className="px-4 py-3 whitespace-nowrap text-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>{employee.designation}</td>
    <td className="px-4 py-3 whitespace-nowrap text-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>{employee.hireDate}</td>
    <td className="px-4 py-3 whitespace-nowrap text-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>{employee.employeeType}</td>
    <td className="px-4 py-3 whitespace-nowrap text-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>{employee.status}</td>
      <td className="px-4 py-3 whitespace-nowrap text-sm">
        <button onClick={(e) => editEmployee(e, employee.id)} className={editButton}>Edit</button>
        <button onClick={(e) => deleteEmployee(e, employee.id)} className={deleteButton}>Delete</button>
      </td>
    </tr>
  );
};

export default Employee;
