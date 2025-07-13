package com.example.demo.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.profileModel;

public interface profileRepo extends JpaRepository<profileModel, Integer> {
	Optional<profileModel> findByEmailAndPassword(String email, String password);

	Optional<profileModel> findByEmail(String email);
}
