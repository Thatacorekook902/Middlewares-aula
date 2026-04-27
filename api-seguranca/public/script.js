document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

   const data = {
    nome: document.getElementById("nome").Value,
    cpf: document.getElementById("Cpf").value,
   };

   const res = await fetch("/cadastro", {
    method: "Post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(Data)
});
   
   const json = await res.json();
   alert(json.stringify(json));

});