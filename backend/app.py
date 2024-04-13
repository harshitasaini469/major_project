from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the trained model
model = joblib.load('model.joblib')
encoder=joblib.load('encoder.joblib')

@app.route('/predict', methods=['POST'])
def predict_millet_type():
    # Get location input from request
    location = request.json.get('location')
    print(location)
    # Predict millet type
    X_new = encoder.transform([[location]])  # Reshape location into a 2D array
    predicted_millet_type = model.predict(X_new)
    print(predicted_millet_type);
    
    return jsonify({'predicted_millet_type': predicted_millet_type[0]})

if __name__ == '__main__':
    app.run(debug=True)
