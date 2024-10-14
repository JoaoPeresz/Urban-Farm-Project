from flask import Flask, request, jsonify, session, redirect
import psycopg2  # PostgreSQL adapter for Python

app = Flask(__name__)


# Login API
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    usuario = data['login'].upper()
    senha = data['senha']

    try:
        # Conectar ao banco de dados PostgreSQL
        conn = psycopg2.connect(**connection_params)
        cursor = conn.cursor()

        query = """
            SELECT email_usuario, senha_usuario
            FROM DBA.FAZENDA_USUARIOS
            WHERE email_usuario = %s
            AND senha_usuario = %s
        """
        
        # Executar a consulta com parâmetros
        cursor.execute(query, (usuario, senha))
        user = cursor.fetchone()

        if user:
            return jsonify({"message": "Login successful"}), 200
        else:
            return jsonify({"message": "Invalid credentials"}), 401

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "An error occurred"}), 500
    
    finally:
        if conn:
            cursor.close()
            conn.close()

if __name__ == '__main__':
    app.run(debug=True)