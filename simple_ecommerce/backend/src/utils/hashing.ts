import argon2 from "argon2";

export async function hashing(text: string): Promise<string> {
  return argon2.hash(text).catch((err) => {
    throw new Error(`Hashing failed: ${(err as Error).message}`);
  });
}

export async function verifyHash(
  plainText: string,
  hashed: string
): Promise<boolean> {
  return argon2.verify(hashed, plainText).catch((err) => {
    console.log(hashed, plainText);
    console.error(err);
    throw new Error(`Hash verification failed: ${(err as Error).message}`);
  });
}
