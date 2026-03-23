import mysql from  'mysql';
import util from 'util';

let conn = mysql.createConnection({
    host: "localhost",
    password: "",
    user: "root",
    database: "auth" 
});

const exe = util.promisify(conn.query).bind(conn);

export default exe;