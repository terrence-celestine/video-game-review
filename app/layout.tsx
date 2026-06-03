import Sidebar from "@/components/sidebar";
import "./css/global.css"; // This import is required!

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <Sidebar/>
        <main className="flex-1 p-8">
          {children}
        </main>
      </body>
    </html>
  );
}