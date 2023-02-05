import Footer from "../shared/Footer";
import MetaInformation from "../shared/MetaInformation";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <div className="flex h-screen flex-col justify-between bg-gray-800">
      <MetaInformation title={title} description={description} />
      <Navbar />
      {
        <main className="max-w-8xl relative mx-auto mt-10 mb-auto flex w-full flex-col justify-center sm:px-2 lg:px-8 xl:px-12">
          {children}
        </main>
      }
      <Footer />
    </div>
  );
}
