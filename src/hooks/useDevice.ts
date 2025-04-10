import { useState, useEffect } from "react";

export function useDevice() {
  const [deviceType, setDeviceType] = useState<"desktop" | "mobile" | "tablet">(
    "desktop"
  );

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setDeviceType("mobile");
      } else if (width <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    updateDeviceType();

    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return deviceType;
}
