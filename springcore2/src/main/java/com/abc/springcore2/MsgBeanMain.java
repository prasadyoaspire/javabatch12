package com.abc.springcore2;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.abc.springcore2.config.AppConfig;

public class MsgBeanMain {

	public static void main(String[] args) {
		
		//ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("appcontext.xml");
		//MessageBean msgBean = (MessageBean) context.getBean("msgBean");
		
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
		//MessageBean msgBean = context.getBean(MessageBean.class);
		MessageBean msgBean = (MessageBean) context.getBean("mBean");
		msgBean.display();

	}

}
