from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/habilidades')
def skills():
    return render_template('skills.html')

@app.route('/proyectos')
def projects():
    return render_template('projects.html')

@app.route('/contacto')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
