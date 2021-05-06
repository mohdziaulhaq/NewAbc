package com.cg.service;

import com.cg.entity.Admin;
import com.cg.entity.Client;
import com.cg.entity.Engineer;
import com.cg.exception.InvalidCredentialsException;

public interface LoginServiceInterface {
	Admin loginAdmin(int adminId,String password);
	Engineer loginEngineer(int employeeId,String password);
	Client loginClient(String clientId,String password) ;
//	Admin logoutAdmin(Admin a) ;
//	Engineer logoutEngineer(Engineer e);
//	Client logoutClient(Client c);
}
