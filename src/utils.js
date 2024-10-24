export function add(numbers) {

    if (numbers === "") {
        return 0;
    }

    let delimiter;
    if (numbers.startsWith("//")) {
        // Extract custom delimiter
        const delimiterEndIndex = numbers.indexOf("\n");
        delimiter = numbers.substring(2, delimiterEndIndex).trim(); // Get the custom delimiter
        numbers = numbers.substring(delimiterEndIndex + 1); // Remove the delimiter line from the input
    }

    // Create a regex pattern for splitting the numbers
    const regex = new RegExp(`[${delimiter},\n]`);

    const newString = numbers.split(regex)
        .map(num => num.trim())
        .filter(num => num !== '' && !isNaN(num)) // Filter out invalid numbers
        .map(Number);


    // Check for negative numbers
    const negatives = newString.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    const sum = newString.reduce((acc, curr) => acc + curr, 0);

    return sum;
}