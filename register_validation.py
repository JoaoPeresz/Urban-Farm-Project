from flask import Flask, request, jsonify, redirect
import psycopg2  # PostgreSQL adapter for Python
import bcrypt

app = Flask(__name__)

# Parâmetros de conexão com o banco de dados
connection_params = {
    'dbname': 'nome_do_banco',
    'user': 'usuario_do_banco',
    'password': 'senha_do_banco',
    'host': 'localhost',
    'port': '5432'
}

react_login_url = 'http://localhost:3000/login'

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    usuario = data['login'].upper()
    senha = data['senha']

    try:
        # Conectar ao banco de dados PostgreSQL
        conn = psycopg2.connect(**connection_params)
        cursor = conn.cursor()

        # Verificar se o usuário já existe
        query_check_user = """
            SELECT email_usuario
            FROM DBA.FAZENDA_USUARIOS
            WHERE email_usuario = %s
        """
        cursor.execute(query_check_user, (usuario,))
        user_exists = cursor.fetchone()

        if user_exists:
            return jsonify({"message": "User already exists"}), 400

        # Hash da senha antes de armazenar
        senha_hash = bcrypt.hashpw(senha.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        # Inserir o novo usuário no banco de dados
        query_insert_user = """
            INSERT INTO DBA.FAZENDA_USUARIOS (email_usuario, senha_usuario)
            VALUES (%s, %s)
        """
        cursor.execute(query_insert_user, (usuario, senha_hash))
        conn.commit()


        return redirect(react_login_url)


    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "Houve um erro"}), 500
    
    finally:
        if conn:
            cursor.close()
            conn.close()

if __name__ == '__main__':
    app.run(debug=True)
