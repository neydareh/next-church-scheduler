"use client";
import { Route, Switch } from "wouter";
import { ThemeProvider } from "./components/ThemeProvider";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import Landing from "./landing/page";
import NotFound from "./not-found/page";
import Calendar from "./calendar/page";
import Songs from "./songs/page";
import Blockouts from "./blockouts/page";
import useAuth from "./hooks/use-auth";
import Homepage from "./home/page";

export default function Home() {
  const { status, session } = useAuth({
    callbackUrl: "home",
  });

  if (status === "loading") {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <SessionProvider session={session}>
        <TooltipProvider>
          <Toaster />
          <Switch>
            <Route path="/" component={Landing} />
            {status === "unauthenticated" && (
              <Route path="/" component={Landing} />
            )}
            {status === "authenticated" && (
              <>
                <Route path="/home" component={Homepage} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/songs" component={Songs} />
                <Route path="/blockouts" component={Blockouts} />
              </>
            )}
            <Route component={NotFound} />
          </Switch>
        </TooltipProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
