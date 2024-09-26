from flask import Flask, request, jsonify, session, redirect
import functions.database

app = Flask(__name__)



# Login API
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    usuario = data['login'].upper()
    senha = data['senha']

    conn = pyodbc.connect(connection_string)

    cursor = conn.cursor()

    query = """
        SELECT email_usuario,
               senha_usuaro,
            FROM DBA.FAZENDA_USUARIOS
            WHERE email_usuario = :usuario
            AND senha = :senha
    """
    cursor.prepare(query)
    cursor.execute(None, {'usuario': usuario, 'senha': senha})


if __name__ == '__main__':
    app.run(debug=True)
