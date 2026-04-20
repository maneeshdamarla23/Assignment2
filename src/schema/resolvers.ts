import { getAddress } from "./address/address";
import { Address, Args } from "./address/types";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../data/addresses.json");

export const Mutation = {
  createAddress: (_: any, { username, input }: any, context: any) => {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (data[username]) {
      throw new Error("User already exists");
    }

    data[username] = input;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return input;
  },
};

export const resolvers = {
  Query: {
    address: (parent: any, args: Args, context: any, info: any): Address => {
      return getAddress(parent, args, context);
    },
    Mutation,
  },
};
