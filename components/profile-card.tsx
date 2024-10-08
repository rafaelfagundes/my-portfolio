"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendUp } from "@phosphor-icons/react/dist/ssr";
import { ClipboardCopy } from "lucide-react";
import { toast } from "sonner";
import { MainTitle } from "./typography";
import Avatar from "./ui/avatar";
import CustomCard from "./ui/custom-card";

export default function Component() {
  const hireMeButtonClassName =
    "bg-orange-300 hover:bg-orange-200 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-black dark:text-white";

  const copyEmail = () => {
    const eEmail = "cmFmYWVsY2ZsQG91dGxvb2suY29t";
    const dEmail = atob(eEmail);
    navigator.clipboard.writeText(dEmail);
    toast("Email copied to clipboard! 🎉");
  };

  return (
    <CustomCard>
      <div className="p-3 sm:p-4">
        <div className="flex flex-row items-center justify-between space-y-0 pb-4 sm:pb-5">
          <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            Full Stack & Mobile Developer
          </div>
          <Badge
            variant="outline"
            className="bg-emerald-100 dark:bg-emerald-700 text-emerald-700 dark:text-emerald-300 rounded-full"
          >
            <div className="h-2 w-2 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-2"></div>
            Available for work
          </Badge>
        </div>
        <div className="grid gap-6 mt-2">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <MainTitle>{`I'm Rafael Fagundes`}</MainTitle>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 pr-8">
                Experienced full stack & mobile developer based in Canada.
              </p>
              <div className="gap-2 hidden sm:flex pt-3 items-center">
                <Button
                  variant="secondary"
                  className={`px-8 py-5 ${hireMeButtonClassName}`}
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/rafaelcfl/")
                  }
                >
                  <TrendUp size={16} className="mr-1" />
                  Hire Me
                </Button>
                <Button variant="ghost" onClick={copyEmail}>
                  <ClipboardCopy className="mr-2 h-4 w-4" />
                  Copy Email
                </Button>
              </div>
            </div>
            <div className="hidden sm:block">
              <Avatar
                alt="Rafael Fagundes"
                size={300}
                url="/img/profile.png"
                scaled={false}
              ></Avatar>
            </div>
            <div className="sm:hidden">
              <Avatar
                alt="Rafael Fagundes"
                size={360}
                url="/img/profile.png"
                scaled={false}
              ></Avatar>
            </div>
          </div>
          <div className="flex gap-2 sm:hidden">
            <Button
              variant="secondary"
              className={`w-full ${hireMeButtonClassName}`}
              onClick={() =>
                window.open("https://www.linkedin.com/in/rafaelcfl/")
              }
            >
              <TrendUp size={16} className="mr-1" />
              Hire Me
            </Button>
            <Button variant="outline" className="w-full" onClick={copyEmail}>
              <ClipboardCopy className="mr-2 h-4 w-4" />
              Copy Email
            </Button>
          </div>
        </div>
      </div>
    </CustomCard>
  );
}
