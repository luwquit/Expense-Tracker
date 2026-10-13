import { HeroNavigation } from "./HeroNavigation";

export function HeroHomePage() {
  return (
    <section className="text-deep-blue dark:text-bluish-white mt-45 ">
      <div className="flex flex-col gap-y-2 justify-self-center">
        <h3 className="text-4xl font-extralight">Main balance</h3>
        <h1 className="text-9xl font-semibold">$4590.95</h1>
      </div>
      <HeroNavigation />
    </section>
  );
}