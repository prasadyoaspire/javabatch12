package com.abc.ecomapp.service;

import java.util.List;

import com.abc.ecomapp.entity.Product;

public interface ProductService {
	
	public Product saveProduct(Product product);
	
	public Product findProductById(int productId);
	
	public List<Product> findAllProducts();
	
	public void deleteProduct(int productId);
	
	public Product updateProduct(Product product);
	
	public List<Product> filterProductsByCategory(String category); 
	
	public List<Product> filterProductsBetweenPriceRange(double maxPrice, double minPrice); 

}
