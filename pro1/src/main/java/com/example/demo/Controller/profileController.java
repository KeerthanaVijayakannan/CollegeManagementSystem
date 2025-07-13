package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.profileModel;
import com.example.demo.service.profileService;

import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class profileController {

    @Autowired
    private profileService ps;

    @PostMapping("/profile/register")
    public profileModel post(@RequestBody profileModel data) {
        return ps.postData(data);
    }

    @PostMapping("/profile/login")
    public Optional<profileModel> login(@RequestBody Map<String, String> loginRequest) {
        String username = loginRequest.get("username");
        String password = loginRequest.get("password");
        return ps.login(username, password);
    }

    @GetMapping("/profile")
    public ResponseEntity<profileModel> getProfile(@RequestParam String email) {
        Optional<profileModel> user = ps.getUserByEmail(email);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}
