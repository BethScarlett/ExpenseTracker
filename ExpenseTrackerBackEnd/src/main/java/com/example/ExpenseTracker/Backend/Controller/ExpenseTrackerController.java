package com.example.ExpenseTracker.Backend.Controller;

import com.example.ExpenseTracker.Backend.Model.Transaction;
import com.example.ExpenseTracker.Backend.Model.User;
import com.example.ExpenseTracker.Backend.Service.ExpenseTrackerService;
import com.example.ExpenseTracker.Backend.Types.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class ExpenseTrackerController {

    @Autowired
    ExpenseTrackerService expenseTrackerService;

    //CREATE
    @PutMapping("/create")
    public User createUser (@RequestBody User newCredentials) {
        if (expenseTrackerService.findUser(newCredentials.getEmail())) {
            return null;
        } else {
            expenseTrackerService.addUser(newCredentials);
            return newCredentials;
        }
    }

    //READ
    //Verify user details
    @PostMapping("/verify")
    public List<Transaction> verifyUser (@RequestBody Login userCredentials) {
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
