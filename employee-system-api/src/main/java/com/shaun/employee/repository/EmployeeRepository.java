package com.shaun.employee.repository;

//this interacts with the DATABASE to save the data

import com.shaun.employee.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity,Long> {

}
