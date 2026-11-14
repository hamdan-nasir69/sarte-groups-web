
import { chromium } from "playwright";
import handler from "serve-handler";
import { createServer } from "node:http";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const buildDir = path.resolve("build");

// All eight routes from your App.js
const routes = [
  "/",
  "/construction",
  "/marketing",
  "/software",
  "/about",
  "/contact",
  "/ethics",
  "/values",
];

// Serve your production React build locally.
const server = createServer((req, res) =>
  handler(req, res, {
    public: buildDir,
    rewrites: [
      { source: "**", destination: "/index.html" },
    ],
  })
);

await new Promise((resolve) =>
  server.listen(0, "127.0.0.1", resolve)
);

const port = server.address().port;
let browser;

try {
  browser = await chromium.launch({
    headless: true,
  });

  const snapshots = [];

  for (const route of routes) {
    const page = await browser.newPage();

    console.log(`Rendering: ${route}`);

    await page.goto(
      `http://127.0.0.1:${port}${route}`,
      { waitUntil: "load", timeout: 30000 }
    );

    // Wait until React has rendered meaningful text.
    await page.waitForFunction(
      () => {
        const root = document.querySelector("#root");
        return (root?.innerText || "").trim().length > 60;
      },
      null,
      { timeout: 20000 }
    );

    const html = await page.content();
    const text = await page.locator("#root").innerText();

    snapshots.push({ route, html });

    console.log(
      `Captured ${route}: ${text.trim().length} characters`
    );

    await page.close();
  }

  // Save snapshots after capturing every route.
  for (const { route, html } of snapshots) {
    const filePath =
      route === "/"
        ? path.join(buildDir, "index.html")
        : path.join(
            buildDir,
            route.slice(1),
            "index.html"
          );

    await mkdir(path.dirname(filePath), {
      recursive: true,
    });

    await writeFile(filePath, html, "utf8");

    console.log(`Saved: ${filePath}`);
  }

  console.log("All pages pre-rendered successfully!");

} finally {
  await browser?.close();

  await new Promise((resolve) =>
    server.close(resolve)
  );
}
