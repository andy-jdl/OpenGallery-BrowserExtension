import DOMPurify from "dompurify";

export function sanitizeText(input: string): string {
    if (!input) return "";
    return DOMPurify.sanitize(input,
        {
            ALLOWED_TAGS: ["em", "strong", "i", "b", "u", "br"],
            ALLOWED_ATTR: []
        }
    );
}

export function sanitizeURL(input: string): string {
    if (!input) return "";

    const trimmed = input.trim();

    if (/^https:\/\//i.test(trimmed)) {
        return trimmed;
    }

    if (/^data:image\/[a-z]+;base64,[A-Za-z0-9+/=]+$/i.test(trimmed)) {
        return trimmed;
    }

    return "";
}