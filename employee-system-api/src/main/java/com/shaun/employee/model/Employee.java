package com.shaun.employee.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

    private long id; // primary key (may be optional in DTO)
    private String employeeId; // employee ID shown on UI
    private String name;
    private String emailId;
    private String department;
    private String designation;
    private String phoneNumber;
    private String hireDate;
    private String employeeType; // full-time, part-time, contract
    private String status; // active, inactive, terminated
}
