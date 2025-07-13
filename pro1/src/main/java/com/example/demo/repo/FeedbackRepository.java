package com.example.demo.repo;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {
}