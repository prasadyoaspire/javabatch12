package com.abc.springcore.bean;

public class Employee {
	
	private int empno;
	private String name;
	private double salary;
	
	public void setEmpno(int empno) {
		this.empno = empno;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	
	public void displayEmployee() {		
		System.out.println("Empno: "+empno);
		System.out.println("Name: "+name);
		System.out.println("Salary: "+salary);
	}
}
