// gtag.js is loaded in layout.tsx; absent until it loads (or if blocked).
interface Window {
  gtag?: (...args: unknown[]) => void;
}
