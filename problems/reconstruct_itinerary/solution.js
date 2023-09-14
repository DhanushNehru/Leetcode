/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    // Create a map to represent the graph of airports and their destinations.
    const graph = new Map();

    // Sort the tickets in reverse order to ensure we process destinations in reverse lexicographical order.
    for (const [departure, arrival] of tickets.sort().reverse()) {
        // If the departure airport is not in the graph, create an empty array for it.
        if (!graph.has(departure)) {
            graph.set(departure, []);
        }
        // Add the arrival airport to the list of destinations for the departure airport.
        graph.get(departure).push(arrival);
    }

    // Initialize a stack with the starting airport "JFK".
    const stack = ["JFK"];
    // Initialize an array to store the new itinerary.
    const newItinerary = [];

    // Process the airports using a stack until it's empty.
    while (stack.length > 0) {
        // Get the current airport from the top of the stack.
        const currentAirport = stack[stack.length - 1];

        // If there are destinations from the current airport, push one onto the stack.
        if (graph.has(currentAirport) && graph.get(currentAirport).length > 0) {
            stack.push(graph.get(currentAirport).pop());
        } else {
            // If there are no destinations or all destinations are visited, add the airport to the new itinerary.
            newItinerary.push(stack.pop());
        }
    }

    // Reverse the new itinerary to get the correct order.
    return newItinerary.reverse();    
};
