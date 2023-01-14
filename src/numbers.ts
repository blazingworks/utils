export function prettyNumber(number: number, useCommas = true): string {
    if (useCommas) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}

export function ordinal(number: number, ordinals: [string, string, string, string] = ["st", "nd", "rd", "th"]): string {
    if (number < 0) number *= -1;
    if (number % 1 !== 0) number = Math.floor(number);
    return ordinals.slice(0, 3)[((((number + 90) % 100) - 10) % 10) - 1] || ordinals[3];
}
