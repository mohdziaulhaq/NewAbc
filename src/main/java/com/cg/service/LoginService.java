package com.cg.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.entity.Admin;
import com.cg.entity.Client;
import com.cg.entity.Engineer;
import com.cg.exception.InvalidCredentialsException;
import com.cg.repository.AdminRepositoryInterface;
import com.cg.repository.ClientRepositoryInterface;
import com.cg.repository.EngineerRepositoryInterface;
import com.cg.exception.InvalidCredentialsException;

@Service
public class LoginService implements LoginServiceInterface {

	static boolean isAdminsignedIn;
	static boolean isEngineersignedIn;
	static boolean isClientsignedIn;
	@Autowired
	public AdminRepositoryInterface ar;
	
	@Autowired
	public ClientRepositoryInterface cr;
	
	@Autowired
	public EngineerRepositoryInterface er;
	
	
	@Override
	public Admin loginAdmin(int adminId, String password) {
		Optional<Admin> aa = ar.findById(adminId);
		if(!(aa.isEmpty()) && (aa.get().getPassword().equals(password))) {
			isAdminsignedIn=true;
			System.out.println("Welcome Admin "+aa.get().getAdminId()+"! Sign In Successful");
			return aa.get();	
		}
		return null;
	}
	@Override
	public Engineer loginEngineer(int employeeId, String password) {
		Optional<Engineer> ee = er.findById(employeeId);
		if(!(ee.isEmpty()) && (ee.get().getPassword().equals(password))) {
		
		isEngineersignedIn=true;
		System.out.println("Welcome Engineer "+ee.get().getEmployeeId()+"! Sign In Successful");
		return ee.get();
		}
		return null;
	
	}

	@Override
	public Client loginClient(String clientId, String password){
		Optional<Client> cc = cr.findById(clientId);
		if(!(cc.isEmpty()) && (cc.get().getPassword().equals(password))) {
			isClientsignedIn=true;
			System.out.println("Welcome Client "+cc.get().getClientId()+"! Sign In Successful");
			return cc.get();
		}
		return null;

		
	}
	
	
}
