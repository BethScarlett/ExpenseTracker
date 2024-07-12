package com.example.ExpenseTracker.Backend.Model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String transaction_name;
    private double transaction_amount;
    private String date;
    private String time;
    private String category;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Transaction() {

    }

    public Transaction(long id, String transaction_name, Float transaction_amount, String date, String category) {
        this.id = id;
        this.transaction_name = transaction_name;
        this.transaction_amount = transaction_amount;
        this.date = date;
        this.category = category;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTransaction_name() {
        return transaction_name;
    }

    public void setTransaction_name(String transaction_name) {
        this.transaction_name = transaction_name;
    }

    public double getTransaction_amount() {
        return transaction_amount;
    }

    public void setTransaction_amount(double transaction_amount) {
        this.transaction_amount = transaction_amount;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
