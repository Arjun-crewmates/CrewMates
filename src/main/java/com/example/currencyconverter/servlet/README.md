# Servlet Layer Documentation

## Overview
The servlet layer of the Currency Converter application is responsible for handling HTTP requests and responses. It processes user inputs, interacts with the service layer to perform currency conversions, and forwards the results to the appropriate JSP pages for display. This layer is encapsulated within the `CurrencyConverterServlet` class.

## CurrencyConverterServlet

### CurrencyConverterServlet.java
The `CurrencyConverterServlet` class manages the main functionality of handling currency conversion requests from the user. It is annotated with `@WebServlet` to define the servlet mapping and uses Spring's `@Controller` and `@Autowired` annotations for dependency injection.

**Location:** `src/main/java/com/example/currencyconverter/servlet/CurrencyConverterServlet.java`

**Code:**

```java
package com.example.currencyconverter.servlet;

import com.example.currencyconverter.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@WebServlet("/convert")
public class CurrencyConverterServlet extends HttpServlet {
    private final CurrencyService currencyService;

    @Autowired
    public CurrencyConverterServlet(CurrencyService currencyService) {
        this.currencyService = currencyService;
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("index.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String from = request.getParameter("from");
        String to = request.getParameter("to");
        double amount;

        try {
            amount = Double.parseDouble(request.getParameter("amount"));
        } catch (NumberFormatException e) {
            request.setAttribute("error", "Invalid amount format");
            request.getRequestDispatcher("index.jsp").forward(request, response);
            return;
        }

        try {
            double result = currencyService.convert(from, to, amount);
            request.setAttribute("from", from);
            request.setAttribute("to", to);
            request.setAttribute("amount", amount);
            request.setAttribute("result", result);
            request.getRequestDispatcher("result.jsp").forward(request, response);
        } catch (IllegalArgumentException e) {
            request.setAttribute("error", e.getMessage());
            request.getRequestDispatcher("index.jsp").forward(request, response);
        }
    }
}
