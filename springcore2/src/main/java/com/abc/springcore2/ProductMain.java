package com.abc.springcore2;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.abc.springcore2.config.AppConfig;
import com.abc.springcore2.controller.ProductController;
import com.abc.springcore2.model.Product;

public class ProductMain {

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
		
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

		ProductController pController = context.getBean(ProductController.class);
		
		pController.saveProduct(p1);
		pController.saveProduct(p2);
		pController.saveProduct(p3);
		
		pController.fetchAllProducts();

		context.close();
		
	}

}
