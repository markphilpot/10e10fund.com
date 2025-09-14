import BlinkingCursor from "@/components/BlinkingCursor";

export default function Home() {
  return (
    <div
      className={"font-sans h-screen w-screen grid grid-cols-12 grid-rows-12"}
    >
      <div className={"row-start-4 col-start-4 text-4xl tracking-normal"}>
        10e10
        <BlinkingCursor />
      </div>
      <div className={"row-start-11 col-start-8 col-span-3"}>
        for exponential builders
      </div>
    </div>
  );
}
