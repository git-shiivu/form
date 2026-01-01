const mysql = require('mysql2');
require("dotenv").config()

async function mysqlInsert(name,email,sugg) {
  // Create a connection
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });

  try {
    // Execute a query using async/await
    await connection.execute("INSERT INTO feedbacks (Name,Email,Suggestion) VALUES (?,?,?)", [name, email, sugg]);
    console.log("Done");
  } catch (err) {
    console.error(err);
  } finally {
    // Close connection
    await connection.end();
  }
}

module.exports = mysqlInsert;