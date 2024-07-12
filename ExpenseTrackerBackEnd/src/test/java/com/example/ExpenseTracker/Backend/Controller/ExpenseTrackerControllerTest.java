package com.example.ExpenseTracker.Backend.Controller;

import com.example.ExpenseTracker.Backend.Model.Transaction;
import com.example.ExpenseTracker.Backend.Service.ExpenseTrackerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ExpenseTrackerControllerTest {

    @Test
    @DisplayName("Returns list of transactions when details match")
    void verifyUser() {
        ExpenseTrackerController expenseTrackerController = new ExpenseTrackerController();

        String[] testCase = new String[]{"test@test.com", "test"};

        List<Transaction> transactions = expenseTrackerController.verifyUser(testCase);

        assertEquals(2, transactions.size());
    }

//    @Test
//    void getUserTransactions() {
//
//    }
}