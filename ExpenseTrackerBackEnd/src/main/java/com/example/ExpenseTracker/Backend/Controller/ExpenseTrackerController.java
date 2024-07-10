package com.example.ExpenseTracker.Backend.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExpenseTrackerController {

    //CREATE
    //**CURRENTLY UNUSED**//

    //READ
    //Verify user details
    @GetMapping("/verify")
    public boolean verifyUser (@RequestBody String[] userCredentials) {
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
