package com.abc.springcore2;

public class MessageBean {

	private String msg;
	
	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	public void display() {
		System.out.println("Message: "+msg);
	}
}
