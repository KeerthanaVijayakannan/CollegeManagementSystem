package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.studentModel;
import com.example.demo.repo.studentRepo;

import java.util.Optional;

@Service
public class loginService {

    @Autowired
    private studentRepo rep;

    public studentModel postData(studentModel data) {
        return rep.save(data);
    }

	public Optional<studentModel> login(String email, String password) {
		// TODO Auto-generated method stub
		return rep.findByEmailAndPassword(email, password);

	}

   
}