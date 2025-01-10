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
```
## Unit Tests
CurrencyServiceTest.java
The CurrencyServiceTest class contains unit tests for the CurrencyService. These tests verify the correctness of the currency conversion logic and the handling of various edge cases.

**Location:** `src/test/java/com/example/currencyconverter/service/CurrencyServiceTest.java`

**Code:**
```java
package com.example.currencyconverter.service;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CurrencyServiceTest {

    @Test
    void testConvert() {
        CurrencyService service = new CurrencyService();
        double result = service.convert("USD", "EUR", 100);
        assertEquals(117.73, result, 0.01);
    }

    @Test
    void testConvertInvalidCurrency() {
        CurrencyService service = new CurrencyService();
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            service.convert("ABC", "EUR", 100);
        });
        assertEquals("Invalid currency code", exception.getMessage());
    }
}
```
Prepare project documentation for unit tests for service folder asREADME.md
Sure! Here's the project documentation for unit tests for the service layer, formatted as README.md for the service folder.

service/README.md
markdown
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
```
Unit Tests
CurrencyServiceTest.java
The CurrencyServiceTest class contains unit tests for the CurrencyService. These tests verify the correctness of the currency conversion logic and the handling of various edge cases.

**Location:** `src/test/java/com/example/currencyconverter/service/CurrencyServiceTest.java`

**Code:**

``` java
package com.example.currencyconverter.service;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CurrencyServiceTest {

    @Test
    void testConvert() {
        CurrencyService service = new CurrencyService();
        double result = service.convert("USD", "EUR", 100);
        assertEquals(117.73, result, 0.01);
    }

    @Test
    void testConvertInvalidCurrency() {
        CurrencyService service = new CurrencyService();
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            service.convert("ABC", "EUR", 100);
        });
        assertEquals("Invalid currency code", exception.getMessage());
    }
}
```
## Explanation of Tests
### testConvert

This test verifies that the conversion logic in CurrencyService correctly converts an amount from one currency to another.

It asserts that converting 100 USD to EUR returns a result close to 117.73 with a margin of 0.01.

### testConvertInvalidCurrency

This test checks the handling of invalid currency codes.

It asserts that passing an invalid currency code ("ABC") to the convert method throws an IllegalArgumentException with the message "Invalid currency code".

## Summary
Unit tests for the service layer are essential to ensure that the core functionalities of the currency converter application work correctly and handle edge cases gracefully. The tests validate the correctness of the conversion logic and the handling of invalid inputs.

By following this documentation and using the provided tests, you can ensure the robustness and reliability of the CurrencyService in the currency converter application.
