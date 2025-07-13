package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.staffModel;
import com.example.demo.Model.studentModel;
import com.example.demo.repo.staffRepo;


import java.util.Optional;

@Service
public class StaffService {

    @Autowired
    private staffRepo rep;

    public staffModel postData(staffModel data) {
        return rep.save(data);
    }

	public Optional<staffModel> login(String email, String password) {
		// TODO Auto-generated method stub
		return rep.findByEmailAndPassword(email, password);

	}

   
}