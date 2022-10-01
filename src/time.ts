export type timeUnits = "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "weeks";

export function seconds(time: number, toMs = true): number {
    if (toMs) {
        return time * 1000;
    } else {
        return time / 1000;
    }
}

export function minutes(time: number, toMs = true): number {
    if (toMs) {
        return time * 1000 * 60;
    } else {
        return time / 1000 / 60;
    }
}

export function hours(time: number, toMs = true): number {
    if (toMs) {
        return time * 1000 * 60 * 60;
    } else {
        return time / 1000 / 60 / 60;
    }
}

export function days(time: number, toMs = true): number {
    if (toMs) {
        return time * 1000 * 60 * 60 * 24;
    } else {
        return time / 1000 / 60 / 60 / 24;
    }
}

export function weeks(time: number, toMs = true): number {
    if (toMs) {
        return time * 1000 * 60 * 60 * 24 * 7;
    } else {
        return time / 1000 / 60 / 60 / 24 / 7;
    }
}
