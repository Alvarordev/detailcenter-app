import Sidebar from "@/components/sidebar";
import { ModalProvider } from "@/context/modal-provider";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="ml-32 w-full p-8 flex-grow">{children}</main>
      </div>
    </ModalProvider>
  );
}
