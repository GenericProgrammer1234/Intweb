from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
def intweb():
	return render_template("intweb.html", url_for=url_for)

app.run(debug=True)