const TechnologyCard = () => {
  return (
    <div className="w-full max-w-[320px] rounded-3xl border border-[#E5E7EB] bg-white p-5 shadow-sm">

      {/* Top Section */}
      <div className="flex items-start justify-between">
        <img
          src="YOUR_REDIS_ICON"
          alt="Redis"
          className="h-8 w-8 object-contain"
        />

        <span className="rounded-full border border-[#F3D6D6] bg-[#FFF7F7] px-3 py-1 text-sm font-medium text-[#C95A5A]">
          Cache
        </span>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-[#0F172A]">
          Redis
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#64748B]">
          In-memory data structure store used as a high-speed database,
          cache, and message broker.
        </p>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-[#E5E7EB]" />

      {/* Information */}
      <div className="flex items-center justify-between text-sm">

        <span className="rounded-md bg-[#F1F5F9] px-3 py-1.5 text-[#64748B]">
          Database
        </span>

        <span className="text-[#64748B]">
          Intermediate
        </span>

        <span className="flex items-center gap-1 font-medium text-[#475569]">
          <span className="text-[#F59E0B]">★</span>
          4.8
        </span>

      </div>

      {/* Button */}
      <button className="mt-5 w-full rounded-xl bg-[#111827] py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
        Add to Stack
      </button>

    </div>
  );
};

export default TechnologyCard;