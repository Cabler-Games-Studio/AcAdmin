import { serve } from "https://deno.land/std/http/server.ts";

const port = 8080;
console.log(`AcAdmin server is running on port ${port}`);

serve((req) => {
    const url = new URL(req.url);
    if (url.pathname === "/api/stats") {
        // Example endpoint to get server stats
        return new Response(JSON.stringify({
            playersOnline: 10, 
            maxPlayers: 32
        }), {
            headers: { "Content-Type": "application/json" },
        });
    } else {
        return new Response("Not Found", { status: 404 });
    }
}, { port });
