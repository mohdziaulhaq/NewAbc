package com.cg.tests;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;

import java.util.ArrayList;
import java.util.List;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;
import com.cg.entity.Client;
import com.cg.entity.Complaint;
import com.cg.entity.Product;
import com.cg.repository.ComplaintRepositoryInterface;
import com.cg.repository.ProductRepositoryInterface;
import com.cg.service.ComplaintService;

@ExtendWith(MockitoExtension.class)
public class ComplaintControllerTest {
	
	@Mock
	ComplaintRepositoryInterface cr;
	
	@Mock
	ProductRepositoryInterface pd;

	@InjectMocks
	ComplaintService cs;
	
	@Test
	public void getAllClientsComplaintsTest() throws Exception {
		//Complaint Object 1
		Complaint c=new Complaint();
		c.setComplaintName("Ac-prob");
		c.setStatus("Open");
		Client cl=new Client();
		cl.setClientId("1");
		c.setClient(cl);
		Product p=new Product();
		p.setModelNumber("1238");
		c.setProduct(p);
		//Complaint Object 2
		Complaint c1=new Complaint();
		c1.setComplaintName("Ac1-prob");
		c1.setStatus("Open");
		Client c2=new Client();
		c2.setClientId("2");
		c1.setClient(c2);
		Product p1=new Product();
		p1.setModelNumber("1237");
		c1.setProduct(p1);
		List<Complaint> clist=new ArrayList<Complaint>();
		clist.add(c);
		clist.add(c1);
		when(cr.findAll()).thenReturn(clist);
		assertEquals(1, cs.getClientAllComplaintsService(cl).size());
	}
	
	@Test
	public void getAllClientsOpenComplaintTest() throws Exception{
		//Complaint Object 1
				Complaint c=new Complaint();
				c.setComplaintName("Ac-prob");
				c.setStatus("Open");
				Client cl=new Client();
				cl.setClientId("1");
				c.setClient(cl);
				Product p=new Product();
				p.setModelNumber("1238");
				c.setProduct(p);
				//Complaint Object 2
				Complaint c1=new Complaint();
				c1.setComplaintName("Ac1-prob");
				c1.setStatus("Open");
				Client c2=new Client();
				c2.setClientId("1");
				c1.setClient(c2);
				Product p1=new Product();
				p1.setModelNumber("1237");
				c1.setProduct(p1);
				List<Complaint> clist=new ArrayList<Complaint>();
				clist.add(c);
				clist.add(c1);
				when(cr.findAll()).thenReturn(clist);
				assertEquals(2, cs.getClientAllComplaintsService(cl).size());
	}
	
//	@Test
//	public void bookComplaintTest() throws Exception{
//		Complaint c=new Complaint();
//		c.setComplaintName("Ac-prob");
//		c.setStatus("Open");
//		Client cl=new Client();
//		cl.setClientId("1");
//		c.setClient(cl);
//		Product p=new Product();
//		p.setModelNumber("1234");
//		c.setProduct(p);
//		when(cr.save(c)).thenReturn(c);
//		assertTrue(cs.bookComplaintService(c));
//	}
	
	@Test
	public void changeComplaintStatusTest() throws Exception{
		Complaint c=new Complaint();
		c.setComplaintId(17);
		c.setComplaintName("Ac-prob");
		c.setStatus("Open");
		Client cl=new Client();
		cl.setClientId("1");
		c.setClient(cl);
		Product p=new Product();
		p.setModelNumber("1234");
		c.setProduct(p);
		when(cr.findById(c.getComplaintId())).thenReturn(Optional.of(c));
		cs.changeComplaintStatusService(c);
		assertEquals("Closed",c.getStatus());
	}


}