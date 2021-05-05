package com.cg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.entity.Admin;
import com.cg.exception.InvalidCredentialsException;
import com.cg.service.AdminServiceInterface;
import com.cg.service.ClientServiceInterface;
import com.cg.service.EngineerServiceInterface;

@RestController
//@RequestMapping("auth")
public class LoginController {
	@Autowired
	public AdminServiceInterface as;
	
	@Autowired
	public EngineerServiceInterface is;
	
	@Autowired
	ClientServiceInterface cs;
	
	@GetMapping("api")
	public String fronttoback() {
		return "Spring Boot App";
	}
	
}
