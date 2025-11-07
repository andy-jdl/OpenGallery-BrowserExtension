import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM('<!doctype html><html><body></body></html>').window;
const DOMPurify = createDOMPurify(window);
(global as any).DOMPurify = DOMPurify;
(globalThis as any).DOMPurify = createDOMPurify(window);