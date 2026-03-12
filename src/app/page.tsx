import { DottedSurface } from '@/components/ui/dotted-surface';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* The animated dotted background */}
      <DottedSurface />

      {/* Optional subtle vignette overlay to make text more readable (like in the demo) */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-gradient-to-b from-transparent via-black/30 to-black/70" />

      {/* Your main content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center sm:px-8">
        <h1 className="mb-6 text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          Yarro&Co
        </h1>

        <p className="mb-10 max-w-3xl text-xl leading-relaxed text-gray-300 sm:text-2xl md:text-3xl">
          We create content that captivates, websites that convert, mobile apps that engage, and SaaS that scales.
        </p>

        <p className="text-xl font-medium text-blue-400 md:text-2xl">
          Coming Soon • Global from Malta
        </p>
      </div>
    </main>
  );
}