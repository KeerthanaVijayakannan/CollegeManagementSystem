package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}

