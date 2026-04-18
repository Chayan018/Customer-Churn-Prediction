# 📊 Customer Churn Prediction

This project is a Machine Learning-based web application that predicts whether a customer is likely to churn (leave a service) or not.

---

## 🚀 Features
- Predict customer churn using ML model
- Web interface built with Flask
- Data preprocessing with label encoding
- Handles categorical + numerical features
- Deployed using Render

---

## 🧠 Model Details
- Algorithms used:
  - Random Forest (final model)
  - Decision Tree
  - XGBoost (for comparison)

- Techniques:
  - SMOTE (for class imbalance)
  - Label Encoding
  - Train-test split

- The trained model is saved as `customer_churn_model.pkl` using pickle.  
  This file is loaded in the Flask app to make real-time predictions without retraining.
