# Use of Annotations

## Overview
Annotations in Java provide metadata about the program and are used to give instructions to the compiler, runtime, or tools. In the Currency Converter application, annotations are used extensively to simplify and enhance the functionality of the code, particularly with the help of Spring Framework annotations.

## Project Structure
currency-coverter/ ├── src/ │ ├── main/ │ │ ├── java/ │ │ │ ├── com/ │ │ │ │ ├── example/ │ │ │ │ │ ├── currencyconverter/ │ │ │ │ │ │ ├── controller/ │ │ │ │ │ │ │ └── CurrencyController.java│ │ │ │ │ │ ├── service/ │ │ │ │ │ │ │ └── CurrencyService.java│ │ │ ├── resources/ │ ├── webapp/ ├── pom.xml

## Annotations Used

### Controller Layer

**CurrencyController.java**
- **@Controller**: This annotation indicates that the class serves as a controller in Spring MVC.
- **@Autowired**: This annotation is used for automatic dependency injection.
- **@GetMapping**: This annotation is used to map HTTP GET requests to specific handler methods.
- **@PostMapping**: This annotation is used to map HTTP POST requests to specific handler methods.

**Code:**
```java
package com.example.currencyconverter.controller;

import com.example.currencyconverter.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CurrencyController {
    private final CurrencyService currencyService;

    @Autowired
    public CurrencyController(CurrencyService currencyService) {
        this.currencyService = currencyService;
    }

    @GetMapping("/")
    public String showForm() {
        return "converter";
    }

    @PostMapping("/convert")
    public String convertCurrency(@RequestParam String from, @RequestParam String to,
                                  @RequestParam double amount, Model model) {
        try {
            double result = currencyService.convert(from, to, amount);
            model.addAttribute("result", result);
        } catch (IllegalArgumentException e) {
            model.addAttribute("error", e.getMessage());
        }
        return "converter";
    }
}
```
## Service Layer
### CurrencyService.java

@Service: This annotation indicates that the class is a service, which is a component of the service layer in the Spring framework.

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
Summary of Annotations
@Controller

Indicates that the class is a Spring MVC controller.

Used in: CurrencyController.java

@Autowired

Allows Spring to resolve and inject collaborating beans into the bean.

Used in: CurrencyController.java

@GetMapping

Maps HTTP GET requests to specific handler methods.

Used in: CurrencyController.java

@PostMapping

Maps HTTP POST requests to specific handler methods.

Used in: CurrencyController.java

@Service

Indicates that the class is a service component in the Spring framework.

Used in: CurrencyService.java

Benefits of Using Annotations
Simplicity: Annotations reduce the need for verbose configuration files.

Readability: Annotations make the code more readable and easier to understand.

Dependency Injection: Annotations like @Autowired simplify dependency management.

Mapping: Annotations like @GetMapping and @PostMapping make URL mappings straightforward and less error-prone.

How to Run the Application
Ensure that the application is built and packaged using Maven.

Deploy the WAR file to a servlet container such as Tomcat.

Access the application through the web browser at http://localhost:8080/.
