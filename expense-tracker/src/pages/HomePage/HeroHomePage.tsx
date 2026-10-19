import { HeroNavigation } from "./HeroNavigation";

export function HeroHomePage() {
  return (
    <section className="text-deep-blue dark:text-bluish-white md:mt-45 mt-35 m-auto">
      <div className="flex flex-col gap-y-2 justify-self-center">
        <h3 className="lg:text-4xl md:text-3xl text-2xl font-extralight">Main balance</h3>
        <h1 className="lg:text-9xl md:text-8xl text-7xl font-semibold">$4590.95</h1>
      </div>
      <HeroNavigation />
    </section>
  );
}