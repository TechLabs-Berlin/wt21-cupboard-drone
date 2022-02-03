# Camera feature : deploying our fruit and vegetable classifier using Flask
import json
import os
import urllib.request
import numpy as np
import pathlib
temp = pathlib.PosixPath
#pathlib.PosixPath = pathlib.WindowsPath #ONLY USE IN WINDOWS ENVIRONMENT
from flask import Flask, render_template, request, flash, redirect, url_for, jsonify
from fastai.vision.all import *
from werkzeug.utils import secure_filename
from flask_cors import CORS

#Where images are downloaded to and what types of images are allowed: 
UPLOAD_FOLDER = "test_images"
ALLOWED_EXTENSIONS = {'jpg', 'png'}
# path for the trained classifier
path = Path(os.getcwd())
full_path = os.path.join(path,'fruit_veg_model.pkl')


# load the model
learner = load_learner(full_path)


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
            filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# @app.route('/', methods=['GET', 'POST'])
# def upload_file():
#     if request.method == 'POST':
#         if 'file' not in request.files:
#             flash('no files')
#             return redirect(request.url)
#         file = request.files['file']
#         if file.filename == '':
#             flash('no selected files')
#             return redirect(request.url)
#         if file and allowed_file(file.filename):
#             filename = secure_filename(file.filename)
#             file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
#             filen = os.path.join(app.config['UPLOAD_FOLDER'], filename)           
#             return redirect(url_for('prediction', file_name=filen))

#     return 'hi'


@app.route('/download_image', methods=['GET', 'POST'])
def get_file():
    print("***********HERE**************")
    target = os.path.join(app.config['UPLOAD_FOLDER'])
    if not os.path.isdir(target):
        os.mkdir(target)
    if request.method == 'POST':
        file = request.files['myFile']
        print(file.filename)
    if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            saved_file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            return redirect(url_for('prediction', file_name=saved_file_path))
    return 'hello'
    
@app.route('/prediction/')
def prediction():
    print(request.args)
    file_name = request.args['file_name']

    full_path = os.path.join(path,file_name)
    print("full_path is: ",full_path)
    img = PILImage.create(full_path)

    # apply the model to the image
    pred_class, ti1, ti2 = learner.predict(img)
    print("pred_class is: ",pred_class)
    predict_string = pred_class
    prediction = {'prediction_key': predict_string+ " (click me!)"}
    #return(render_template('prediction.html',prediction=prediction))
    return prediction
        
    
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0') 