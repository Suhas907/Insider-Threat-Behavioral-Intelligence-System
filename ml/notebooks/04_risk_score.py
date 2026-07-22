import pandas as pd

# Load anomaly report
df = pd.read_csv("ml/outputs/anomaly_report.csv")

# -----------------------------
# Risk Score Calculation
# -----------------------------
def calculate_risk(row):
    score = 0

    # AI anomaly
    if row["anomaly"] == "Anomaly":
        score += 40

    # Many computers used
    if row["unique_pcs"] > 10:
        score += 25
    elif row["unique_pcs"] > 5:
        score += 15

    # Excessive login activity
    if row["total_logins"] > 900:
        score += 20
    elif row["total_logins"] > 750:
        score += 10

    # Unusual average login time
    if row["avg_login_hour"] < 6:
        score += 10
    elif row["avg_login_hour"] > 20:
        score += 10

    return min(score, 100)

# Calculate score
df["risk_score"] = df.apply(calculate_risk, axis=1)

# -----------------------------
# Risk Level
# -----------------------------
def risk_level(score):
    if score >= 80:
        return "Critical"
    elif score >= 60:
        return "High"
    elif score >= 30:
        return "Medium"
    else:
        return "Low"

df["risk_level"] = df["risk_score"].apply(risk_level)

# Save report
df.to_csv(
    "ml/outputs/risk_scores.csv",
    index=False
)

print("Risk Score Generation Completed!\n")

print(df[
    [
        "user",
        "risk_score",
        "risk_level"
    ]
].head(20))

print("\nRisk Level Summary")
print(df["risk_level"].value_counts())