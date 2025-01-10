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
