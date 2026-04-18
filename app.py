from flask import Flask, render_template, request
import pickle
import pandas as pd

app = Flask(__name__)

# Load model
with open("customer_churn_model.pkl", "rb") as f:
    model_data = pickle.load(f)

model = model_data["model"]

# Load encoders
with open("encoders.pkl", "rb") as f:
    encoders = pickle.load(f)


@app.route("/", methods=["GET", "POST"])
def home():
    prediction = None

    if request.method == "POST":
        try:
            # Collect all form data (MATCHES index.html)
            data = {
                "gender": request.form["gender"],
                "SeniorCitizen": int(request.form["SeniorCitizen"]),
                "Partner": request.form["Partner"],
                "Dependents": request.form["Dependents"],
                "tenure": int(request.form["tenure"]),
                "PhoneService": request.form["PhoneService"],
                "MultipleLines": request.form["MultipleLines"],
                "InternetService": request.form["InternetService"],
                "OnlineSecurity": request.form["OnlineSecurity"],
                "OnlineBackup": request.form["OnlineBackup"],
                "DeviceProtection": request.form["DeviceProtection"],
                "TechSupport": request.form["TechSupport"],
                "StreamingTV": request.form["StreamingTV"],
                "StreamingMovies": request.form["StreamingMovies"],
                "Contract": request.form["Contract"],
                "PaperlessBilling": request.form["PaperlessBilling"],
                "PaymentMethod": request.form["PaymentMethod"],
                "MonthlyCharges": float(request.form["MonthlyCharges"]),
                "TotalCharges": float(request.form["TotalCharges"]),
            }

            # Convert to DataFrame
            df = pd.DataFrame([data])

            # Apply encoders
            for col, encoder in encoders.items():
                df[col] = encoder.transform(df[col])

            # Prediction
            result = model.predict(df)[0]
            prediction = "Churn" if result == 1 else "No Churn"

        except Exception as e:
            print("Error:", e)
            prediction = "Error"

    return render_template("index.html", prediction=prediction)


if __name__ == "__main__":
    app.run()
