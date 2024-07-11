package com.example.ExpenseTracker.Backend.Utils;

public class ExpenseTrackerUtils {

    public static String[] handleSwapElements (String[] elements) {
        String temp = elements[0];
        elements[0] = elements[1];
        elements[1] = temp;
        return elements;
    }
}
