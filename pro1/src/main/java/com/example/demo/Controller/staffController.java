package com.example.demo.Controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.staffModel;
import com.example.demo.service.StaffService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class staffController {

    @Autowired
    private StaffService sts;

    @PostMapping("/staff/register")
    public staffModel post(@RequestBody staffModel data) {
        return sts.postData(data);
    }

    @PostMapping("/staff/login")
    public Optional<staffModel> login(@RequestBody Map<String, String> StaffRequest) {
        String email = StaffRequest.get("email");
        String password = StaffRequest.get("password");
        return sts.login(email, password);
    }
}
