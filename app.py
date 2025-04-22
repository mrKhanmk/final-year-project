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
        if 'image' not in request.files:
            return jsonify({"error": "No image file provided"}), 400
        
        file = request.files['image']
        if file and allowed_file(file.filename):
            # Save the uploaded file
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
            file.save(file_path)
            
            try:
                food = food_recipe_generator()
                response = food.report(file_path)
                print("response"+response)
                data = json.loads(response[7:-4])
                print("data"+data)
                # return render_template('index.html', form=form, response=response)
                return jsonify(data)
            except Exception as e:
                return jsonify({"error": f"Prediction failed: {str(e)}"}), 500
        else:
            return jsonify({"error": "Invalid file type"}), 400
    return render_template('index.html')
   

@app.route('/', methods=['GET', 'POST'])
@app.route('/about', methods=['GET', 'POST'])
def about():
    return render_template('blog.html')

@app.route('/working', methods=['GET', 'POST'])
def working():
    return render_template('working.html')

if __name__ == '__main__':
    app.run(port = 8001, debug=True)
