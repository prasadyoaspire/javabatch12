package com.abc.ecomapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abc.ecomapp.entity.Product;
import com.abc.ecomapp.exception.ProductNotFoundException;
import com.abc.ecomapp.service.ProductService;

@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private ProductService productService;

	@PostMapping("/save")
	public ResponseEntity<Product> addProduct(@RequestBody Product product) {

		product = productService.saveProduct(product);

		ResponseEntity<Product> responseEntity = new ResponseEntity<>(product, HttpStatus.CREATED);

		return responseEntity;
	}

	@GetMapping("/all")
	public List<Product> getAllProducts() {
		List<Product> products = productService.findAllProducts();
		return products;
	}

	@GetMapping("/details/{id}")
	public ResponseEntity<Product> getProductDetails(@PathVariable("id") int productId) {

		ResponseEntity<Product> responseEntity = null;
		Product product = productService.findProductById(productId);
		responseEntity = new ResponseEntity<>(product, HttpStatus.OK);
		return responseEntity;
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> removeProduct(@PathVariable("id") int productId) {
		productService.deleteProduct(productId);
		return new ResponseEntity<>("Product Deleted.", HttpStatus.OK);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Product> modifyProduct(@RequestBody Product product) {		
		product = productService.updateProduct(product);		
		return new ResponseEntity<>(product, HttpStatus.OK);
		
	}

}
