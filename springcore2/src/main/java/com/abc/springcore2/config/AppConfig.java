package com.abc.springcore2.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.abc.springcore2.MessageBean;
import com.abc.springcore2.controller.ProductController;
import com.abc.springcore2.dao.ProductDao;
import com.abc.springcore2.dao.ProductDaoImpl;
import com.abc.springcore2.service.ProductService;
import com.abc.springcore2.service.ProductServiceImpl;

@Configuration
@ComponentScan(basePackages = "com.abc.springcore2")
public class AppConfig {


}
