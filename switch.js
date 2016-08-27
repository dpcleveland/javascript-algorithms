switch (prompt("What's the weather like?")) {
    case "rainy":
        console.log("Bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
        // intentionally did not include a break statement here to cause it to return the answers for both sunny and cloudy - "Dress lightly." and "Go outside."
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}
