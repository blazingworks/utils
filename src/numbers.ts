export function prettyNumber(number: number, useCommas = true): string {
    if (useCommas) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}
