import jwt from "jsonwebtoken";

type Unit =
  | "Years"
  | "Year"
  | "Yrs"
  | "Yr"
  | "Y"
  | "Weeks"
  | "Week"
  | "W"
  | "Days"
  | "Day"
  | "D"
  | "Hours"
  | "Hour"
  | "Hrs"
  | "Hr"
  | "H"
  | "Minutes"
  | "Minute"
  | "Mins"
  | "Min"
  | "M"
  | "Seconds"
  | "Second"
  | "Secs"
  | "Sec"
  | "s"
  | "Milliseconds"
  | "Millisecond"
  | "Msecs"
  | "Msec"
  | "Ms";

type UnitAnyCase = Unit | Uppercase<Unit> | Lowercase<Unit>;

export type JWT_EXPIRY_FORMAT =
  | `${number}`
  | `${number}${UnitAnyCase}`
  | `${number} ${UnitAnyCase}`;

interface JwtPayload {
  [key: string]: unknown;
}

/**
 * Generates a JWT token
 * @param {JwtPayload} data - Payload data to encode
 * @param {JWT_EXPIRY_FORMAT} expiry - Expiry time in JWT format
 * @returns {Promise<string>} - Signed JWT token
 */
export async function generateToken(
  data: JwtPayload,
  expiry: JWT_EXPIRY_FORMAT
): Promise<string> {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is required!");

  return jwt.sign({ data }, secret, { expiresIn: expiry });
}

/**
 * Generates access & refresh tokens for authentication
 * @param {JwtPayload} data - User data to encode
 * @returns {Promise<{ accessToken: string; refreshToken: string }>} - JWT tokens
 */
export async function generateLoginTokens(
  data: JwtPayload
): Promise<{ accessToken: string; refreshToken: string }> {
  const accessExpiry =
    (process.env.JWT_SHORT_EXPIRY as JWT_EXPIRY_FORMAT) || "1d";
  const refreshExpiry =
    (process.env.JWT_REFRESH_EXPIRY as JWT_EXPIRY_FORMAT) || "7d";

  if (!accessExpiry || !refreshExpiry)
    throw new Error("JWT_EXPIRY values are required!");

  return {
    accessToken: await generateToken(data, accessExpiry),
    refreshToken: await generateToken(data, refreshExpiry),
  };
}
