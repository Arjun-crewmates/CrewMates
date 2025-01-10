# Service Layer Documentation

## Overview
The service layer of the Currency Converter application is responsible for the core business logic, including currency conversion. This layer is encapsulated within the `CurrencyService` class, which provides methods for performing currency conversion. To ensure the reliability and correctness of these methods, unit tests are implemented.

## CurrencyService

### CurrencyService.java
The `CurrencyService` class handles the logic for converting amounts between different currencies.

**Location:** `src/main/java/com/example/currencyconverter/service/CurrencyService.java`

**Code:**

```java
package com.example.currencyconverter.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class CurrencyService {
    private final Map<String, Double> exchangeRates;

    public CurrencyService() {
        exchangeRates = new HashMap<>();
        exchangeRates.put("USD", 74.85);
        exchangeRates.put("EUR", 88.14);
        // Add more currencies and rates
    }

    public double convert(String from, String to, double amount) {
        if (!exchangeRates.containsKey(from) || !exchangeRates.containsKey(to)) {
            throw new IllegalArgumentException("Invalid currency code");
        }
        double fromRate = exchangeRates.get(from);
        double toRate = exchangeRates.get(to);
        return (amount / fromRate) * toRate;
    }
}
