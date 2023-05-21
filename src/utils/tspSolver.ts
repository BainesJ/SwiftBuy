export type Coordinate = [number, number];

function calculateDistance(coord1: Coordinate, coord2: Coordinate): number {
    const [x1, y1] = coord1;
    const [x2, y2] = coord2;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function calculateTotalDistance(route: Coordinate[]): number {
    let totalDistance = 0;
    for (let i = 0; i < route.length - 1; i++) {
        totalDistance += calculateDistance(route[i], route[i + 1]);
    }
    return totalDistance;
}

function swap(route: Coordinate[], i: number, j: number): void {
    [route[i], route[j]] = [route[j], route[i]];
}

function removeDuplicateCoordinates(coordinates: Coordinate[]): Coordinate[] {
    const uniqueCoordinates: Coordinate[] = [];
    const visited: Set<string> = new Set();

    for (const coordinate of coordinates) {
        const coordinateKey = coordinate.join(',');
        if (!visited.has(coordinateKey)) {
            visited.add(coordinateKey);
            uniqueCoordinates.push(coordinate);
        }
    }

    return uniqueCoordinates;
}

function twoOpt(route: Coordinate[]): Coordinate[] {
    route.push([0,0])
    const n = route.length;
    let bestRoute = [...route];
    let improve = true;

    while (improve) {
        improve = false;

        for (let i = 1; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                const newRoute = [...bestRoute];
                swap(newRoute, i, j);
                const currentDistance = calculateTotalDistance(bestRoute);
                const newDistance = calculateTotalDistance(newRoute);

                if (newDistance < currentDistance && newRoute[n-1] == [0,0]) {
                    bestRoute = newRoute;
                    improve = true;
                }
            }
        }
    }

    return bestRoute;
}

export function createOptimalRoute(coordinates: Coordinate[]): Coordinate[] {
    const uniqueCoordinates = removeDuplicateCoordinates(coordinates);
    uniqueCoordinates.unshift([0,0]);
    const initialRoute = [...uniqueCoordinates];
    return twoOpt(initialRoute);
}