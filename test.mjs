import sql from "mssql";

const sqlConfig = {
  server: "localhost",
  user: "divy",
  password: "xxx",
  database: "master",
  options: {
    trustServerCertificate: true,
  },
};

const pool = await sql.connect(sqlConfig);
const result = await pool.request().query(`SELECT * FROM sys.databases`);

console.log(result.recordset);

