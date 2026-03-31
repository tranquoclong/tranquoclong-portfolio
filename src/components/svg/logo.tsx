import React from "react"
import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={56}
      height={60}
      // className="size-14"
    />
  );
}
