package com.abc.springcore2.dao;

import java.util.List;

import com.abc.springcore2.model.Product;

public interface ProductDao {

	void save(Product product);
	Product findById(int productId);
	List<Product> findAll();	
}
