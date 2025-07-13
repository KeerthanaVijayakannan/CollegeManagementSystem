package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.profileModel;
import com.example.demo.repo.profileRepo;

import java.util.Optional;

@Service
public class profileService {

    @Autowired
    private profileRepo rep;

    public profileModel postData(profileModel data) {
        return rep.save(data);
    }

    public Optional<profileModel> login(String email, String password) {
        return rep.findByEmailAndPassword(email, password);
    }

    public Optional<profileModel> getUserByEmail(String email) {
        return rep.findByEmail(email);
    }
}
