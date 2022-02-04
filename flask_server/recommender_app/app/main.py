# This is a no-machine-learning quick fix to provide functionality
# to the "recommended recipes" feature of our Cupboard app.
# It expects an ingredient as an input (URL request) and returns
# the 5 top-rated recipes in the dataset which contain that ingredient.
# The app has been deployed in heroku and an example request would be:
# https://cupboard-recommender.herokuapp.com/api/recommended?ingredient=eggplant

import os
import json
import pandas as pd
import flask
from flask import Flask, jsonify, request, Response


app = flask.Flask(__name__)
app.config["DEBUG"] = True

module_dir = os.path.abspath(os.path.dirname(__file__))
file_path = os.path.join(module_dir, "recipe_dataset_sample_clean.json")

# Load recipes dataset
recipes = pd.read_json(file_path, orient='index')

# Route homepage
@app.route('/', methods=['GET'])
def home():
    return '''<h1>A prototype API for Cupboard 'Recommended recipes' feature.</h1>
<p></p>'''

# Route "recommended recipes" function
@app.route('/api/recommended', methods=['GET'])
def recipes_with_ingredient():
    # Check if an ingredient was provided as part of the URL.
    # If ingredient is provided, assign it to a variable.
    # If no ingredient is provided, display an error in the browser.
    if 'ingredient' in request.args:
        ingredient = request.args['ingredient']
    else:
        return "Error: No ingredient provided. Please specify an ingredient."
    # Search the ingredients column of dataframe for specified ingredient and return
    # list of recipes with that ingredient.
    recipes_with_ingredient = recipes.loc[recipes['ingredients'].str.contains(ingredient, case=False)]
    recipes['aver_rate'].astype('float')
    # Get the first five top rated recipes with ingredient.
    results = recipes_with_ingredient.sort_values('aver_rate', ascending=False).head(5)
    return Response(results.to_json(orient="index"), mimetype="application/json")



