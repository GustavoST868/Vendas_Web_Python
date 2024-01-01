#libraries and modules
from flask import Flask, render_template

#start
app = Flask(__name__)

#initial route
@app.route('/')
def index():
    return render_template('index.html')

#route to login page
@app.route('/login')
def login():
    return render_template('login.html') 

#runs and starts the flask server
if __name__ == '__main__':
    app.run(debug=True)
