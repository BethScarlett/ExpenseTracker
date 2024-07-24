package com.example.ExpenseTracker.Backend.Repository;

import com.example.ExpenseTracker.Backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseTrackerUserRepository extends JpaRepository<User, Long> {

    User findUserByEmail(String email);
}
