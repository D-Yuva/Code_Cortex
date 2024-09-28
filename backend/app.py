from flask import Flask
from flask_cors import CORS
from routes.predict import predict_efficiency

app = Flask(__name__)

# Enable CORS
CORS(app)

# Route to predict efficiency
app.add_url_rule('/api/predict', 'predict_efficiency', predict_efficiency, methods=['POST'])

if __name__ == "__main__":
    app.run(debug=True)
