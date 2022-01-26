# Camera feature : deploying our fruit and vegetable classifier using Flask
import json
import os
import urllib.request
import numpy as np
import pathlib
temp = pathlib.PosixPath
pathlib.PosixPath = pathlib.WindowsPath
from flask import Flask, render_template, request
from fastai.vision.all import *

image_directory = "test_images"

# path for the trained classifier
path = Path(os.getcwd())
full_path = os.path.join(path,'fruit_veg_model.pkl')
print("path is:",path)
print("full_path is: ",full_path)

# load the model
learner = load_learner(full_path)


app = Flask(__name__)


@app.route('/')
def home():
    title_text = "fastai deployment"
    title = {'titlename':title_text}
    return render_template('home.html',title=title) 
    
@app.route('/prediction/')
def prediction():
    image_file_name = request.args.get("file_name")
    full_path = os.path.join(path,image_directory,image_file_name)
    print("full_path is: ",full_path)
    img = PILImage.create(full_path)

    # apply the model to the image
    pred_class, ti1, ti2 = learner.predict(img)
    print("pred_class is: ",pred_class)
    predict_string = "Our model thinks this is: "+pred_class
    prediction = {'prediction_key':predict_string}
    return(render_template('prediction.html',prediction=prediction))
        
    
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')