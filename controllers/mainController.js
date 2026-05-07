const mainController = {
  home: (req, res) => {
    res.render("home", { title: "Inicio" });
  },

  about: (req, res) => {
    res.render("about", { title: "Acerca de" });
  },

  contact: (req, res) => {
    res.render("contact", { title: "Contacto" });
  },

  services: (req, res) => {
    res.render("services", { title: "Servicios" });
  },

  sendContact: (req, res) => {
    const { nombre, email, mensaje } = req.body;

    console.log("=== NUEVO MENSAJE ===");
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);
    console.log("=====================");

    res.send("Mensaje enviado correctamente");
  }
};

module.exports = mainController;