<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Customer Churn Prediction</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">

    <style>
        body {
            margin: 0;
            font-family: 'Inter', sans-serif;
            background: #f5f7fb;
        }

        .wrapper {
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
        }

        .card {
            background: #ffffff;
            padding: 35px;
            width: 420px;
            border-radius: 14px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        h1 {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 25px;
            color: #1f2937;
        }

        label {
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            margin-top: 12px;
            display: block;
        }

        input, select {
            width: 100%;
            padding: 10px;
            margin-top: 6px;
            border-radius: 8px;
            border: 1px solid #d1d5db;
            font-size: 14px;
            transition: 0.2s;
        }

        input:focus, select:focus {
            border-color: #4f46e5;
            outline: none;
        }

        button {
            width: 100%;
            margin-top: 20px;
            padding: 12px;
            border: none;
            border-radius: 10px;
            background: #4f46e5;
            color: white;
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
            background: #4338ca;
        }

        .result-box {
            margin-top: 25px;
            padding: 14px;
            border-radius: 10px;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .churn {
            background: #fee2e2;
            color: #b91c1c;
        }

        .no-churn {
            background: #dcfce7;
            color: #166534;
        }

        .error {
            color: #dc2626;
            font-size: 13px;
            margin-top: 10px;
        }

        .loading {
            display: none;
            margin-top: 10px;
            font-size: 13px;
            color: #6b7280;
        }
    </style>
</head>

<body>

<div class="wrapper">
    <div class="card">
        <h1>Customer Churn Prediction</h1>

        <form id="form" method="POST">

            <label>Gender</label>
            <select name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

            <label>Tenure (Months)</label>
            <input type="number" name="tenure" id="tenure" placeholder="e.g. 12">

            <label>Monthly Charges ($)</label>
            <input type="number" step="0.01" name="monthly_charges" id="charges" placeholder="e.g. 75.5">

            <div class="error" id="error"></div>

            <button type="submit">Run Prediction</button>

        </form>

        <div class="loading" id="loading">Processing request...</div>

        
        <div class="result-box">
            
                ⚠️ High Risk: Customer likely to churn
                <br>
           
                ✔️ Low Risk: Customer likely to stay
            
        </div>
        

    </div>
</div>

<script>
const form = document.getElementById("form");
const errorDiv = document.getElementById("error");
const loading = document.getElementById("loading");

form.addEventListener("submit", function(e) {
    const tenure = document.getElementById("tenure").value;
    const charges = document.getElementById("charges").value;

    errorDiv.innerText = "";

    if (tenure === "" || charges === "") {
        e.preventDefault();
        errorDiv.innerText = "All fields are required.";
        return;
    }

    if (tenure < 0 || charges < 0) {
        e.preventDefault();
        errorDiv.innerText = "Values must be positive.";
        return;
    }

    loading.style.display = "block";
});
</script>

</body>
</html>
