"use client";

import { Loader2 } from "lucide-react";

import { useLinkToken } from "@/hooks/use-link-token";
import { ConnectedView } from "@/components/connected-view";

export default function Home() {
  const linkToken = useLinkToken();

  if (!linkToken) {
    return (
      <div className="min-h-screen flex items-center justify-center p-10">
        <Loader2 className="size-4 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <ConnectedView linkToken={linkToken} />
    </div>
  );
};
