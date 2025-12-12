import LeftSidebar from "@/components/sidebars/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <LeftSidebar />
      {children}
    </main>
  );
}
