import Header from "@/ui/components/header";
import Footer from "@/ui/components/footer";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-grow flex-col h-full">
      <Header />
      <div className="flex-grow overflow-y-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
}
