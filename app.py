from flask import Flask, render_template, jsonify,request
from flask_wtf import FlaskForm
from wtforms import FileField, SubmitField
from werkzeug.utils import secure_filename
import os
from wtforms.validators import InputRequired
from Food import food_recipe_generator
from flask_cors import CORS
from flask import Response
import json

app = Flask(__name__)
CORS(app) 

# Configuration
UPLOAD_FOLDER = 'images/uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure upload folder exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Helper function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/home', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # Check if an image file is provided
        if 'image' not in request.files:
            return jsonify({"error": "No image file provided"}), 400
        
        file = request.files['image']
        if not file or not allowed_file(file.filename):
            return jsonify({"error": f"Invalid file type. Allowed types: {', '.join(ALLOWED_EXTENSIONS)}"}), 400

        # Save the file securely
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        try:
            file.save(file_path)
        except OSError as e:
            return jsonify({"error": f"Failed to save file: {str(e)}"}), 500

        # Process the file
        try:
            food = food_recipe_generator()  # Ensure this function is defined
            response = food.report(file_path)
            print(f"response: {response}")
            clean_data = response.replace("```json", "").replace("```", "").strip()
            
            # Parse the response
            try:
                data = json.loads(clean_data)  # Adjust parsing if response has specific format
                print(f"response: {data}")
                return render_template('index.html', data=data) 
            except json.JSONDecodeError as e:
                print(e)
                return jsonify({"error": f"Failed to parse response: {str(e)}"}), 500
        except Exception as e:
            return jsonify({"error": f"Prediction failed: {str(e)}"}), 500

    # Handle GET request
    return render_template('index.html',data=None)  # Ensure index.html exists
   

@app.route('/', methods=['GET', 'POST'])
@app.route('/about', methods=['GET', 'POST'])
def about():
    return render_template('blog.html')

@app.route('/working', methods=['GET', 'POST'])
def working():
    return render_template('working.html')

if __name__ == '__main__':
    app.run(port = 8001, debug=True)
