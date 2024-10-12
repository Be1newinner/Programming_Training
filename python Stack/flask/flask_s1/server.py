from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, Worlds!</p>"

@app.route("/blog")
def blog():
    return {"name":"Vijay"}

@app.route("/home")
def home():
    return render_template("index.html")

