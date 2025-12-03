import mysql from "mysql2"
// const mysql = require("mysql2")

const db = mysql.createConnection({
  port: "localhost",
  user:"root",
  password: "wakeup",
  database: "data"
})

async function insert(name,cont,email,sugg) {
  await db.query(`INSERT INTO feedback (name, contact, email, suggestion) VALUES (${name},${cont},${email},${sugg})`),(error)=>{
    alert(error)
  };
  }

async function data() {
  
  await document.querySelector("#name").addEventListener("input", (e)=>{
    const name = e.target.value()
  })
  await document.querySelector("#contact").addEventListener("input", (e)=>{
    const contact = e.target.value()
  })
  await document.querySelector("#email").addEventListener("input", (e)=>{
    const email = e.target.value()
  })
  await document.querySelector("#suggestion").addEventListener("input", (e)=>{
    const suggestion = e.target.value()
  })

  await insert(name,contact,email,suggestion)
  // alert("Thanks to Submiting")
}

document.querySelector("#submit").addEventListener("submit", ()=>{
  data()
  console.log("Submitted");
  
})