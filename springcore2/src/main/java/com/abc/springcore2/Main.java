package com.abc.springcore2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.abc.springcore2.controller.ProductController;
import com.abc.springcore2.model.Product;

public class Main {

	public static void main(String[] args) {
		
		Product p1 = new Product();
		p1.setProductId(10);
		p1.setProductName("IphoneX");
		p1.setProductPrice(98000);
		p1.setCategory("mobile");
		
		Product p2 = new Product();
		p2.setProductId(20);
		p2.setProductName("IphoneY");
		p2.setProductPrice(88000);
		p2.setCategory("mobile");
		
		Product p3 = new Product();
		p3.setProductId(30);
		p3.setProductName("IphoneZ");
		p3.setProductPrice(48000);
		p3.setCategory("mobile");
		
//		ProductDao pDao = new ProductDaoImpl(); //dependency 
//		
//		ProductServiceImpl pService = new ProductServiceImpl(); //dependency 
//		pService.setProductDao(pDao); //dao obj injecting
//		
//		ProductController pController = new ProductController();
//		pController.setProductService(pService); //service obj injecting
		
		ApplicationContext context = new ClassPathXmlApplicationContext("appcontext.xml");
		//ProductController pController = (ProductController) context.getBean("pController");
		
		ProductController pController = (ProductController) context.getBean(ProductController.class);
		
		//pController.saveProduct(p1);
		//pController.saveProduct(p2);
		pController.saveProduct(p3);
		
		pController.fetchAllProducts();

	}

}
