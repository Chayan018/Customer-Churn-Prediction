<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Customer Churn Prediction</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">

<style>
body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    color: #333;
}

.container {
    max-width: 1000px;
    margin: 40px auto;
    background: #ffffff;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

h1 {
    text-align: center;
    color: #4f46e5;
    margin-bottom: 30px;
}

.section {
    margin-bottom: 25px;
    padding: 15px;
    border-radius: 12px;
    background: #f9fafb;
}

.section h3 {
    margin-bottom: 10px;
    color: #6d28d9;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

label {
    font-size: 13px;
    font-weight: 500;
}

input, select {
    width: 100%;
    padding: 9px;
    margin-top: 5px;
    border-radius: 8px;
    border: 1px solid #ddd;
    transition: 0.2s;
}

input:focus, select:focus {
    border-color: #6366f1;
    outline: none;
}

button {
    width: 100%;
    margin-top: 20px;
    padding: 14px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #6366f1, #9333ea);
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    transform: scale(1.02);
}

.result {
    margin-top: 25px;
    padding: 18px;
    border-radius: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
}

.churn {
    background: #fee2e2;
    color: #b91c1c;
}

.no-churn {
    background: #dcfce7;
    color: #166534;
}
</style>
</head>

<body>

<div class="container">
<h1>📊 Customer Churn Prediction</h1>

<form method="POST">

<!-- BASIC INFO -->
<div class="section">
<h3>👤 Basic Information</h3>
<div class="grid">

<label>Gender
<select name="gender"><option>Male</option><option>Female</option></select>
</label>

<label>Senior Citizen
<select name="SeniorCitizen"><option value="0">No</option><option value="1">Yes</option></select>
</label>

<label>Partner
<select name="Partner"><option>Yes</option><option>No</option></select>
</label>

<label>Dependents
<select name="Dependents"><option>Yes</option><option>No</option></select>
</label>

</div>
</div>

<!-- SERVICE INFO -->
<div class="section">
<h3>📡 Service Details</h3>
<div class="grid">

<label>Phone Service
<select name="PhoneService"><option>Yes</option><option>No</option></select>
</label>

<label>Multiple Lines
<select name="MultipleLines">
<option>No</option>
<option>Yes</option>
<option>No phone service</option>
</select>
</label>

<label>Internet Service
<select name="InternetService">
<option>DSL</option>
<option>Fiber optic</option>
<option>No</option>
</select>
</label>

<label>Online Security
<select name="OnlineSecurity">
<option>Yes</option>
<option>No</option>
<option>No internet service</option>
</select>
</label>

<label>Online Backup
<select name="OnlineBackup">
<option>Yes</option>
<option>No</option>
<option>No internet service</option>
</select>
</label>

<label>Device Protection
<select name="DeviceProtection">
<option>Yes</option>
<option>No</option>
<option>No internet service</option>
</select>
</label>

<label>Tech Support
<select name="TechSupport">
<option>Yes</option>
<option>No</option>
<option>No internet service</option>
</select>
</label>

<label>Streaming TV
<select name="StreamingTV">
<option>Yes</option>
<option>No</option>
<option>No internet service</option>
</select>
</label>

<label>Streaming Movies
<select name="StreamingMovies">
<option>Yes</option>
<option>No</option>
<option>No internet service</option>
</select>
</label>

</div>
</div>

<!-- BILLING -->
<div class="section">
<h3>💳 Billing Details</h3>
<div class="grid">

<label>Contract
<select name="Contract">
<option>Month-to-month</option>
<option>One year</option>
<option>Two year</option>
</select>
</label>

<label>Paperless Billing
<select name="PaperlessBilling"><option>Yes</option><option>No</option></select>
</label>

<label>Payment Method
<select name="PaymentMethod">
<option>Electronic check</option>
<option>Mailed check</option>
<option>Bank transfer (automatic)</option>
<option>Credit card (automatic)</option>
</select>
</label>

<label>Tenure
<input type="number" name="tenure" required>
</label>

<label>Monthly Charges
<input type="number" step="0.01" name="MonthlyCharges" required>
</label>

<label>Total Charges
<input type="number" step="0.01" name="TotalCharges" required>
</label>

</div>
</div>

<button type="submit">🚀 Predict Churn</button>

</form>


<div class="result {% if prediction == 'Churn' %}churn{% else %}no-churn{% endif %}">
    
</div>


</div>

</body>
</html>
