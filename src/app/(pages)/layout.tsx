import Sidebar from "@/components/sidebar";
import { ModalProvider } from "@/context/modal-provider";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <div className="flex min-h-[100dvh]">
        <Sidebar />
        <main className="ml-32 w-full p-8 flex-grow">{children}</main>
      </div>
    </ModalProvider>
  );
}
