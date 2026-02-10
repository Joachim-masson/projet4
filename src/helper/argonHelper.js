import argon2 from "argon2";

const hashingOption = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
}

export const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOption)
}

export const verifyPassword = (plainPassword, hashPassword) => {
  return argon2.verify(hashPassword, plainPassword );
}