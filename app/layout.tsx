import Sidebar from "@/components/sidebar";
import Providers from "@/components/Providers";
import "./css/global.css"; // This import is required!

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50">
        <Providers>
          <Sidebar />
          <main className="flex-1 p-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}