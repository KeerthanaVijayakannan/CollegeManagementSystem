package com.example.demo.Controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.studentModel;
import com.example.demo.service.loginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class studentController {

    @Autowired
    private loginService ss;

    @PostMapping("/student/register")
    public studentModel post(@RequestBody studentModel data) {
        return ss.postData(data);
    }

    @PostMapping("/student/login")
    public Optional<studentModel> login(@RequestBody Map<String, String> loginRequest) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");
        return ss.login(email, password);
    }
}
