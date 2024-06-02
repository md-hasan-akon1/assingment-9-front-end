import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/lib/Providers/Providers";
import { Toaster} from 'sonner'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blood Care",
  description: "Blood Care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <AppRouterCacheProvider>
          <body className={inter.className}>
          <Toaster position='top-center' />
            {children}</body>
        </AppRouterCacheProvider>
      </html>
    </Providers>
  );
}
