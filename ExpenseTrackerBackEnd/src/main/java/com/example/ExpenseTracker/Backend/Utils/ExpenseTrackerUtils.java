package com.example.ExpenseTracker.Backend.Utils;

import com.example.ExpenseTracker.Backend.Types.Login;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class ExpenseTrackerUtils {

    public static Login handleSwapElements (Login elements) {
        String temp = elements.getEmail();
        elements.setEmail(elements.getPassword());
        elements.setPassword(temp);
        return elements;
    }

    public static String handleHashPassword (String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(13);
        return encoder.encode(password);
    }
}
