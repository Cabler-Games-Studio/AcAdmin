import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { serveStatic } from "https://deno.land/x/oak_static/mod.ts"; // Correct import for static files

const app = new Application();
const router = new Router();

// Serve static files from the "nui" directory
app.use(serveStatic("nui", { index: "index.html" }));

// Example route to serve the panel at "/"
router.get("/", async (context) => {
  context.response.body = await Deno.readTextFile('./nui/index.html');
});

app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
console.log("Server running on http://localhost:8090");
await app.listen({ port: 8090 });
