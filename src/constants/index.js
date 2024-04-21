export const carModels = [
    {
        model: "Tesla CyberTruck",
        brand: "Tesla",
        pricePerDay: 199,
        color: "Gray",
        type: "SUV",
        transmission: "Automatic/Manual",
        image: require("../assets/TeslaCybertruck.png"),
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        seat: 5, 
        engineCC: "null", 
    },
    {
        model: "Honda Vezel",
        brand: "Honda",
        pricePerDay: 89,
        color: "White",
        type: ["Compact", "SUV"], 
        transmission: "Automatic/Manual",
        image: require("../assets/HondaVezel.png"),
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        seat: 5, 
        engineCC: 1498,
    },
    {
        model: "Honda Fit",
        brand: "Honda",
        pricePerDay: 69,
        color: "White",
        type: "Hatchback",
        transmission: "Automatic/Manual",
        image: require("../assets/HondaFit.png"),
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        seat: 5, 
        engineCC: 1496,
    },
    {
        model: "Toyota Aqua",
        brand: "Toyota",
        pricePerDay: 69,
        color: "White",
        type: "Hatchback",
        transmission: "Automatic/Manual",
        image: require("../assets/ToyotaAqua.png"),
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        seat: 5, 
        engineCC: 1496,
    },
    {
        model: "Tesla Model S",
        brand: "Tesla",
        pricePerDay: 159,
        color: "Red",
        type: "Executive",
        transmission: "Automatic/Manual",
        image: require("../assets/TeslaModelS.png"),
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        seat: 5, 
        engineCC: "null"
    },
    {
        model: "Ferrari 458",
        brand: "Ferrari",
        pricePerDay: 299,
        color: "Red",
        type: "Sports",
        transmission: "Manual",
        image: require("../assets/Ferrari458.png"),
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        seat: 2, 
        engineCC: 4497
    },
    {
        model: "Ford Mustang",
        brand: "Ford",
        pricePerDay: 159,
        color: "Blue",
        type: "Sports",
        transmission: "Manual",
        image: require("../assets/FordMustang.png"),
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        seat: 4, 
        engineCC: 4999
    },
];

export default {carModels};