<!DOCTYPE html>
<html>
<head>
    <title>Currency Converter</title>
</head>
<body>
    <h1>Currency Converter</h1>
    <form action="convert" method="post">
        <label>From:</label>
        <input type="text" name="from" required>
        <label>To:</label>
        <input type="text" name="to" required>
        <label>Amount:</label>
        <input type="number" name="amount" required min="0" step="0.01">
        <button type="submit">Convert</button>
    </form>
    <div>
        <h2>Converted Amount: <span>${result}</span></h2>
        <h2>Error: <span>${error}</span></h2>
    </div>
</body>
</html>
