package com.abc.springcore;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.abc.springcore.bean.Product;

public class ProductMain {

	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
		
		Product product = (Product) context.getBean("myproduct1");
		
		System.out.println("Id: "+product.getProductId());
		System.out.println("Name: "+product.getProductName());
		System.out.println("Price: "+product.getProductPrice());
	}

}
