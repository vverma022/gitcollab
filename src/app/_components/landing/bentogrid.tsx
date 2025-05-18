import MaxWidthWrapper from "../maxwidth";

export default function BentoGrid() {
  return (
    <section className="py-24">
      <MaxWidthWrapper>
      <div className="flex max-w-[58rem] flex-col items-center space-y-4 text-center mx-auto">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">What is GitCollab?</h2>
        <p className="max-w-[85%] text-sm text-muted-foreground sm:text-base pb-6">
          What we offer at GitCollab
        </p>
      </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* AI Features Card */}
          <div className="group animate-fadeIn rounded-2xl border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="mb-3 text-xl font-semibold">AI-Powered Insights</h2>
              <p className="text-muted-foreground">
                Get intelligent summaries of your commits and AI-driven recommendations.
              </p>
            </div>
          </div>

          {/* Collaboration Card */}
          <div className="group animate-fadeIn animation-delay-100 rounded-2xl border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h2 className="mb-3 text-xl font-semibold">Team Collaboration</h2>
              <p className="text-muted-foreground">
                Work together seamlessly with real-time updates and shared insights.
              </p>
            </div>
          </div>

          {/* Code Analysis Card */}
          <div className="group animate-fadeIn animation-delay-200 rounded-2xl border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h2 className="mb-3 text-xl font-semibold">Smart Code Analysis</h2>
              <p className="text-muted-foreground">
                Understand complex code changes with AI-powered explanations.
              </p>
            </div>
          </div>

          {/* Git Integration Card */}
          <div className="group animate-fadeIn animation-delay-300 rounded-2xl border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
              </div>
              <h2 className="mb-3 text-xl font-semibold">Git Integration</h2>
              <p className="text-muted-foreground">
                Seamlessly integrate with Git workflows and enhance your development process.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
