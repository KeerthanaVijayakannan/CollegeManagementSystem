package com.example.demo.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.TimeSchedule;
import com.example.demo.service.TimeScheduleService;

@RestController
@RequestMapping("/api/schedule")
@CrossOrigin(origins = "http://localhost:3000") // Adjust the origin based on your React setup
public class TimeScheduleController {

    @Autowired
    private TimeScheduleService service;

    @GetMapping("/{id}")
    public ResponseEntity<TimeSchedule> getSchedule(@PathVariable Long id) {
        return service.getSchedule(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<TimeSchedule> saveSchedule(@RequestBody TimeSchedule schedule) {
        TimeSchedule savedSchedule = service.saveSchedule(schedule);
        return ResponseEntity.ok(savedSchedule);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSchedule(@PathVariable Long id) {
        service.deleteSchedule(id);
        return ResponseEntity.noContent().build();
    }
}
