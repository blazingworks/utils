import { setCapitilization, uppercase, lowercase, capitalizeFirstLetter, construct, surround } from "../src/text";

test(`Capitilization`, () => {
    // setCapitilization
    expect(setCapitilization("Hello World", "allCaps")).toBe("HELLO WORLD");
    expect(setCapitilization("Hello World", "firstLetterCaps")).toBe("Hello world");
    expect(setCapitilization("Hello World", "allLowercase")).toBe("hello world");

    // Direct functions
    expect(uppercase("Hello World")).toBe("HELLO WORLD");
    expect(capitalizeFirstLetter("Hello World")).toBe("Hello world");
    expect(lowercase("Hello World")).toBe("hello world");
});

test(`String construction`, () => {
    expect(construct(["Hello", "World"])).toBe("HelloWorld");
    expect(construct(["Hello", "World"], " ")).toBe("Hello World");
    expect(construct(["Hello", "World"], "-")).toBe("Hello-World");
    expect(construct([lowercase("File"), "png"], ".")).toBe("file.png");
});

test(`Surrounding`, () => {
    expect(surround("Hello World", "spaces")).toBe(" Hello World ");
    expect(surround("Hello World", "brackets")).toBe("[Hello World]");
    expect(surround("Hello World", "braces")).toBe("{Hello World}");
    expect(surround("Hello World", "parentheses")).toBe("(Hello World)");
    expect(surround("Hello World", "colons")).toBe(":Hello World:");
    expect(surround("Hello World", "comparisonsOutwards")).toBe("<Hello World>");
    expect(surround("Hello World", "comparisonsInwards")).toBe(">Hello World<");
    expect(surround("Hello World", "quotes")).toBe('"Hello World"');
    expect(surround("Hello World", "singleQuotes")).toBe("'Hello World'");
    expect(surround("Hello World", "guillementsOutwards")).toBe("«Hello World»");
    expect(surround("Hello World", "guillementsInwards")).toBe("»Hello World«");
    expect(surround("Hello World", "fancyQuotes")).toBe("“Hello World”");
    expect(surround("Hello World", "fancyQuotesBottomTop")).toBe("„Hello World“");
    expect(surround("Hello World", "none")).toBe("Hello World");

    expect(surround("Hello World", "🌐")).toBe("🌐Hello World🌐");
    expect(surround("Hello World", ["🌍"])).toBe("🌍Hello World🌍");
    expect(surround("Hello World", ["👋 ", " 🌍"])).toBe("👋 Hello World 🌍");
});
