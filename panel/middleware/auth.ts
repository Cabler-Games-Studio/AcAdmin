import { Context } from "https://deno.land/x/oak@v17.1.0/mod.ts";
import { verifyToken } from "./authService.ts";

export const ensureAuthenticated = async (ctx: Context, next: () => Promise<void>) => {
  const token = ctx.request.headers.get("Authorization");

  if (!token) {
    ctx.response.status = 401;
    ctx.response.body = { message: "Unauthorized access" };
    return;
  }

  try {
    const isValid = await verifyToken(token);  // Validate token
    if (!isValid) {
      ctx.response.status = 403;
      ctx.response.body = { message: "Forbidden" };
      return;
    }
    await next();
  } catch (_error) {
    ctx.response.status = 500;
    ctx.response.body = { message: "Server error" };
  }
};
