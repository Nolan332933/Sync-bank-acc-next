import { plaid } from "@/lib/plaid";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const publicToken = searchParams.get("publicToken");

  if (!publicToken) {
    return new NextResponse("Missing publicToken", { status: 400 });
  }

  const exchange = await plaid.itemPublicTokenExchange({
    public_token: publicToken,
  });

  const transactions = await plaid.transactionsSync({
    access_token: exchange.data.access_token,
  });

  return NextResponse.json({ data: transactions.data.added });
};
