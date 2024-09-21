"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen flex flex-col gap-2">
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={true}
      >
        {children}
      </NextThemesProvider>
    </div>
  );
}

export default Providers;
