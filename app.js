const express = require("express");
const app = express();
const path = require("path");

// Motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Procesar formularios
app.use(express.urlencoded({ extended: true }));

// Rutas
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

// Error 404
app.use((req, res) => {
  res.status(404).render("404", { title: "Página no encontrada" });
});

// Servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));