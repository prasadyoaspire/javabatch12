package com.abc.springcore2.service;

import java.util.List;

import com.abc.springcore2.model.Product;

public interface ProductService {

	void addProduct(Product product);
	
	Product getProductById(int productId);
	
	List<Product> getAllProducts();
}
