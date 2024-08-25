document.addEventListener("DOMContentLoaded", () => {
  const deviceTypeSelect = document.getElementById("device-type");
  const customDeviceTypeDiv = document.getElementById("custom-device-type");
  const sensorsContainer = document.getElementById("sensors-container");
  const addSensorButton = document.getElementById("add-sensor");

  let sensorCount = 0;

  // Afficher ou masquer le champ personnalisé en fonction du type d'appareil
  deviceTypeSelect.addEventListener("change", (event) => {
    const value = event.target.value;
    if (value === "other") {
      customDeviceTypeDiv.style.display = "block";
    } else {
      customDeviceTypeDiv.style.display = "none";
    }
  });

  // Ajouter un capteur
  addSensorButton.addEventListener("click", () => {
    sensorCount++;
    const sensorDiv = document.createElement("div");
    sensorDiv.innerHTML = `
        <h2>Capteur ${sensorCount}</h2>
        <label for="sensor-type-${sensorCount}">Type de capteur :</label>
        <select id="sensor-type-${sensorCount}" class="sensor-type" required>
          <option value="">Choisissez un capteur</option>
          <option value="dht22">DHT22 (température et humidité)</option>
          <option value="bmp280">BMP280 (pression, température, humidité)</option>
          <option value="custom">Autre</option>
        </select>
  
        <div id="custom-sensor-${sensorCount}" class="custom-field" style="display: none">
          <label for="custom-sensor-name-${sensorCount}">Nom du capteur personnalisé :</label>
          <input
            type="text"
            id="custom-sensor-name-${sensorCount}"
            name="custom-sensor-name-${sensorCount}"
            placeholder="Nom du capteur"
          />
        </div>
  
        <label for="sensor-interface-${sensorCount}">Interface de connexion :</label>
        <select id="sensor-interface-${sensorCount}" name="sensor-interface-${sensorCount}" required>
          <option value="">Choisissez une interface</option>
          <option value="i2c">I2C</option>
          <option value="spi">SPI</option>
          <option value="gpio">GPIO</option>
        </select>
  
        <label for="sensor-address-${sensorCount}">Adresse du capteur :</label>
        <input
          type="text"
          id="sensor-address-${sensorCount}"
          name="sensor-address-${sensorCount}"
          placeholder="Adresse I2C ou numéro GPIO"
        />
      `;

    // Afficher ou masquer le champ personnalisé du capteur
    sensorDiv
      .querySelector(`#sensor-type-${sensorCount}`)
      .addEventListener("change", (event) => {
        const value = event.target.value;
        const customSensorDiv = document.getElementById(
          `custom-sensor-${sensorCount}`
        );
        if (value === "custom") {
          customSensorDiv.style.display = "block";
        } else {
          customSensorDiv.style.display = "none";
        }
      });

    sensorsContainer.appendChild(sensorDiv);
  });
});
