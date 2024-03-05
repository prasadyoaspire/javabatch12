package com.abc.ecomapp.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;


import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.abc.ecomapp.entity.Product;
import com.abc.ecomapp.exception.ProductNotFoundException;
import com.abc.ecomapp.repository.ProductRepository;

@SpringBootTest
public class ProductServiceTest {
	
	
	@Mock
	private ProductRepository productRepository;	
	
	@InjectMocks
	private ProductServiceImpl productService ;
	
	@Test
	void testFindProductById() {
		
		Product product = new Product();
		product.setProductId(1234);
		product.setProductName("aaaa");
		product.setProductPrice(100);
		product.setCategory("nw");
		
		when(productRepository.findById(1234)).thenReturn(Optional.of(product));
		
		Product myProduct = productService.findProductById(1234);
		
		assertEquals("aaaa",myProduct.getProductName());		
	}
	
	@Test
	void testFindProductByIdWithException() {
		
		when(productRepository.findById(563)).thenThrow(ProductNotFoundException.class);
		
		assertThrows(ProductNotFoundException.class,()-> productService.findProductById(563));
		
	}
	
	@Test
	void testSaveProduct() {
		
		Product product = new Product();
		product.setProductId(1234);
		product.setProductName("aaaa");
		product.setProductPrice(100);
		product.setCategory("nw");
		
		when(productRepository.save(product)).thenReturn(product);
		
		Product newProduct = productService.saveProduct(product);
		
		assertEquals(product.getProductId(), newProduct.getProductId());
		assertEquals(product.getProductName(), newProduct.getProductName());
		assertEquals(product.getProductPrice(), newProduct.getProductPrice());
		
	}

}
