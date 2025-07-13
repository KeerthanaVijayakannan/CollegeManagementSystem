package com.example.demo.Model;
import java.io.Serializable;
import java.util.Map;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MapKeyColumn;
import jakarta.persistence.Table;
import jakarta.persistence.*;
@Entity
@Table(name = "time_schedules")
public class TimeSchedule implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    @CollectionTable(name = "monday_schedule", joinColumns = @JoinColumn(name = "time_schedule_id"))
    @MapKeyColumn(name = "hour")
    @Column(name = "subject")
    private Map<Integer, String> monday;

    @ElementCollection
    @CollectionTable(name = "tuesday_schedule", joinColumns = @JoinColumn(name = "time_schedule_id"))
    @MapKeyColumn(name = "hour")
    @Column(name = "subject")
    private Map<Integer, String> tuesday;

    @ElementCollection
    @CollectionTable(name = "wednesday_schedule", joinColumns = @JoinColumn(name = "time_schedule_id"))
    @MapKeyColumn(name = "hour")
    @Column(name = "subject")
    private Map<Integer, String> wednesday;

    @ElementCollection
    @CollectionTable(name = "thursday_schedule", joinColumns = @JoinColumn(name = "time_schedule_id"))
    @MapKeyColumn(name = "hour")
    @Column(name = "subject")
    private Map<Integer, String> thursday;

    @ElementCollection
    @CollectionTable(name = "friday_schedule", joinColumns = @JoinColumn(name = "time_schedule_id"))
    @MapKeyColumn(name = "hour")
    @Column(name = "subject")
    private Map<Integer, String> friday;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Map<Integer, String> getMonday() {
        return monday;
    }

    public void setMonday(Map<Integer, String> monday) {
        this.monday = monday;
    }

    public Map<Integer, String> getTuesday() {
        return tuesday;
    }

    public void setTuesday(Map<Integer, String> tuesday) {
        this.tuesday = tuesday;
    }

    public Map<Integer, String> getWednesday() {
        return wednesday;
    }

    public void setWednesday(Map<Integer, String> wednesday) {
        this.wednesday = wednesday;
    }

    public Map<Integer, String> getThursday() {
        return thursday;
    }

    public void setThursday(Map<Integer, String> thursday) {
        this.thursday = thursday;
    }

    public Map<Integer, String> getFriday() {
        return friday;
    }

    public void setFriday(Map<Integer, String> friday) {
        this.friday = friday;
    }
}
