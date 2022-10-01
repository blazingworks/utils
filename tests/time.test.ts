import { seconds, minutes, hours, days, weeks } from "../src/time";

test(`Time Millisecond Conversions`, () => {
    // To MS
    expect(seconds(1)).toBe(1000);
    expect(minutes(1)).toBe(60000);
    expect(hours(1)).toBe(3600000);
    expect(days(1)).toBe(86400000);
    expect(weeks(1)).toBe(604800000);

    // From MS
    expect(seconds(1000, false)).toBe(1);
    expect(minutes(60000, false)).toBe(1);
    expect(hours(3600000, false)).toBe(1);
    expect(days(86400000, false)).toBe(1);
    expect(weeks(604800000, false)).toBe(1);

    // "Random" numbers
    expect(seconds(75)).toBe(75000);
    expect(minutes(485)).toBe(29100000);
    expect(hours(75)).toBe(270000000);
    expect(days(485)).toBe(41904000000);
    expect(weeks(13)).toBe(7862400000);
});
