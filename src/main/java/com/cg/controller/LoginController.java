package com.cg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.entity.Admin;
import com.cg.exception.InvalidCredentialsException;
import com.cg.service.AdminServiceInterface;
import com.cg.service.ClientServiceInterface;
import com.cg.service.EngineerServiceInterface;
import com.cg.service.LoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
//@RequestMapping("auth")
public class LoginController {
	
	@Autowired
	public LoginService ls;
	
	@GetMapping("api")
	public String fronttoback() {
		return "Spring Boot App";
	}
	
	@GetMapping("/login/{id}/{password}/{choice}")
	
	//choice 1-client 2-engineer 3-admin 
	public String login(@PathVariable("id") String id, @PathVariable("password") String password,
			@PathVariable("choice") Integer choice) {
		Object obj = null;
		switch (choice) {
		case 1:
			obj = ls.loginClient(id, password);
			break;
		case 2:
			obj = ls.loginEngineer(Integer.parseInt(id), password);
			break;
		case 3:
			obj = ls.loginAdmin(Integer.parseInt(id), password);
			break;
		default:
			return "Wrong choice entered!";
		}
		if (obj != null)
			return "Login successfull";
		else
			return "Id or password is incorrect";
	}

	
	
}
