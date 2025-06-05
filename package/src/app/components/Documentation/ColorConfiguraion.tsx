export const ColorConfiguration = () => {
  return (
    <>
      <h3 className=" text-xl font-semibold mt-8 text-black">Colors</h3>
      <div className="p-6 rounded-md border mt-4 border-dark_border border-opacity-60">
        <p className="text-base font-medium text-muted text-opacity-60">
          <span className="font-semibold text-lg text-black">
            1. Override Colors
          </span>{" "}
          <br />
          For any change in colors : tailwind.config.ts
        </p>
        <div className="py-4 px-5 rounded-md bg-black mt-8">
          <p className="text-sm text-white/60 flex flex-col gap-2">
            <span>--color-primary: #0057ff;</span>
            <span>--color-midnight_text: #001b50;</span>
            <span>--color-Lightsuccess: #e7f8f2;</span>
            <span>--color-deepSlate: #6493ea;</span>
          </p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-4 border-dark_border border-opacity-60">
        <p className="text-base font-medium text-muted text-opacity-60">
          <span className="font-semibold text-lg text-black">
            2. Override Theme Colors
          </span>{" "}
          <br />
          For change , go to : tailwind.config.ts
        </p>
        <div className="py-4 px-5 rounded-md bg-black mt-8">
          <p className="text-sm text-white/60 flex flex-col gap-2">
            <span>--color-primary: #0057ff;</span>
          </p>
        </div>
      </div>
    </>
  );
};
