"use client";

import dynamic from "next/dynamic";

const TerravaMapInner = dynamic(() => import("./TerravaMapInner"), {
  ssr: false,
});

export default function TerravaMap() {
  return <TerravaMapInner />;
}