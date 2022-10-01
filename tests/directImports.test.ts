import { text, numbers, time } from "../src";

test(`Time Millisecond Conversions`, () => {
    // Text
    expect(text.setCapitilization("Hello World", "allCaps")).toBe("HELLO WORLD");
    expect(text.surround("Hello World", " :) ")).toBe(" :) Hello World :) ");

    // Numbers
    expect(numbers.prettyNumber(78123)).toBe("78,123");

    // Time
    expect(time.seconds(1)).toBe(1000);
    expect(time.minutes(7.3)).toBe(438000);
});
