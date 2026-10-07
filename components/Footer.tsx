import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/60 bg-zinc-50 px-6 py-12 md:py-16 mt-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div>
          <Link href="/" className="text-4xl font-bold tracking-tighter text-zinc-950 block mb-4">
            Fermor.
          </Link>
          <p className="text-zinc-500 text-sm md:text-base max-w-xs">
            Building a better way for people to understand, act and grow financially.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-8 text-sm md:text-base font-medium text-zinc-500">
          <Link href="#" className="hover:text-zinc-950 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-zinc-950 transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-zinc-950 transition-colors">Twitter (X)</Link>
        </div>
      </div>
    </footer>
  );
}