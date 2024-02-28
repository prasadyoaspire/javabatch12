package com.abc.ecomapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abc.ecomapp.entity.Product;
import com.abc.ecomapp.service.ProductService;

@RestController
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@PostMapping("/save")
	public Product addProduct(@RequestBody Product product) {
		
		product = productService.saveProduct(product);
		
		return product;
	}
	
	@GetMapping("/all")
	public List<Product> getAllProducts() {
		List<Product> products = productService.findAllProducts();
		return products;
	}
	
	
	@GetMapping("/details/{id}")
	public Product getProductDetails(@PathVariable("id") int productId) {
		Product product = productService.findProductById(productId);
		return product;
	}

}
