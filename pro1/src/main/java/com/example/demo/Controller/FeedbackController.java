package com.example.demo.Controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.Feedback;
import com.example.demo.service.FeedbackService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/feedbacks")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @GetMapping
    public List<Feedback> getAllFeedbacks() {
        return feedbackService.getAllFeedbacks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable int id) {
        Optional<Feedback> feedback = feedbackService.getFeedbackById(id);
        return feedback.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<String> createFeedback( @RequestBody Feedback feedback) {
        try {
            feedbackService.saveFeedback(feedback);
            return ResponseEntity.status(HttpStatus.CREATED).body("Feedback submitted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving feedback: " + e.getMessage());
        }
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<Feedback> updateFeedback(@PathVariable int id, @RequestBody Feedback feedbackDetails) {
        Optional<Feedback> feedbackOptional = feedbackService.getFeedbackById(id);
        if (feedbackOptional.isPresent()) {
            Feedback feedbackToUpdate = feedbackOptional.get();
            feedbackToUpdate.setName(feedbackDetails.getName());
            feedbackToUpdate.setEmail(feedbackDetails.getEmail());
            feedbackToUpdate.setRating(feedbackDetails.getRating());
            feedbackToUpdate.setComments(feedbackDetails.getComments());

            Feedback updatedFeedback = feedbackService.saveFeedback(feedbackToUpdate);
            return ResponseEntity.ok(updatedFeedback);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable int id) {
        if (feedbackService.getFeedbackById(id).isPresent()) {
            feedbackService.deleteFeedback(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
