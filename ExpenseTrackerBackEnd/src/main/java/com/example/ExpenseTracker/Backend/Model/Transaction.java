package com.example.ExpenseTracker.Backend.Model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String transaction_name;
    private Float transaction_amount;
    private Date timestamp;
    private String category;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Transaction() {

    }

    public Transaction(long id, String transaction_name, Float transaction_amount, Date timestamp, String category) {
        this.id = id;
        this.transaction_name = transaction_name;
        this.transaction_amount = transaction_amount;
        this.timestamp = timestamp;
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

    public Float getTransaction_amount() {
        return transaction_amount;
    }

    public void setTransaction_amount(Float transaction_amount) {
        this.transaction_amount = transaction_amount;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
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
