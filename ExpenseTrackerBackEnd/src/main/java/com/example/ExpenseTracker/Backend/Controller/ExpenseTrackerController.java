package com.example.ExpenseTracker.Backend.Controller;

import com.example.ExpenseTracker.Backend.Model.Transaction;
import com.example.ExpenseTracker.Backend.Service.ExpenseTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ExpenseTrackerController {

    List<Transaction> transactions;

    @Autowired
    ExpenseTrackerService expenseTrackerService;

    //CREATE
    //**CURRENTLY UNUSED**//

    //READ
    //Verify user details
    @GetMapping("/verify")
    public List<Transaction> verifyUser (@RequestBody String[] userCredentials) {
        Long userID = expenseTrackerService.verifyUser(userCredentials);
        if (!(userID == null)) {
            return expenseTrackerService.getUserTransactions(userID);
        } else {
            return null;
        }
    }

    //Get transactional details
    @GetMapping("/transactions")
    public void getUserTransactions () {

    }

    //UPDATE
    //**CURRENTLY UNUSED**//

    //DELETE
    //**CURRENTLY UNUSED**//

}
