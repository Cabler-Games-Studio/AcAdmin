import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors as _oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { send } from "https://deno.land/x/oak@v7.7.0/mod.ts"; // Correct import for static files

const app = new Application();
const router = new Router();

// Serve static files from the "nui" directory
app.use(async (context, next) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/nui`,
    index: "index.html",
  });
  await next();
});

// Example route to serve the panel at "/"
router.get("/", async (context) => {
  context.response.body = await Deno.readTextFile('./nui/index.html');
});

app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
console.log("Server running on http://localhost:8090");
await app.listen({ port: 8090 });
