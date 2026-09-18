export default function HeroComp() {
  return (
    <>
      <div className="relative overflow-hidden dark:text-white">
        {/* Gradients */}
        <div
          aria-hidden="true"
          className="flex absolute -top-96 inset-s-1/2 transform -translate-x-1/2"
        >
          <div className="bg-linear-to-tl from-primary-50 via-primary-100 to-primary-50 blur-3xl w-360 h-200 rounded-fulls origin-top-left -rotate-12 -translate-x-60 dark:from-primary-900/70 dark:via-primary-900/70 dark:to-primary-900/70" />
        </div>
        {/* End Gradients */}
        <div className="relative z-10">
          <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="inline-block text-sm font-medium bg-clip-text bg-linear-to-l from-primary to-chart-5 text-transparent">
                Preline: A vision for 2023
              </p>
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="block font-semibold text-foreground text-4xl md:text-5xl lg:text-6xl">
                  Find What to Watch Next
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-muted-foreground-2">
                  Explore thousands of movies, TV shows, and hidden gems all in
                  one place. Search, discover, and start streaming today.
                </p>
              </div>
              {/* Button */}
              <div className="mt-8 gap-3 flex flex-col sm:flex-row justify-center">
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-white w-1/2 md:w-auto mx-auto"
                  href="#"
                >
                  Explore Now
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
