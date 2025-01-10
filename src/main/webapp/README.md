# JSP Pages Documentation

## Overview
The JSP (JavaServer Pages) components of the Currency Converter application handle the presentation layer. They provide the user interface for inputting currency conversion details and displaying the conversion results. These pages utilize JSTL (JavaServer Pages Standard Tag Library) and EL (Expression Language) for dynamic content rendering and data handling.

## JSP Pages

### index.jsp
The `index.jsp` page serves as the main entry point for the application. It allows users to input the currency conversion details and submit the form for processing.

**Location:** `src/main/webapp/index.jsp`

**Code:**

```jsp
<!DOCTYPE html>
<html>
<head>
    <title>Currency Converter</title>
</head>
<body>
    <h1>Currency Converter</h1>
    <form action="convert" method="post">
        <label>From:</label>
        <input type="text" name="from" required pattern="[A-Z]{3}">
        <label>To:</label>
        <input type="text" name="to" required pattern="[A-Z]{3}">
        <label>Amount:</label>
        <input type="number" name="amount" required min="0" step="0.01">
        <button type="submit">Convert</button>
    </form>
    <div>
        <c:if test="${not empty result}">
            <h2>Converted Amount: <span>${result}</span></h2>
        </c:if>
        <c:if test="${not empty error}">
            <h2>Error: <span>${error}</span></h2>
        </c:if>
    </div>
</body>
</html>
```
### result.jsp
The result.jsp page displays the results of the currency conversion. It shows the original and converted amounts, along with the currency codes.

**Location:** `src/main/webapp/result.jsp`


**Code:**

```jsp
<!DOCTYPE html>
<html>
<head>
    <title>Conversion Result</title>
</head>
<body>
    <h1>Conversion Result</h1>
    <p>From: ${from}</p>
    <p>To: ${to}</p>
    <p>Amount: ${amount}</p>
    <p>Converted Amount: ${result}</p>
    <a href="index.jsp">Convert Another Amount</a>
</body>
</html>
```
## Explanation of JSP Pages
### index.jsp

Form Inputs: The page includes form inputs for the "from" currency code, "to" currency code, and the amount to convert.

Validation: Uses HTML5 attributes for client-side validation. The currency code fields require three uppercase letters,
and the amount field requires a non-negative number.

JSTL and EL: Utilizes JSTL <c:if> tags and EL to conditionally display conversion results or error messages.

### result.jsp

Displaying Results: Shows the original and converted currency amounts, and the currency codes using EL.

Link: Provides a link to return to the index.jsp page for another conversion.

## How to Use JSP Pages
Input Conversion Details:

Open index.jsp or converter.jsp in your web browser.

Enter the "from" currency code, "to" currency code, and the amount to convert.

Click the "Convert" button to submit the form.

View Conversion Results:

After submitting the form, the results will be displayed on the same page (if there are no errors).

If there is an error (e.g., invalid input format), an error message will be displayed.

To perform another conversion, click the link provided in result.jsp.

## Dependencies
JSTL: Included in the project dependencies to facilitate the use of JSTL tags.

EL: Utilized for accessing and displaying data within the JSP pages.

## Summary
The JSP pages in the Currency Converter application provide a user-friendly interface for inputting and
displaying currency conversion details. They use JSTL and EL for dynamic content rendering and ensure
proper validation and error handling for user inputs.

