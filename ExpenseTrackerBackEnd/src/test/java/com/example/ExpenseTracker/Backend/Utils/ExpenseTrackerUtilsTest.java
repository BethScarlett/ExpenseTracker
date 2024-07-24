package com.example.ExpenseTracker.Backend.Utils;

import com.example.ExpenseTracker.Backend.Types.Login;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;

class ExpenseTrackerUtilsTest {

    @Test
    @DisplayName("Correctly swaps elements")
    void handleSwapElements() {
        Login testLogin = new Login("test", "test@test.com");
        String temp = testLogin.getEmail();
        testLogin.setEmail(testLogin.getPassword());
        testLogin.setPassword(temp);
        assertEquals("test@test.com", testLogin.getEmail());
        assertEquals("test", testLogin.getPassword());
    }

    @Test
    @DisplayName("Doesn't swap elements if they are in correct positions")
    void handleSwapElementsTwo() {
        Login testLogin = new Login("test@test.com", "test");
        if (!testLogin.getEmail().contains("@")) {
            String temp = testLogin.getEmail();
            testLogin.setEmail(testLogin.getPassword());
            testLogin.setPassword(temp);
        }
        assertEquals("test@test.com", testLogin.getEmail());
        assertEquals("test", testLogin.getPassword());
    }

    @Test
    @DisplayName("Correctly hash password")
    void handleHashPassword() {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(13);
        String result = encoder.encode("password");
        System.out.println(result);
        assertTrue(encoder.matches("password", result));
    }

    @Test
    @DisplayName("New encoder returns true on previous hash")
    void handleMatchHashPassword() {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(13);
        BCryptPasswordEncoder encoderTwo = new BCryptPasswordEncoder(13);
        String result = encoder.encode("password");
        System.out.println(result);
        String resultTwo = encoderTwo.encode("password");
        System.out.println(resultTwo);
        assertTrue(encoder.matches("password", result));
        assertTrue(encoderTwo.matches("password", result));
    }
}