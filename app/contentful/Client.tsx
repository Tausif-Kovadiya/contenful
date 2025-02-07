import { createClient } from "contentful";

const getEnvVariable = (name: string): string => {
  const val = process.env[name];
  if (!val) {
    throw new Error(`missing env variable ${name}`);
  }
  return val;
};

export const client = createClient({
  accessToken: getEnvVariable("NEXT_PUBLIC_ACCESS_TOKEN"),
  space: getEnvVariable("NEXT_PUBLIC_SPACE_ID"),
});
