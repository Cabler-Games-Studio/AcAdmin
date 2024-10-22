import { decode as _decode, verify } from "https://deno.land/x/djwt@v3.0.2/mod.ts";

const secret = Deno.env.get("SECRET_KEY") || "mySecretKey"; // Use an env var for security

export async function verifyToken(token: string) {
  try {
    const payload = await verify(token, secret, "HS256");
    return payload ? true : false;
  } catch (_error) {
    return false;
  }
}
