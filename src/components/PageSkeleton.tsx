/** Skeleton shown while the page content loads on first render. */
const Shimmer = ({ className }: { className?: string }) => (
  <div className={`rounded-lg bg-secondary/50 animate-pulse ${className ?? ""}`} />
);

const PageSkeleton = () => (
  <div className="min-h-screen bg-background overflow-hidden">
    {/* Nav skeleton */}
    <div className="fixed top-3 right-3 z-50 flex gap-1">
      {[40, 32, 56].map((w, i) => (
        <Shimmer key={i} className="h-8" style={{ width: w }} />
      ))}
    </div>

    {/* Hero */}
    <section className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
      <Shimmer className="h-20 sm:h-28 md:h-36 w-64 sm:w-80 md:w-96" />
      <Shimmer className="h-5 w-48 sm:w-72" />
      <Shimmer className="h-3 w-32 mt-4" />
      <Shimmer className="mt-2 w-[280px] sm:w-[350px] md:w-[450px] h-[176px] sm:h-[220px] md:h-[280px] rounded-2xl" />
    </section>

    {/* Problem / Solution */}
    <section className="py-14 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {[0, 1].map((i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-5 sm:p-8 space-y-3">
            <Shimmer className="h-4 w-24 ml-auto" />
            <Shimmer className="h-3 w-full" />
            <Shimmer className="h-3 w-5/6" />
            <Shimmer className="h-3 w-4/6" />
          </div>
        ))}
      </div>
    </section>

    {/* Vision */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto rounded-xl border border-border bg-card p-6 sm:p-10 flex flex-col items-center gap-4">
        <Shimmer className="h-3 w-28" />
        <Shimmer className="h-4 w-full max-w-lg" />
        <Shimmer className="h-4 w-3/4 max-w-md" />
      </div>
    </section>

    {/* Components grid */}
    <section className="py-14 px-4">
      <Shimmer className="h-8 w-56 mx-auto mb-10" />
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-card/60 p-4 sm:p-5 flex flex-col items-center gap-3">
            <Shimmer className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" />
            <Shimmer className="h-3 w-16 sm:w-20" />
            <Shimmer className="h-2 w-12 hidden sm:block" />
            <Shimmer className="h-2 w-10 hidden sm:block" />
            <Shimmer className="h-3 w-16 mt-auto" />
          </div>
        ))}
      </div>
    </section>

    {/* Product photo */}
    <section className="py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 space-y-3">
          <Shimmer className="h-8 w-40 mx-auto" />
          <Shimmer className="h-3 w-64 mx-auto" />
        </div>
        <Shimmer className="w-full rounded-2xl" style={{ aspectRatio: "3024/4032" }} />
      </div>
    </section>

    {/* Workflow */}
    <section className="py-14 px-4">
      <Shimmer className="h-8 w-64 mx-auto mb-10" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {[0, 1].map((i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-5 sm:p-8 space-y-4">
            <Shimmer className="h-4 w-32 ml-auto" />
            {Array.from({ length: 5 }).map((_, j) => (
              <div key={j} className="flex items-center gap-3">
                <Shimmer className="flex-1 h-3" />
                <Shimmer className="w-7 h-7 rounded-full shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="py-14 px-4">
      <Shimmer className="h-8 w-56 mx-auto mb-10" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-4 sm:p-6 space-y-3">
            <Shimmer className="h-3 w-24 ml-auto" />
            {Array.from({ length: 5 }).map((_, j) => (
              <div key={j} className="flex items-center gap-2">
                <Shimmer className="w-1.5 h-1.5 rounded-full shrink-0" />
                <Shimmer className="flex-1 h-2" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default PageSkeleton;
