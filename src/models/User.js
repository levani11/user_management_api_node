import { db } from '../config/database.js';

export class User {

    static getAll = async () => {
        const [rows] = await db.connection.query("SELECT * FROM users");
        return rows;
    }

    static getById = async (id) => {
        const [rows] = await db.connection.query("SELECT * FROM users WHERE id = ?", [id]);
        return rows[0] || null;
    }

    static create = async (userData) => {
        const [result] = await db.connection.query(
            `INSERT INTO users (
                imageFile, 
                firstName, 
                lastName, 
                privateNumber, 
                phone, 
                address, 
                legalAddressCountry, 
                legalAddressCity, 
                legalAddressStreet, 
                factualAddressCountry, 
                factualAddressCity, 
                factualAddressStreet, 
                gender
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                userData.imageFile,
                userData.firstName,
                userData.lastName,
                userData.privateNumber,
                userData.phone,
                userData.address,
                userData.legalAddressCountry,
                userData.legalAddressCity,
                userData.legalAddressStreet,
                userData.factualAddressCountry,
                userData.factualAddressCity,
                userData.factualAddressStreet,
                userData.gender,
            ]
        );
        return { id: result.insertId, ...userData };
    }

    static update = async (id, userData) => {
        const [result] = await db.connection.query(
            `UPDATE users SET 
                imageFile = ?, 
                firstName = ?, 
                lastName = ?, 
                privateNumber = ?, 
                phone = ?, 
                address = ?, 
                legalAddressCountry = ?, 
                legalAddressCity = ?, 
                legalAddressStreet = ?, 
                factualAddressCountry = ?, 
                factualAddressCity = ?, 
                factualAddressStreet = ?, 
                gender = ?
            WHERE id = ?`,
            [
                userData.imageFile,
                userData.firstName,
                userData.lastName,
                userData.privateNumber,
                userData.phone,
                userData.address,
                userData.legalAddressCountry,
                userData.legalAddressCity,
                userData.legalAddressStreet,
                userData.factualAddressCountry,
                userData.factualAddressCity,
                userData.factualAddressStreet,
                userData.gender,
                id
            ]
        );
        return result.affectedRows > 0;
    }

    static delete = async (id) => {
        const [result] = await db.connection.query("DELETE FROM users WHERE id = ?", [id]);
        return result.affectedRows > 0;
    }
}