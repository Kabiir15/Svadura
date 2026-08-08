export default function Loading() {
  return (
    <div className="pt-32 pb-24 container-lux">
      <div className="skeleton h-10 w-1/3 rounded-full mb-6" />
      <div className="skeleton h-16 w-2/3 rounded-2xl mb-12" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-3xl overflow-hidden border border-espresso/10">
            <div className="skeleton aspect-[4/3]" />
            <div className="p-6 space-y-3">
              <div className="skeleton h-3 w-1/3 rounded-full" />
              <div className="skeleton h-6 w-2/3 rounded-full" />
              <div className="skeleton h-4 w-full rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
