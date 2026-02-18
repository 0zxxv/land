import type { Metadata } from "next";
import { Footer } from "../_components/footer";
import { Header } from "../_components/header";

export const metadata: Metadata = {
  title: "Contact Us | MyntLabs",
  description: "Get in touch with MyntLabs.",
};

export default function ContactUsPage() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-cream-dark">
      <Header />
      <main className="flex flex-1 flex-col">
        <div className="flex flex-1 items-center justify-center px-6 py-12">
          <h1 className="text-3xl font-bold text-slate-800">Contact Us</h1>
        </div>
        <Footer />
      </main>
    </div>
  );
}
