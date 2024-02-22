package com.abc.springcore;
import com.abc.springcore.service.*;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.abc.springcore.bean.*;

public class Main {

	public static void main(String[] args) {
		
//		Circle circle = new Circle(); //dependency object creation
//		circle.setRadius(5);
//		
//		ShapeService shapeService = new ShapeService();
//		shapeService.setShape(circle); // injecting dependency object
		
		ApplicationContext context = new ClassPathXmlApplicationContext("appcontext.xml");
		
		ShapeService shapeService = (ShapeService) context.getBean("shapeService");
		
		double area  = shapeService.findArea();
		
		System.out.println(area);
	}

}
