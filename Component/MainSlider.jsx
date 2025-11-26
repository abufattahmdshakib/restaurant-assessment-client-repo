"use client";

import DesktopSlider from "./DesktopSlider";
import MobileSlider from "./MobileSlider";

export default function MainSlider() {
  return (
    <>
      {/* MobileSlider hidden ≥768px */}
      <div className="block md:hidden">
        <MobileSlider />
      </div>

      {/* DesktopSlider hidden <768px */}
      <div className="hidden md:block">
        <DesktopSlider />
      </div>
    </>
  );
}
