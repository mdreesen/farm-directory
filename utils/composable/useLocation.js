export default function useLocation() {
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
        // Prompt user for permission to access their location
        navigator.geolocation.watchPosition(
            // Success callback function
            function (position) {
                // Get the user's latitude and longitude coordinates
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                // Update the map with the user's new location
                console.log(`Latitude: ${lat}, longitude: ${lng}`);
            },
            // Error callback function
            function (error) {
                // Handle errors, e.g. user denied location sharing permissions
                console.error("Error getting user location:", error);
            }
        );
    } else {
        // Geolocation is not supported by the browser
        console.error("Geolocation is not supported by this browser.");
    }
}