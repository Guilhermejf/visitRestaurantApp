import * as SQLite from 'expo-sqlite';


export async function insertDate(data) {
    const db = await SQLite.openDatabaseAsync('myBase.db')
    try {
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

export async function getMonth(year,month) {
    const db = await SQLite.openDatabaseAsync('myBase.db')
    const result = await db.getAllAsync('SELECT * FROM visits WHERE date like ?',`${year}-${month}%`)
    return(result)
}

export async function getDateSelected(date) {
    const db = await SQLite.openDatabaseAsync('myBase.db')
    const result = await db.getFirstAsync('SELECT * FROM visits WHERE date = ?',date)
    if(result !== null){
        return(result.id)
    }else{
        return(false)
    }
}

export async function delDate(id) {
    const db = await SQLite.openDatabaseAsync('myBase.db')
    db.runAsync("DELETE FROM visits WHERE id = ?",id)
}