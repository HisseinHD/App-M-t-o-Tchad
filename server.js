const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Active CORS pour toutes les routes
app.use(cors());

// Liste des villes tchadiennes
const villes = {
  ndjamena: { name: "N'Djamena", lat: 12.1348, lon: 15.0557 },
  moundou: { name: "Moundou", lat: 8.5667, lon: 16.0833 },
  sarh: { name: "Sarh", lat: 9.15, lon: 18.3833 },
  abeche: { name: "Abéché", lat: 13.847, lon: 20.8461 },
  mongo: { name: "Mongo", lat: 12.1844, lon: 18.6939 },
  amdjarras: { name: "Amdjarras", lat: 13.925, lon: 21.436 },
  mandalia: { name: "Mandalia", lat: 11.35, lon: 17.566 },
  biltine: { name: "Biltine", lat: 14.533, lon: 20.917 },
  bol: { name: "Bol", lat: 12.36, lon: 16.4 },
  amtiman: { name: "Am Timan", lat: 11.0, lon: 20.3 },
  koumra: { name: "Koumra", lat: 8.963, lon: 16.563 },
  ouara: { name: "Ouara", lat: 13.5, lon: 21.0 },
  gounougaya: { name: "Gounou-Gaya", lat: 8.95, lon: 17.416 },


    mangalmé: { name: "Mangalmé", lat: 11.9, lon: 21.7 },
  massakory: { name: "Massakory", lat: 13.1, lon: 15.7 },
  djarab: { name: "Djarab", lat: 12.5, lon: 20.0 }
};



// Route test
app.get("/", (req, res) => {
  res.send("API météo Tchad en marche");
});

// Route météo pour une ville
app.get("/api/weather", async (req, res) => {
  const cityKey = req.query.city || "ndjamena";
  const ville = villes[cityKey];

  if (!ville) return res.status(400).json({ erreur: "Ville inconnue" });

  try {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: ville.lat,
        longitude: ville.lon,
        daily:
          "temperature_2m_min,temperature_2m_max,weathercode,precipitation_sum",
        timezone: "auto",
      },
    });

    res.json({ ville: ville.name, previsions: response.data.daily });
  } catch (err) {
    console.error(`Erreur API pour ${ville.name}:`, err.message);
    res.status(500).json({ erreur: "Impossible de récupérer la météo" });
  }
});

// Route météo pour toutes les villes
app.get("/api/weather-all", async (req, res) => {
  const result = {};

  for (const key in villes) {
    const ville = villes[key];
    try {
      const response = await axios.get(
        "https://api.open-meteo.com/v1/forecast",
        {
          params: {
            latitude: ville.lat,
            longitude: ville.lon,
            daily:
              "temperature_2m_min,temperature_2m_max,weathercode,precipitation_sum",
            timezone: "auto",
          },
        }
      );

      result[key] = { name: ville.name, previsions: response.data.daily };
    } catch (err) {
      console.error(`Erreur pour ${ville.name}: ${err.message}`);
      result[key] = {
        name: ville.name,
        previsions: null,
        erreur: "Impossible de récupérer la météo",
      };
    }
  }

  res.json(result);
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur météo lancé sur http://localhost:${PORT}`);
});
