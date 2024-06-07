/**
 * Die Car Klasse repräsentiert ein generisches Auto.
 */

class Car {
    /**
     * Konstruktor für die Car Klasse.
     * @param {string} brand - Die Marke des Autos.
     * @param {string} model - Das Modell des Autos.
     * @param {number|null} [yearOfManufacture=null] - Das Baujahr des Autos.
     * @param {number} [seats=5] - Die Anzahl der Sitzplätze im Auto.
     */
    constructor(brand, model, yearOfManufacture = null, seats = 5) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.seats = seats;
    }

    /**
     * Gibt eine Beschreibung des Autos zurück.
     * @returns {string} - Eine mehrzeilige Beschreibung des Autos.
     */
    getDescription() {
        return `<b>${this.brand}</b> ${this.model}, ${this.yearOfManufacture}<br />Seats: ${this.seats}`;
    }
}

/**
 * Die ElectricCar Klasse repräsentiert ein Elektroauto und erbt von der Car Klasse.
 */
class ElectricCar extends Car {
    /**
     * Konstruktor für die ElectricCar Klasse.
     * @param {string} brand - Die Marke des Autos.
     * @param {string} model - Das Modell des Autos.
     * @param {number|null} [yearOfManufacture=null] - Das Baujahr des Autos.
     * @param {number} [seats=5] - Die Anzahl der Sitzplätze im Auto.
     * @param {number} batteryRange - Die Batteriereichweite des Autos in Kilometern.
     */
    constructor(brand, model, yearOfManufacture = null, seats = 5, batteryRange) {
        super(brand, model, yearOfManufacture, seats);
        this.batteryRange = batteryRange;
    }

    /**
     * Gibt eine Beschreibung des Elektroautos zurück, einschließlich der Batteriereichweite.
     * @returns {string} - Eine mehrzeilige Beschreibung des Elektroautos.
     */
    getDescription() {
        return `${super.getDescription()}<br />Battery range: ${this.batteryRange} km`;
    }
}

// Beispiel zur Veranschaulichung der Nutzung der Klassen
const car = new Car('Ford', 'Model T', 1925);
 document.write("<p>" + car.getDescription() + "</p><hr />");

const electricCar = new ElectricCar('Nissan', 'Leaf', 2019, 5, 270);
document.write("<p>" + electricCar.getDescription() + "</p><hr />");
