package com.example.ExpenseTracker.Backend.Controller;

import com.example.ExpenseTracker.Backend.Service.ExpenseTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExpenseTrackerController {

    @Autowired
    ExpenseTrackerService expenseTrackerService;

    //CREATE
    //**CURRENTLY UNUSED**//

    //READ
    //Verify user details
    @GetMapping("/verify")
    public boolean verifyUser (@RequestBody String[] userCredentials) {
        expenseTrackerService.verifyUser(userCredentials);
        return false;
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
