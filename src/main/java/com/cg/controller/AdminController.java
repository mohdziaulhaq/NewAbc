package com.cg.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.entity.Admin;
import com.cg.entity.Client;
import com.cg.entity.Complaint;
import com.cg.entity.Complaints;
import com.cg.entity.Engineer;
import com.cg.entity.Product;
import com.cg.exception.InvalidComplaintIdException;
import com.cg.exception.InvalidCredentialsException;
import com.cg.exception.InvalidDomainException;
import com.cg.exception.InvalidEngineerIdException;
import com.cg.service.EngineerServiceInterface;
import com.cg.service.AdminServiceInterface;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("Admin")
public class AdminController {
	@Autowired
	public AdminServiceInterface as;
	
	@Autowired
	public EngineerServiceInterface is;

	
	@GetMapping("/viewAdmin/{id}")
	public Admin viewAdmin(@PathVariable("id") int id) {
		Admin a = new Admin();
		a.setAdminId(id);
		Admin aa = as.viewAdmin(a);
		return aa;
	}
	
	@PostMapping("/createAdmin")
	public String createAdmin(@RequestBody Admin a) {
		return as.createAdmin(a);
	}
	
	@PostMapping("/addEngineer")
	public boolean addEngineer(@RequestBody Engineer e) {
		boolean b =  as.addEngineer(e);
		return b;
	}
	
	
	@PutMapping("/changeDomain/{id}/{newDomain}")
	public void changeDomain(@PathVariable("id") int engineerId,@PathVariable("newDomain") String newDomain)throws InvalidDomainException, InvalidEngineerIdException{
		as.changeDomain(engineerId, newDomain);
	}
	
	@DeleteMapping("/removeEngineer/{id}")
	public boolean removeEngineer(@PathVariable("id")int engineerId) throws InvalidEngineerIdException {
		boolean b = as.removeEngineer(engineerId);
		return b;
	}
	
	@GetMapping("/getComplaintsByProducts/{productCategoryName}")
	public List<Complaints> getComplaintsByProducts(@PathVariable("productCategoryName") String productCategoryName){
		List<Complaint> list =  as.getComplaintsByProducts(productCategoryName);
		List<Complaints>cp1=new ArrayList<Complaints>();
		  for(Complaint b: list) {
			  cp1.add(new Complaints(b.getComplaintId(),b.getComplaintName(),b.getStatus(),b.getEngineer().getEmployeeId(),b.getClient().getClientId(),b.getProduct().getModelNumber()));
		  }
		return cp1;
	}
	
	@GetMapping("/getComplaints/{status}/{productCategoryName}")
	public List<Complaints> getComplaints(@PathVariable("status") String status,@PathVariable("productCategoryName") String productCategoryName){
		List<Complaint> list =  as.getComplaintsByProducts(productCategoryName);
		List<Complaints>cp1=new ArrayList<Complaints>();
		  for(Complaint b: list) {
			  cp1.add(new Complaints(b.getComplaintId(),b.getComplaintName(),b.getStatus(),b.getEngineer().getEmployeeId(),b.getClient().getClientId(),b.getProduct().getModelNumber()));
		  }
		return cp1;
	}
	
	@PutMapping("/replaceEngineerFromComplaint/{id}")
	public Complaints replaceEngineerFromComplaint(@PathVariable("id") int complaintId)throws InvalidDomainException, InvalidComplaintIdException{
		Complaint b = as.replaceEngineerFromComplaint(complaintId);
		Complaints cp1= new Complaints(b.getComplaintId(),b.getComplaintName(),b.getStatus(),b.getEngineer().getEmployeeId(),b.getClient().getClientId(),b.getProduct().getModelNumber());
		return cp1;
	}
	
	@GetMapping("getAllComplaints")
	public List<Complaints> getAllComplaints() {
		List<Complaint> list= as.getAllComplaintsService();
		List<Complaints>cp1=new ArrayList<Complaints>();
		  for(Complaint b: list) {
			  cp1.add(new Complaints(b.getComplaintId(),b.getComplaintName(),b.getStatus(),b.getEngineer().getEmployeeId(),b.getClient().getClientId(),b.getProduct().getModelNumber()));
		  }
		return cp1;
	}
	
	@GetMapping("getAllOpenComplaints")
	public List<Complaints> getAllOpenComplaints() {
		List<Complaint> list= as.getAllOpenComplaintsService();
		List<Complaints>cp1=new ArrayList<Complaints>();
		  for(Complaint b: list) {
			  cp1.add(new Complaints(b.getComplaintId(),b.getComplaintName(),b.getStatus(),b.getEngineer().getEmployeeId(),b.getClient().getClientId(),b.getProduct().getModelNumber()));
		  }
		return cp1;
	}
	
	@GetMapping("getAllProducts")
	public List<Product> getAllProducts() {
		return as.getAllProducts();
	}
	
	@GetMapping("getEngineerByDomain/{domain}")
	public List<Engineer> getEngineerByDomain(@PathVariable("domain") String domain) {
		return as.getEngineerByDomainService(domain);
	}
}
