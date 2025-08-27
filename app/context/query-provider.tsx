"use client";
import { queryClient as QueryClient } from "../lib/queryClient";

import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => QueryClient);
  return (
    <QueryClientProvider client={queryClient}> {children} </QueryClientProvider>
  );
}
