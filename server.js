import express from "express";

const app = express();
app.listen(3000, () => {
    console.log("Escutando na porta 3000...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Hello World!");
}); 