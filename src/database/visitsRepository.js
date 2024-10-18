import * as SQLite from 'expo-sqlite';

export async function insertDate(data) {
    try {
        const db = await SQLite.openDatabaseAsync('myBase.db')
        db.runAsync(`
            INSERT INTO visits (date) VALUES(?) `,data)
    } catch (error) {
        return("Data ja cadastrada.")
    }
}

export async function getAllDate() {
    const db = await SQLite.openDatabaseAsync('myBase.db')
    const result = await db.getAllAsync('SELECT * FROM visits')
    return(result)
}