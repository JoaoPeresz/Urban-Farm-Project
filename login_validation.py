from flask import Flask, request, jsonify
from flask_cors import CORS
import functions/database.py



app = Flask(__name__)
CORS(app)

# exemplo de endpoint
@app.route('/api/submit', methods=['POST'])
def submit_data():
    data = request.json  # pega a informação manda através de POST no front-end
    print('Received data:', data)


    #trata a informação recebida




    # retorna mensagem que deu certo a conexão
    return jsonify({'message': 'Data received successfully', 'receivedData': data}), 200

if __name__ == '__main__':
    app.run(debug=True)
