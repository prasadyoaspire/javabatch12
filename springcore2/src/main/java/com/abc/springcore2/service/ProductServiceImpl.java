package com.abc.springcore2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.abc.springcore2.dao.ProductDao;
import com.abc.springcore2.model.Product;

@Service
public class ProductServiceImpl implements ProductService  {
	
	@Autowired
	private ProductDao productDao;
	
	public void setProductDao(ProductDao productDao) {
		this.productDao = productDao;
	}
	
	@Transactional
	@Override
	public void addProduct(Product product) {		
		productDao.save(product);		
	}

	@Override
	public Product getProductById(int productId) {
		Product product = productDao.findById(productId);
		return product;
	}

	@Override
	public List<Product> getAllProducts() {
		List<Product> products = productDao.findAll();
		return products;
	}



}
