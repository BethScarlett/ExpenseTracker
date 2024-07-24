package com.example.ExpenseTracker.Backend.Service;

import com.example.ExpenseTracker.Backend.Model.Transaction;
import com.example.ExpenseTracker.Backend.Model.User;
import com.example.ExpenseTracker.Backend.Repository.ExpenseTrackerTransactionRepository;
import com.example.ExpenseTracker.Backend.Repository.ExpenseTrackerUserRepository;
import com.example.ExpenseTracker.Backend.Types.Login;
import com.example.ExpenseTracker.Backend.Utils.ExpenseTrackerUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseTrackerService {

    @Autowired
    ExpenseTrackerUserRepository expenseTrackerUserRepository;

    @Autowired
    ExpenseTrackerTransactionRepository expenseTrackerTransactionRepository;

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(13);

    //CREATE
    public void addUser (User newCredentials) {
        newCredentials.setPassword(ExpenseTrackerUtils.handleHashPassword(newCredentials.getPassword()));
        expenseTrackerUserRepository.save(newCredentials);
    }

    //READ
    //Verify user details
    public Long verifyUser (Login userCredentials) {
        if (!userCredentials.getEmail().contains("@")) {
            ExpenseTrackerUtils.handleSwapElements(userCredentials);
        }
        User retrievedUser = expenseTrackerUserRepository.findUserByEmail(userCredentials.getEmail());
        if(encoder.matches(userCredentials.getPassword(), retrievedUser.getPassword())) {
            return retrievedUser.getId();
        } else {
            return null;
        }

    }

    //Get transactional details
    public List<Transaction> getUserTransactions (Long userID) {
        return expenseTrackerTransactionRepository.getTransactionsByUserID(userID);
    }

    //UPDATE
    //**CURRENTLY UNUSED**//

    //DELETE
    //**CURRENTLY UNUSED**//
}
