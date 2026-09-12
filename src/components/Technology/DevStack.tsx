const DevStack = () => {
  return (
    <div className="rounded-3xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-[#0F172A]">
          Your Stack
        </h2>

        <p className="mt-1 text-sm text-[#94A3B8]">
          2 Technology Selected
        </p>
      </div>

      {/* Technology Items */}
      <div className="space-y-2">
        
        {/* Svelte */}
        <div className="flex items-center justify-between rounded-xl border border-[#E2E8F0] p-3 shadow-sm">
          
          <div className="flex items-center gap-3">
            <img
              src="YOUR_SVELTE_ICON"
              alt="Svelte"
              className="h-8 w-8"
            />

            <div>
              <h3 className="text-sm font-semibold text-[#334155]">
                Svelte
              </h3>

              <p className="text-xs text-[#94A3B8]">
                Frontend
              </p>
            </div>
          </div>

          {/* Remove */}
          <button className="text-xl text-[#94A3B8] hover:text-red-500">
            ×
          </button>

        </div>

        {/* Redis */}
        <div className="flex items-center justify-between rounded-xl border border-[#E2E8F0] p-3 shadow-sm">
          
          <div className="flex items-center gap-3">
            <img
              src="YOUR_REDIS_ICON"
              alt="Redis"
              className="h-8 w-8"
            />

            <div>
              <h3 className="text-sm font-semibold text-[#334155]">
                Redis
              </h3>

              <p className="text-xs text-[#94A3B8]">
                Database
              </p>
            </div>
          </div>

          {/* Remove */}
          <button className="text-xl text-[#94A3B8] hover:text-red-500">
            ×
          </button>

        </div>

      </div>

      {/* Remove All Button */}
      <button className="mt-12 w-full rounded-lg border border-[#FECACA] bg-white py-2 text-sm font-semibold text-[#C2413B] transition hover:bg-[#FFF5F5]">
        Remove All
      </button>

    </div>
  );
};

export default DevStack;