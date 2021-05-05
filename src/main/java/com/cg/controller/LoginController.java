package com.cg.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("auth")
public class LoginController {
	@Autowired
	public AdminServiceInterface as;
	
	@Autowired
	public EngineerServiceInterface is;
	
	@Autowired
	ClientServiceInterface cs;
	
	@PostMapping("adminSignIn")
	public Admin adminSignIn(@RequestBody Admin a) throws InvalidCredentialsException{
		Admin aa = as.adminSignIn(a);
		return aa;
	}
	
	@PostMapping("adminSignOut")
	public Admin adminSignOut(@RequestBody Admin e) throws InvalidCredentialsException{
		Admin aa = as.adminSignOut(e);
		return aa;
	}
}
