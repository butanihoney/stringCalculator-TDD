export function add(numbers) {
    // Step 1: Handle an empty string
    if (numbers === "") {
        return 0;
    }

    // Step 2: Split the string by commas
    const numArray = numbers.split(",");

    // Step 3: Convert the strings to numbers and calculate the sum
    const sum = numArray.reduce((acc, current) => {
        return acc + parseInt(current, 10);  // parseInt to convert string to integer
    }, 0);

    return sum;
}