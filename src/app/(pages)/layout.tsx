import Sidebar from "@/components/sidebar";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-32 w-full p-8 flex-grow">{children}</main>
    </div>
  );
}
