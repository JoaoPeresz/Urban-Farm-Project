import psycopg2

try:
    # Connect to your postgres DB
    connection = psycopg2.connect(
        host="your_host",
        database="your_database",
        user="your_username",
        password="your_password",
        port="your_port"  # Default PostgreSQL port is 5432
    )

    # Cria o cursor
    cursor = connection.cursor()
    
    # Executa a SQL query
    cursor.execute("SELECT version();")

    # Fetch o resultado
    record = cursor.fetchone()
    print(f"You are connected to - {record}\n")

except Exception as error:
    print(f"Error while connecting to PostgreSQL: {error}")

finally:
    # Closing database connection
    if connection:
        cursor.close()
        connection.close()
        print("PostgreSQL connection is closed")