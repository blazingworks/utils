// Capitilization
export function setCapitilization(text: string, casing: "allCaps" | "firstLetterCaps" | "allLowercase"): string {
    if (casing === "allCaps") {
        return text.toUpperCase();
    } else if (casing === "firstLetterCaps") {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    } else {
        return text.toLowerCase();
    }
}

export function uppercase(text: string): string {
    return setCapitilization(text, "allCaps");
}

export function lowercase(text: string): string {
    return setCapitilization(text, "allLowercase");
}

export function capitalizeFirstLetter(text: string): string {
    return setCapitilization(text, "firstLetterCaps");
}

// String construction
export function construct(strings: string[], inbetween = "") {
    return strings.join(inbetween);
}

// Surrounding
export type SurroundingCharacters =
    | "spaces"
    | "brackets"
    | "braces"
    | "parentheses"
    | "colons"
    | "comparisonsOutwards"
    | "comparisonsInwards"
    | "quotes"
    | "singleQuotes"
    | "guillementsOutwards"
    | "guillementsInwards"
    | "fancyQuotes"
    | "fancyQuotesBottomTop"
    | "none";

export function surround(text: string, surrounding: SurroundingCharacters | string | [string] | [string, string]): string {
    if (Array.isArray(surrounding)) {
        if (surrounding.length === 1) {
            return surrounding[0] + text + surrounding[0];
        } else {
            return surrounding[0] + text + surrounding[1];
        }
    } else {
        switch (surrounding) {
            case "spaces":
                return construct([" ", text, " "]);
            case "brackets":
                return construct(["[", text, "]"]);
            case "braces":
                return construct(["{", text, "}"]);
            case "parentheses":
                return construct(["(", text, ")"]);
            case "colons":
                return construct([":", text, ":"]);
            case "comparisonsOutwards":
                return construct(["<", text, ">"]);
            case "comparisonsInwards":
                return construct([">", text, "<"]);
            case "quotes":
                return construct(['"', text, '"']);
            case "singleQuotes":
                return construct(["'", text, "'"]);
            case "guillementsOutwards":
                return construct(["«", text, "»"]);
            case "guillementsInwards":
                return construct(["»", text, "«"]);
            case "fancyQuotes":
                return construct(["“", text, "”"]);
            case "fancyQuotesBottomTop":
                return construct(["„", text, "“"]);
            case "none":
                return text;
            default:
                return construct([surrounding, text, surrounding]);
        }
    }
}

// Multi Replace
export function multiReplace(text: string, replacements: [string, string][] | { [key: string]: string }, replaceAll = true): string {
    if (Array.isArray(replacements)) {
        for (const replacement of replacements) {
            if (replaceAll) {
                text = text.replaceAll(replacement[0], replacement[1]);
            } else {
                text = text.replace(replacement[0], replacement[1]);
            }
        }
    } else {
        for (const key in replacements) {
            if (replaceAll) {
                text = text.replaceAll(key, replacements[key]);
            } else {
                text = text.replace(key, replacements[key]);
            }
        }
    }
    return text;
}
