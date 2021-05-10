package com.cg.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class Engineer {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO )
	private int employeeId;
	
	@NotNull(message = "password cannot be null")
	@Size(min=2,max=10, message = "Password must be greater than or equal to 5 characters and less than 10 characters")
	@JsonIgnore
	private String password;
	
	@NotNull(message = "engineer name cannot be null")
	private String engineerName;
	
	@NotNull(message = "domain cannot be null")
	private String domain;
	
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	@JsonIgnore
	public String getPassword() {
		return password;
	}
	@JsonProperty
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEngineerName() {
		return engineerName;
	}
	public void setEngineerName(String engineerName) {
		this.engineerName = engineerName;
	}
	public String getDomain() {
		return domain;
	}
	public void setDomain(String domain) {
		this.domain = domain;
	}

}
