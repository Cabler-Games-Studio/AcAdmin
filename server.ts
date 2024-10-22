import { Application } from "https://deno.land/x/oak@v17.1.0/mod.ts";
import { ensureAuthenticated } from "./panel/middleware/auth.ts"; // Authentication middleware

const app = new Application();

// Basic security headers
app.use(async (ctx, next) => {
    ctx.response.headers.set("X-Content-Type-Options", "nosniff");
    await next();
});

// Secured admin route (ensureAuthenticated checks for valid login tokens)
app.use(ensureAuthenticated);

app.use((ctx) => {
    ctx.response.body = { message: "Admin Panel API", status: "active" };
});

await app.listen({ port: 8000 });
