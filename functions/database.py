import pyodbc 

agrocity = 'AgroHost'
dbaagro = 'Agrocidade'
user = 'administrator'
password = '1234'

connection_string = (
    f'DRIVER={{ODBC Driver 17 for SQL Server}};'
    f'SERVER={agrocity};'
    f'dbaagro={dbaagro};'
    f'Login={user};'
    f'Password={password};'
)

"""
Example of connection to bring query results:

conn = pyodbc.connect(connection_string) -- Opens the connection

cursor = conn.cursor() -- Creates the cursor to send Query

cursor.execute(SELECT * FROM TABLE_NAME) -- Executes your query

rows = cursor.fetchall() -- fetch all data received from the query

for row in rows:  -- pick data from each row 
    print(row)

conn.close()
