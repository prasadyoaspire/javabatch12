package com.abc.springcore.bean;

public class Triangle implements Shape {
	
	private int base;
	private int height;
	
	public void setBase(int base) {
		this.base = base;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	@Override
	public double area() {
		double result = 0.5 * base* height;
		System.out.println("Triangle area ");
		return result;
	}

}
