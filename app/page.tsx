"use client";
import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/ThemeProvider";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import { SessionProvider, useSession } from "next-auth/react";
import Landing from "./landing/page";
import NotFound from "./not-found/page";
import Calendar from "./calendar/page";
import Songs from "./songs/songs";
import Blockouts from "./blockouts/page";
import { redirect } from "next/navigation";
import useAuth from "./hooks/use-auth";

function Router() {
  // const { status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/api/auth/signin?callbackUrl=/");
  //   },
  // });
  // const { status } = useAuth({
  //   callbackUrl: "home",
  // });
  const status = "authenticated";
  console.log(status);

  // if (status === "loading") {
  //   return (
  //     <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
  //         <p className="text-gray-600 dark:text-gray-400">Loading...</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <Switch>
      <Route path="/" component={Landing} />
      {/* {status === "unauthenticated" && <Route path="/" component={Landing} />} */}
      {status === "authenticated" && (
        <>
          <Route path="/" component={Home} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/songs" component={Songs} />
          <Route path="/blockouts" component={Blockouts} />
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SessionProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </SessionProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
