package com.example.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.TimeSchedule;
import com.example.demo.repo.TimeScheduleRepository;

import java.util.Optional;

@Service
public class TimeScheduleService {

    @Autowired
    private TimeScheduleRepository repository;

    public Optional<TimeSchedule> getSchedule(Long id) {
        return repository.findById(id);
    }

    public TimeSchedule saveSchedule(TimeSchedule schedule) {
        return repository.save(schedule);
    }

    public void deleteSchedule(Long id) {
        repository.deleteById(id);
    }
}
