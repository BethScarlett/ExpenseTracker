package com.example.ExpenseTracker.Backend.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseTrackerUserRepository {

    @Query(value = "SELECT id FROM users WHERE email=?1 AND WHERE password=?2", nativeQuery = true)
    Long getUserID(String email, String password);
}
