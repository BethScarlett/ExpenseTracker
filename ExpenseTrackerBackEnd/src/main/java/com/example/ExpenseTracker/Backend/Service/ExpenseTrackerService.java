package com.example.ExpenseTracker.Backend.Service;

import com.example.ExpenseTracker.Backend.Repository.ExpenseTrackerUserRepository;
import com.example.ExpenseTracker.Backend.Utils.ExpenseTrackerUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Collections;
import java.util.List;

@Service
public class ExpenseTrackerService {

    @Autowired
    ExpenseTrackerUserRepository expenseTrackerUserRepository;

    //CREATE
    //**CURRENTLY UNUSED**//

    //READ
    //Verify user details
    public Integer verifyUser (String[] userCredentials) {
        if (!userCredentials[0].contains("@")) {
            ExpenseTrackerUtils.handleSwapElements(userCredentials);
        }
        return expenseTrackerUserRepository.getUserID(userCredentials[0], userCredentials[1]);
    }

    //Get transactional details
    public void getUserTransactions () {

    }

    //UPDATE
    //**CURRENTLY UNUSED**//

    //DELETE
    //**CURRENTLY UNUSED**//
}
