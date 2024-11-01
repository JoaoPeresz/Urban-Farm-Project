import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'Megatronus',
    user: 'agrocidade',
    password: '1234',
    database: 'agrocidade',
});

export default pool;