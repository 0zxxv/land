import type { Metadata } from "next";
import { Header } from "../_components/header";

export const metadata: Metadata = {
  title: "Careers | MyntLabs",
  description: "Careers at MyntLabs.",
};

export default function CareersPage() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-cream-dark">
      <Header />
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <h1 className="text-3xl font-bold text-slate-800">Careers</h1>
      </main>
    </div>
  );
}
