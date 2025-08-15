import mysql from 'mysql2/promise';

class Database {
    static connection = null;

    constructor() {
        this.connection = mysql.createPool({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'users_management',
            waitForConnections: true,
            connectionLimit: 10
        });
    }
}

export const db = new Database();