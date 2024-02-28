package com.abc.ecomapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abc.ecomapp.entity.Product;
import com.abc.ecomapp.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService  {
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public Product saveProduct(Product product) {		
		product = productRepository.save(product);
		return product;
	}

	@Override
	public Product findProductById(int productId) {
		Optional<Product> optionalProduct = productRepository.findById(productId);
		
		if(optionalProduct.isEmpty()) {
			// will throw some exception
		}
		
		Product product = optionalProduct.get();
		
		return product;
	}

	@Override
	public List<Product> findAllProducts() {
		List<Product> products = productRepository.findAll();
		return products;
	}

}
