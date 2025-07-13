package com.example.demo.repo;




import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.TimeSchedule;

public interface TimeScheduleRepository extends JpaRepository<TimeSchedule, Long> {
}
