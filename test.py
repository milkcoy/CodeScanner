from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def home():
    return '''
        <form action="/greet" method="get">
            <input type="text" name="name" placeholder="Enter your name">
            <input type="submit" value="Greet">
        </form>
    '''

@app.route('/greet')
def greet():
    name = request.args.get('name', '')
    return f"<h1>Hello, {name}!</h1>"

if __name__ == '__main__':
    app.run(debug=True)
