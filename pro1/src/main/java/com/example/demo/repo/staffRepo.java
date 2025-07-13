package com.example.demo.repo;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.staffModel;
import com.example.demo.Model.studentModel;
@Repository
public interface staffRepo extends JpaRepository<staffModel, Integer> {

	Optional<staffModel> findByEmailAndPassword(String email, String password);
	
}