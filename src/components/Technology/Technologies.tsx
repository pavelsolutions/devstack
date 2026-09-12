import TechnologyCard from "./TechnologyCard";
import DevStack from "./DevStack";

const Technologies = () => {
  return (
    <section className="bg-white font-jakarta">
      <div className="mx-auto w-full max-w-304 px-4">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#0F172A] text-[24px] text-center lg:text-left lg:text-5xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#FF6A1A] via-[#D91B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>

          <p className="mt-2 tx-[12] lg:text-lg lg:text-left text-center text-[#64748B]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col gap-8 xl:flex-row">
          {/* Technology Cards */}
          <div className="w-full xl:w-228 grid flex-1 grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">

            <TechnologyCard />
            <TechnologyCard />
            <TechnologyCard />

            <TechnologyCard />
            <TechnologyCard />
            <TechnologyCard />

          </div>
          {/* Dev Stack Sidebar */}
          <aside className="w-full xl:w-76">
            <DevStack />
          </aside>

        </div>

      </div>
    </section>
  );
};

export default Technologies;