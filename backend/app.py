from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS
from flask_mysqldb import MySQL
import mysql.connector
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='mysql://root:Harshita@1@localhost/milletrecommendationsystem'
CORS(app)
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='Harshita@1'
app.config['MYSQL_DB']='milletrecommendationsystem'

# Load the trained model
model = joblib.load('model.joblib')
encoder=joblib.load('encoder.joblib')

mysql=MySQL(app)


@app.route('/predict', methods=['POST'])
def predict_millet_type():
    # Get l  ocation input from request
    location = request.json.get('location')
    print(location)
    # Predict millet type
    X_new = encoder.transform([[location]])  # Reshape location into a 2D array
    predicted_millet_type = model.predict(X_new)
    print(predicted_millet_type);
    
    return jsonify({'predicted_millet_type': predicted_millet_type[0]})

@app.route('/search',methods=['POST'])
def search():
    try:
        millet_name=request.json.get('millet')
        millet_eng=request.json.get('milletHindi')

        cursor=mysql.connection.cursor()

        query="""Select Srno, TranslatedRecipeName, TotalTimeInMins from recipes where TranslatedRecipeName like %s or TranslatedRecipeName like %s """
        cursor.execute(query,(f'%{millet_name}%',f'%{millet_eng}%'))
        recipes_data=cursor.fetchall()

        cursor.close()

        if recipes_data:
            recipes_list=[]
            for recipe_data in recipes_data:
                recipe_dict={
                    'Srno':recipe_data[0],
                    'TranslatedRecipeName':recipe_data[1],
                    'TotalTimeInMins':recipe_data[2]
                }
                recipes_list.append(recipe_dict)
            print(recipe_dict)
            return jsonify({
                'recipes':recipes_list
            })
        else:
            return jsonify({
                'message': f"No recipes with millet name '{millet_name}'"
            })
    

    except Exception as e:
        # Handle connection errors
        print(f'Error connecting to MySQL database: {e}')
        # return jsonify({'error': f'Error connecting to MySQL database: {e}'})

    
if __name__ == '__main__':
    app.run(debug=True)
