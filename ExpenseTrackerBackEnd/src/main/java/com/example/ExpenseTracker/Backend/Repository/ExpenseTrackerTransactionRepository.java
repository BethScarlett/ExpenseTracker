package com.example.ExpenseTracker.Backend.Repository;

import com.example.ExpenseTracker.Backend.Model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseTrackerTransactionRepository extends JpaRepository<Transaction, Long> {

    @Query(value = "SELECT * FROM transaction WHERE user_id = ?1", nativeQuery = true)
    List<Transaction> getTransactionsByUserID(long userID);
}
