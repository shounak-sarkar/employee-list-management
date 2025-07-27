import axios from 'axios';
const EMPLOYEE_API_BASE_URL = "http://localhost:8090/api/vi/employees";
class EmployeeService {
    
    // Method to save employee data
    saveEmployee(employee) {
        // Here you would typically make an API call to save the employee data
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
    }

    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteEmployee(id) {
        // Here you would typically make an API call to delete the employee by ID
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + id); //path variable passing with / 
    }
    getEmployeeById(id) {
        // Here you would typically make an API call to get the employee by ID
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + id); //path variable passing with / 
    }
    updateEmployee(id, employee) {
        // Here you would typically make an API call to update the employee by ID
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + id, employee); //path variable passing with / 
    }
}

export default new EmployeeService();
// This service can be imported and used in components to handle employee-related operations
// For example, in AddEmployee component, you can call saveEmployee method to save the employee