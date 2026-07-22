import pandas as pd

# Load dataset
df = pd.read_csv(r"C:\Users\Suhas\OneDrive\Desktop\Insider-Threat-Behavioral-Intelligence-System\ml\datasets\r1\logon.csv")


# Convert date column into datetime format
df["date"] = pd.to_datetime(
    df["date"],
    format="%m/%d/%Y %H:%M:%S"
)

# Extract useful features
df["hour"] = df["date"].dt.hour
df["day"] = df["date"].dt.day_name()
df["month"] = df["date"].dt.month
df["date_only"] = df["date"].dt.date


print(df.head())

baseline = (
    df.groupby("user")
      .agg(
          avg_login_hour=("hour", "mean"),
          total_logins=("activity", "count"),
          unique_pcs=("pc", "nunique"),
          first_login=("date", "min"),
          last_login=("date", "max"),
      )
      .reset_index()
)

print(baseline.head())

baseline.to_csv(
    r"C:\Users\Suhas\OneDrive\Desktop\Insider-Threat-Behavioral-Intelligence-System\ml\outputs\baseline.csv",
    index=False
)

print("Behavior baseline saved successfully!")