package com.cg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cg.entity.Client;

@Repository
public interface ClientRepositoryInterface extends JpaRepository<Client, String> {
	
	@Query("SELECT c FROM Client c where c.clientId=:id and c.password=:password")
	public Client loginClient(String id,String password);
}
