import { prettyNumber } from "../src/numbers";

test(`prettyNumber`, () => {
    // Numbers with one comma
    expect(prettyNumber(78123)).toBe("78,123");
    expect(prettyNumber(78123, false)).toBe("78.123");

    // Numbers with no commas
    expect(prettyNumber(17)).toBe("17");
    expect(prettyNumber(17, false)).toBe("17");

    // Negative numbers
    expect(prettyNumber(-13)).toBe("-13");
    expect(prettyNumber(-138534)).toBe("-138,534");
    expect(prettyNumber(-138534, false)).toBe("-138.534");

    // Numbers with multiple commas
    expect(prettyNumber(1234567890)).toBe("1,234,567,890");
    expect(prettyNumber(1234567890, false)).toBe("1.234.567.890");
});
