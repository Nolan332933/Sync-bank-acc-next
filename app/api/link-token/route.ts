import { NextResponse } from "next/server";
import { CountryCode, Products } from "plaid";

import { plaid } from "@/lib/plaid";

export const GET = async () => {
  const token = await plaid.linkTokenCreate({
    user: {
      client_user_id: "user-id",
    },
    client_name: "finance-dev",
    products: [Products.Transactions],
    country_codes: [CountryCode.Us],
    language: "en",
  });

  return NextResponse.json({ token: token.data.link_token });
};
