
  console.log(tellimus.orderNumber, tellimus.clientName)
  console.log("")
  for (let i = 0; i <= tellimus.rows.length-1; i++) {
      console.log("Nimi:", tellimus.rows[i]["name"]);
      console.log("Hind:", tellimus.rows[i]["price"]);
      console.log("kogus", tellimus.rows[i]["amount"]);
      console.log("");
  }
  console.log("Kogu summa")
  let o = 0
  for (let a of tellimus.rows) {
      o += (a.price * a.amount);
  }
