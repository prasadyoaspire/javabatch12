package com.abc.springcore;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.abc.springcore.bean.Employee;

public class EmployeeMain {

	public static void main(String[] args) {
		
		//Employee emp1 = new Employee();
		//emp1.setEmpno(10001);
		//emp1.setName("Krish");
		//emp1.setSalary(850000);
		
		ApplicationContext context = new ClassPathXmlApplicationContext("context.xml");
		Employee emp = (Employee) context.getBean("emp1");
		
		emp.displayEmployee();
		

	}

}
