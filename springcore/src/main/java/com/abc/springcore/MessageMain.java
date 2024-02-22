package com.abc.springcore;
import com.abc.springcore.bean.MessageBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class MessageMain {

	public static void main(String[] args) {
		
		//MessageBean messageBean = new MessageBean();
		//messageBean.setMsg("Hello Spring!");
		
		ApplicationContext context = new ClassPathXmlApplicationContext("context.xml");
		MessageBean messageBean = (MessageBean) context.getBean("msgBean");
		
		messageBean.display();
	}
}
