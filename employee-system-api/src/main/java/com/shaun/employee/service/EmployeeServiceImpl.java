package com.shaun.employee.service;

import com.shaun.employee.entity.EmployeeEntity;
import com.shaun.employee.model.Employee;
import com.shaun.employee.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeEntity = employeeRepository.save(employeeEntity);

        // Optional: return the saved employee with ID
        Employee savedEmployee = new Employee();
        BeanUtils.copyProperties(employeeEntity, savedEmployee);
        return savedEmployee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();

        return employeeEntities.stream().map(emp -> new Employee(
                emp.getId(),
                emp.getEmployeeId(),
                emp.getName(),
                emp.getEmailId(),
                emp.getDepartment(),
                emp.getDesignation(),
                emp.getPhoneNumber(),
                emp.getHireDate(),
                emp.getEmployeeType(),
                emp.getStatus()
        )).collect(Collectors.toList());
    }

    @Override
    public boolean deleteEmployee(Long id) {
        Optional<EmployeeEntity> optionalEmployee = employeeRepository.findById(id);
        if (optionalEmployee.isPresent()) {
            employeeRepository.delete(optionalEmployee.get());
            return true;
        }
        return false;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        Optional<EmployeeEntity> optionalEmployeeEntity = employeeRepository.findById(id);
        if (optionalEmployeeEntity.isPresent()) {
            EmployeeEntity employeeEntity = optionalEmployeeEntity.get();

            // Update fields manually (excluding ID)
            employeeEntity.setEmployeeId(employee.getEmployeeId());
            employeeEntity.setName(employee.getName());
            employeeEntity.setEmailId(employee.getEmailId());
            employeeEntity.setPhoneNumber(employee.getPhoneNumber());
            employeeEntity.setDepartment(employee.getDepartment());
            employeeEntity.setDesignation(employee.getDesignation());
            employeeEntity.setHireDate(employee.getHireDate());
            employeeEntity.setEmployeeType(employee.getEmployeeType());
            employeeEntity.setStatus(employee.getStatus());

            employeeEntity = employeeRepository.save(employeeEntity);

            Employee updatedEmployee = new Employee();
            BeanUtils.copyProperties(employeeEntity, updatedEmployee);
            return updatedEmployee;
        }
        return null;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        Optional<EmployeeEntity> optionalEmployeeEntity = employeeRepository.findById(id);
        if (optionalEmployeeEntity.isPresent()) {
            EmployeeEntity employeeEntity = optionalEmployeeEntity.get();
            Employee employee = new Employee();
            BeanUtils.copyProperties(employeeEntity, employee);
            return employee;
        }
        return null;
    }
}
