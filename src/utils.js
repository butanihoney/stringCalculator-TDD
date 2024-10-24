export function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    const newString = numbers
        .split(/[\n,]/)
        .map((num) => num.trim())
        .filter((num) => num !== "" && !isNaN(num)) // Filter out invalid numbers
        .map(Number);

    const sum = newString.reduce((acc, curr) => acc + curr, 0);

    return sum;
}