import { describe, it, expect } from 'vitest';
import { sanitizeText, sanitizeURL } from './sanitizeText';

describe("sanitizeText", () => {
  it("removes script tags", () => {
    const dirty = 'Hello <script>alert("XSS")</script> world';
    const clean = sanitizeText(dirty);
    expect(clean).not.toContain("<script>");
    expect(clean).toBe("Hello  world");
  });

  it("keeps allowed tags", () => {
    const dirty = 'This is <em>emphasized</em> text';
    const clean = sanitizeText(dirty);
    expect(clean).toContain("<em>");
  });

  it("strips disallowed tags but keeps text", () => {
    const dirty = 'Click <iframe src="hack.com"></iframe> here';
    const clean = sanitizeText(dirty);
    expect(clean).toBe("Click  here");
  });

  it("removes attributes", () => {
    const dirty = '<b onclick="alert(1)">bold</b>';
    const clean = sanitizeText(dirty);
    expect(clean).toBe("<b>bold</b>");
  });
});

describe("sanitizeURL", () => {
  it("allows https and data but not http URLs", () => {
    expect(sanitizeURL("http://example.com")).toBe("");
    expect(sanitizeURL("https://example.com")).toBe("https://example.com");
    expect(sanitizeURL("data:image/png;base64,abc123")).toBe("data:image/png;base64,abc123");
  });
});
