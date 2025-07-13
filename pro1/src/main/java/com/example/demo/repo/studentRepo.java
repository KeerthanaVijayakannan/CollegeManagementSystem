package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.studentModel;

import java.util.Optional;
@Repository
public interface studentRepo extends JpaRepository<studentModel, Integer> {

	Optional<studentModel> findByEmailAndPassword(String email, String password);
	
}