"use client";

import React from "react";
import Link from "next/link";
import { Zap, BarChart3, Users, LogOut, ArrowRight, Mail } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MarketingHeader } from "@/components/marketing-header";

export default function InviteOnlyPage() {
  const { user, signOut, loading } = useAuth();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <MarketingHeader />

      <main className="relative flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_10%,rgba(124,92,252,0.08)_0%,transparent_70%),radial-gradient(ellipse_40%_30%_at_80%_80%,rgba(56,232,200,0.04)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Private Beta
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground mb-6">
            The <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">Acadomi</span> platform
            <br />
            is <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">invite-only</span> right now.
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-6">
            Acadomi uses live AI guidance for every hint and seed step. To keep responses high-quality, the platform is currently rolled out to a small group of pilot users while we expand capacity.
          </p>

          {!loading && user ? (
            <p className="text-sm font-medium text-muted-foreground mb-12">
              Signed in as <strong className="text-foreground">{user.email}</strong>
            </p>
          ) : (
            <div className="h-10 mb-12" />
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-left mb-12">
            <Card className="bg-background/50 backdrop-blur-sm border-primary/10 transition-colors hover:bg-primary/5">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Adaptive AI hints</h3>
                <p className="text-sm text-muted-foreground">Three tunable mentoring modes calibrated to your level.</p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-primary/10 transition-colors hover:bg-primary/5">
              <CardContent className="pt-6">
                <BarChart3 className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Progress dashboard</h3>
                <p className="text-sm text-muted-foreground">Track streaks, accuracy, and topic coverage over time.</p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-primary/10 transition-colors hover:bg-primary/5">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Friend network</h3>
                <p className="text-sm text-muted-foreground">Follow other learners and share solving feeds.</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto font-semibold gap-2 cursor-not-allowed opacity-80" disabled>
              Go to your dashboard <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
              <Mail className="h-4 w-4" />
              Request editor access
            </Button>
            {user && (
              <Button variant="ghost" size="lg" onClick={() => signOut()} className="w-full sm:w-auto gap-2 text-muted-foreground hover:text-destructive">
                <LogOut className="h-4 w-4" />
                Sign out
              </Button>
            )}
          </div>

          <p className="text-xs text-muted-foreground max-w-lg mx-auto">
            Your dashboard, feed, and profile remain fully usable — only the editor itself is gated while we scale the AI service.
          </p>
        </div>
      </main>
    </div>
  );
}
