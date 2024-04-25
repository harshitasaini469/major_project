from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import OneHotEncoder
import pandas as pd
import joblib

# Sample data (replace with your data)
data = {
    "state_district": ["Rajasthan", "Karnataka", "Maharashtra", "Uttar Pradesh", "Gujarat"],
    "millet_crop": ["Bajra", "Ragi", "Jowar", "Bajra", "Bajra"]
}

# Create pandas DataFrame from dictionary
df = pd.DataFrame(data)

# Encode state/district names (one-hot encoding)
encoder = OneHotEncoder(handle_unknown='ignore')  # Handle unknown categories
X_encoded = encoder.fit_transform(df["state_district"].values.reshape(-1, 1))

# Feature (encoded state/district) and target variable
X = X_encoded  # Encoded state/district names as features
y = df["millet_crop"]  # Millet crop names as target variable

# Train the model (Random Forest classifier)
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)

# Function to predict millet crop (replace with your Flask route logic)
def predict_millet(state_district):
    # Encode the input state/district
    X_new = encoder.transform([[state_district]])

    # Predict millet crop using the model
    predicted_crop = model.predict(X_new)[0]
    return predicted_crop

# Save the trained model using Joblib
joblib.dump(model, 'model.joblib')

# Save the OneHotEncoder using Joblib
joblib.dump(encoder, 'encoder.joblib')

# Example prediction
# predicted_crop = predict_millet("Maharashtra")  # Replace with user input
# print(f"Predicted millet crop: {predicted_crop}")
