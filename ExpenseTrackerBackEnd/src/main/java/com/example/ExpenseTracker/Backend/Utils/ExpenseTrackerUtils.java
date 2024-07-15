package com.example.ExpenseTracker.Backend.Utils;

import com.example.ExpenseTracker.Backend.Types.Login;

public class ExpenseTrackerUtils {

    public static Login handleSwapElements (Login elements) {
        String temp = elements.getEmail();
        elements.setEmail(elements.getPassword());
        elements.setPassword(temp);
        return elements;
    }
}
