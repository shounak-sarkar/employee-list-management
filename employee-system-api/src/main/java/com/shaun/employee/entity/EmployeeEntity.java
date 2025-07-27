package com.shaun.employee.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employees")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true, nullable = false)
    private String employeeId;

    private String name;

    @Column(unique = true, nullable = false)
    private String emailId;

    @Column(unique = true, nullable = false)
    private String phoneNumber;

    private String department;
    private String designation;
    private String hireDate;
    private String employeeType;
    private String status;
}
