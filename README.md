# Currency Converter

## Overview
This is a simple currency converter application built with Spring Boot and JSP. It allows users to convert amounts between different currencies using a clean and intuitive user interface. The project demonstrates the use of servlets, JSP, JSTL, and unit testing for a robust and scalable web application.

## Features
- Convert between various currencies
- Simple and intuitive GUI
- Client-side and server-side validation
- Unit tests for the service layer
- Error handling for invalid inputs

## Project Structure

currency-coverter/ ├── src/ │ ├── main/ │ │ ├── java/ │ │ │ ├── com/ │ │ │ │ ├── example/ │ │ │ │ │ ├── currencyconverter/ │ │ │ │ │ │ ├── model/ │ │ │ │ │ │ │ └── Currency.java│ │ │ │ │ │ ├── service/ │ │ │ │ │ │ │ └── CurrencyService.java│ │ │ │ │ │ ├── servlet/ │ │ │ │ │ │ │ └── CurrencyConverterServlet.java│ │ ├── resources/ │ │ ├── webapp/ │ │ │ ├── WEB-INF/ │ │ │ │ └── web.xml│ │ │ ├── index.jsp│ │ │ ├── result.jsp├── pom.xml

## How to Run
1. Clone the repository
2. Navigate to the project directory
3. Build and run the application using `./mvnw spring-boot:run`

## Technologies Used
- Spring Boot
- JSP
- JSTL

## Unit Tests
Unit tests for the service layer can be found in `src/test/java/com/example/currencyconverter/service/CurrencyServiceTest.java`.


