import React from "react";

export default function CarddDaily() {
  return (
    <div className="bg-secondary text-primary p-4 rounded-2xl">
      <div className="flex flex-col gap-2">
        <section>
          <div className="font-medium text-xs">Daily</div>
        </section>

        <section>
          <p className="font-semibold text-sm mb-2">
            “He said: ‘Therein you shall live, and therein you shall die, and
            from it you shall be brought out (i.e. resurrected).’”
          </p>
          <p className="font-light text-xs">Al-A’raaf (7:25)</p>
        </section>
      </div>
    </div>
  );
}
