import { prettyNumber, ordinal } from "../src/numbers";

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

test(`ordinal`, () => {
    // Normal Ordinals
    expect(ordinal(0)).toBe("th");
    expect(ordinal(1)).toBe("st");
    expect(ordinal(2)).toBe("nd");
    expect(ordinal(3)).toBe("rd");
    expect(ordinal(4)).toBe("th");
    expect(ordinal(5)).toBe("th");
    expect(ordinal(6)).toBe("th");
    expect(ordinal(7)).toBe("th");
    expect(ordinal(8)).toBe("th");
    expect(ordinal(9)).toBe("th");
    expect(ordinal(10)).toBe("th");
    expect(ordinal(11)).toBe("th");
    expect(ordinal(12)).toBe("th");
    expect(ordinal(13)).toBe("th");
    expect(ordinal(14)).toBe("th");
    expect(ordinal(15)).toBe("th");
    expect(ordinal(16)).toBe("th");
    expect(ordinal(17)).toBe("th");
    expect(ordinal(18)).toBe("th");
    expect(ordinal(19)).toBe("th");
    expect(ordinal(20)).toBe("th");
    expect(ordinal(21)).toBe("st");
    expect(ordinal(22)).toBe("nd");
    expect(ordinal(23)).toBe("rd");
    expect(ordinal(24)).toBe("th");
    expect(ordinal(25)).toBe("th");
    expect(ordinal(26)).toBe("th");
    expect(ordinal(27)).toBe("th");
    expect(ordinal(28)).toBe("th");
    expect(ordinal(29)).toBe("th");
    expect(ordinal(30)).toBe("th");
    expect(ordinal(31)).toBe("st");
    expect(ordinal(32)).toBe("nd");
    expect(ordinal(33)).toBe("rd");
    expect(ordinal(34)).toBe("th");

    // Custom Ordinals
    expect(ordinal(0, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(1, ["a", "ab", "abc", "abcd"])).toBe("a");
    expect(ordinal(2, ["a", "ab", "abc", "abcd"])).toBe("ab");
    expect(ordinal(3, ["a", "ab", "abc", "abcd"])).toBe("abc");
    expect(ordinal(4, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(5, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(6, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(7, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(8, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(9, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(10, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(11, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(12, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(13, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(14, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(15, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(16, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(17, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(18, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(19, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(20, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(21, ["a", "ab", "abc", "abcd"])).toBe("a");
    expect(ordinal(22, ["a", "ab", "abc", "abcd"])).toBe("ab");
    expect(ordinal(23, ["a", "ab", "abc", "abcd"])).toBe("abc");
    expect(ordinal(24, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(25, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(26, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(27, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(28, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(29, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(30, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(31, ["a", "ab", "abc", "abcd"])).toBe("a");
    expect(ordinal(32, ["a", "ab", "abc", "abcd"])).toBe("ab");
    expect(ordinal(33, ["a", "ab", "abc", "abcd"])).toBe("abc");
    expect(ordinal(34, ["a", "ab", "abc", "abcd"])).toBe("abcd");

    // Ordinals with negative numbers
    expect(ordinal(-1)).toBe("st");
    expect(ordinal(-2)).toBe("nd");
    expect(ordinal(-3)).toBe("rd");
    expect(ordinal(-4)).toBe("th");
    expect(ordinal(-5)).toBe("th");
    expect(ordinal(-6)).toBe("th");
    expect(ordinal(-7)).toBe("th");
    expect(ordinal(-8)).toBe("th");
    expect(ordinal(-9)).toBe("th");
    expect(ordinal(-10)).toBe("th");
    expect(ordinal(-11)).toBe("th");
    expect(ordinal(-12)).toBe("th");
    expect(ordinal(-13)).toBe("th");
    expect(ordinal(-14)).toBe("th");
    expect(ordinal(-15)).toBe("th");
    expect(ordinal(-16)).toBe("th");
    expect(ordinal(-17)).toBe("th");
    expect(ordinal(-18)).toBe("th");
    expect(ordinal(-19)).toBe("th");
    expect(ordinal(-20)).toBe("th");
    expect(ordinal(-21)).toBe("st");
    expect(ordinal(-22)).toBe("nd");
    expect(ordinal(-23)).toBe("rd");
    expect(ordinal(-24)).toBe("th");
    expect(ordinal(-25)).toBe("th");
    expect(ordinal(-26)).toBe("th");
    expect(ordinal(-27)).toBe("th");
    expect(ordinal(-28)).toBe("th");
    expect(ordinal(-29)).toBe("th");
    expect(ordinal(-30)).toBe("th");
    expect(ordinal(-31)).toBe("st");
    expect(ordinal(-32)).toBe("nd");
    expect(ordinal(-33)).toBe("rd");
    expect(ordinal(-34)).toBe("th");

    // Custom Ordinals with negative numbers
    expect(ordinal(-1, ["a", "ab", "abc", "abcd"])).toBe("a");
    expect(ordinal(-2, ["a", "ab", "abc", "abcd"])).toBe("ab");
    expect(ordinal(-3, ["a", "ab", "abc", "abcd"])).toBe("abc");
    expect(ordinal(-4, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-5, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-6, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-7, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-8, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-9, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-10, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-11, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-12, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-13, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-14, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-15, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-16, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-17, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-18, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-19, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-20, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-21, ["a", "ab", "abc", "abcd"])).toBe("a");
    expect(ordinal(-22, ["a", "ab", "abc", "abcd"])).toBe("ab");
    expect(ordinal(-23, ["a", "ab", "abc", "abcd"])).toBe("abc");
    expect(ordinal(-24, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-25, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-26, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-27, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-28, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-29, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-30, ["a", "ab", "abc", "abcd"])).toBe("abcd");
    expect(ordinal(-31, ["a", "ab", "abc", "abcd"])).toBe("a");
    expect(ordinal(-32, ["a", "ab", "abc", "abcd"])).toBe("ab");
    expect(ordinal(-33, ["a", "ab", "abc", "abcd"])).toBe("abc");
    expect(ordinal(-34, ["a", "ab", "abc", "abcd"])).toBe("abcd");

    // Ordinals with floats
    expect(ordinal(1.1)).toBe("st");
    expect(ordinal(2.2)).toBe("nd");
    expect(ordinal(3.3)).toBe("rd");
    expect(ordinal(4.4)).toBe("th");
    expect(ordinal(5.5)).toBe("th");
    expect(ordinal(6.6)).toBe("th");
    expect(ordinal(7.7)).toBe("th");
    expect(ordinal(8.8)).toBe("th");
    expect(ordinal(9.9)).toBe("th");
    expect(ordinal(10.1)).toBe("th");
    expect(ordinal(11.2)).toBe("th");
});
