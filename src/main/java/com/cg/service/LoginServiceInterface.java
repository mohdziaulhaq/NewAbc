package com.cg.service;

import com.cg.entity.Admin;
import com.cg.entity.Client;
import com.cg.entity.Engineer;
import com.cg.exception.InvalidCredentialsException;

public interface LoginServiceInterface {
	Admin loginAdmin(int adminId,String password) throws InvalidCredentialsException;
	Engineer loginEngineer(int employeeId,String password) throws InvalidCredentialsException;
	Client loginClient(String clientId,String password) throws InvalidCredentialsException;
	Admin logoutAdmin(Admin a) throws InvalidCredentialsException;
	Engineer logoutEngineer(Engineer e) throws InvalidCredentialsException;
	Client logoutClient(Client c) throws InvalidCredentialsException;
}
