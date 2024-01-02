#libraries and modules
from flask import Flask, render_template, request, redirect, url_for
import classes.user_database

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

#route to register page
@app.route('/register', methods=['GET', 'POST'])
def cadastro():
    if request.method == 'POST':
        # form submission
        username = request.form.get('username')
        password = request.form.get('password')
        email = request.form.get('email')

        #by getting the data show
        print(f"\n\nUsername: {username}, Password: {password}, Email: {email}\n\n")

        # Redirect to the index page after submission
        return redirect(url_for('index'))

    return render_template('register.html')

#runs and starts the flask server
if __name__ == '__main__':
    app.run(debug=True)
