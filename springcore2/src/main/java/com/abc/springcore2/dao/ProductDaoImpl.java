package com.abc.springcore2.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.abc.springcore2.model.Product;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Repository
public class ProductDaoImpl implements ProductDao {
	
	@PersistenceContext
	private EntityManager entityManger;

	@Override
	public void save(Product product) {	
		
		entityManger.persist(product);
	}

	@Override
	public Product findById(int productId) {	
		Product product = entityManger.find(Product.class, productId);
		return product;
	}

	@Override
	public List<Product> findAll() {		
		TypedQuery<Product> query = entityManger.createQuery("select p from Product p", Product.class);
		List<Product> products = query.getResultList();
		return products;
	}
}
