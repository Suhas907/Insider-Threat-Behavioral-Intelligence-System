import pandas as pd
from sklearn.ensemble import IsolationForest

# ==============================
# Load the behavioral baseline
# ==============================
baseline = pd.read_csv(
    "ml/outputs/baseline.csv"
)

# ==============================
# Select features for anomaly detection
# ==============================
features = baseline[
    [
        "avg_login_hour",
        "total_logins",
        "unique_pcs"
    ]
]

# ==============================
# Train Isolation Forest Model
# ==============================
model = IsolationForest(
    contamination=0.05,   # Assume 5% of users are anomalous
    random_state=42
)

# Predict anomalies
baseline["anomaly"] = model.fit_predict(features)

# Convert prediction labels
baseline["anomaly"] = baseline["anomaly"].map({
    1: "Normal",
    -1: "Anomaly"
})

# ==============================
# Save Report
# ==============================
baseline.to_csv(
    "ml/outputs/anomaly_report.csv",
    index=False
)

print("Anomaly detection completed successfully!\n")

# ==============================
# Show first few rows
# ==============================
print("Sample Results")
print("=" * 60)
print(baseline.head(10))

# ==============================
# Count anomalies
# ==============================
print("\nAnomaly Summary")
print("=" * 60)
print(baseline["anomaly"].value_counts())

# ==============================
# Display detected anomalies
# ==============================
anomalies = baseline[
    baseline["anomaly"] == "Anomaly"
]

print("\nTop 20 Detected Anomalies")
print("=" * 60)
print(
    anomalies[
        [
            "user",
            "avg_login_hour",
            "total_logins",
            "unique_pcs"
        ]
    ].head(20)
)

# ==============================
# Total detected anomalies
# ==============================
print("\nTotal Anomalies Detected:", len(anomalies))