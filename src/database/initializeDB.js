import * as SQLite from 'expo-sqlite';

export async function initializeDB(params) {
    const db = await SQLite.openDatabaseAsync("myBase.db")
    //DELETE FROM visits;
    try {
        const result = await db.execAsync(`
            CREATE TABLE IF NOT EXISTS visits (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date DATE NOT NULL UNIQUE
            );            `
        )   
        console.log(result)     
    } catch (error) {
        console.error(error)
    }
}


