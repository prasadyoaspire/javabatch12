package com.abc.ecomapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abc.ecomapp.entity.Product;
import com.abc.ecomapp.exception.ProductNotFoundException;
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
	public Product findProductById(int productId) throws ProductNotFoundException {
		Optional<Product> optionalProduct = productRepository.findById(productId);
				
		if(optionalProduct.isEmpty()) {
			
			throw new ProductNotFoundException("Product not found with id: "+productId);
		}
		
		Product product = optionalProduct.get();
		
		return product;
	}

	@Override
	public List<Product> findAllProducts() {
		List<Product> products = productRepository.findAll();
		return products;
	}

	@Override
	public void deleteProduct(int productId) {
		
		Optional<Product> optionalProduct = productRepository.findById(productId);
		
		if(optionalProduct.isEmpty()) {
			throw new ProductNotFoundException("Product not existing with id: "+productId);
		}
		
		Product product = optionalProduct.get();
		
		productRepository.delete(product);
		
	}

	@Override
	public Product updateProduct(Product product) {
		
		Optional<Product> optionalProduct = productRepository.findById(product.getProductId());
		
		if(optionalProduct.isEmpty()) {
			throw new ProductNotFoundException("Product not existing with id: "+product.getProductId());
		}
		
		product = productRepository.save(product);
		
		return product;
	}

	@Override
	public List<Product> filterProductsByCategory(String category) {
		
		List<Product> products = productRepository.findByCategory(category);
		return products;
	}

	@Override
	public List<Product> filterProductsBetweenPriceRange(double maxPrice, double minPrice) {
		
		return productRepository.findProductsWithinPriceRange(minPrice, maxPrice);
	}

}
