function VeinedLeaf({
  className,
  gradId,
}: {
  className: string;
  gradId: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="28" y1="8" x2="78" y2="132">
          <stop offset="0%" stopColor="#4caf73" stopOpacity="0.72" />
          <stop offset="42%" stopColor="#2e8f55" stopOpacity="0.68" />
          <stop offset="100%" stopColor="#1a6b3f" stopOpacity="0.62" />
        </linearGradient>
      </defs>

      {/* petiole */}
      <path
        d="M50 134 C49 130 49 126 50 122"
        stroke="#145a32"
        strokeWidth="2.2"
        strokeOpacity="0.9"
        strokeLinecap="round"
      />

      {/* leaf blade — pointed tip, wavy edge, asymmetric */}
      <path
        d="M50 6
           C42 9 34 16 28 26
           C20 38 16 52 17 66
           C18 80 23 94 31 106
           C38 116 44 122 50 124
           C56 122 62 116 69 106
           C77 94 82 80 83 66
           C84 52 80 38 72 26
           C66 16 58 9 50 6 Z"
        fill={`url(#${gradId})`}
        stroke="#0f4d2c"
        strokeWidth="1.3"
        strokeOpacity="0.82"
        strokeLinejoin="round"
      />

      {/* midrib */}
      <path
        d="M50 18 C49.5 52 49.8 88 50 122"
        stroke="#0a3d22"
        strokeWidth="2"
        strokeOpacity="0.95"
        strokeLinecap="round"
      />

      {/* alternate secondary veins — left */}
      <path
        d="M50 30 C42 36 34 42 27 48"
        stroke="#166b40"
        strokeWidth="1.1"
        strokeOpacity="0.88"
        strokeLinecap="round"
      />
      <path
        d="M50 46 C40 54 30 64 22 74"
        stroke="#166b40"
        strokeWidth="1.05"
        strokeOpacity="0.84"
        strokeLinecap="round"
      />
      <path
        d="M50 62 C42 72 34 82 28 92"
        stroke="#1a7546"
        strokeWidth="1"
        strokeOpacity="0.8"
        strokeLinecap="round"
      />
      <path
        d="M50 78 C44 86 38 96 34 104"
        stroke="#1a7546"
        strokeWidth="0.95"
        strokeOpacity="0.76"
        strokeLinecap="round"
      />
      <path
        d="M50 94 C46 100 42 108 39 114"
        stroke="#1f8050"
        strokeWidth="0.9"
        strokeOpacity="0.72"
        strokeLinecap="round"
      />

      {/* alternate secondary veins — right */}
      <path
        d="M50 38 C58 44 66 52 73 60"
        stroke="#166b40"
        strokeWidth="1.1"
        strokeOpacity="0.88"
        strokeLinecap="round"
      />
      <path
        d="M50 54 C60 64 70 74 78 84"
        stroke="#166b40"
        strokeWidth="1.05"
        strokeOpacity="0.84"
        strokeLinecap="round"
      />
      <path
        d="M50 70 C58 80 66 90 72 100"
        stroke="#1a7546"
        strokeWidth="1"
        strokeOpacity="0.8"
        strokeLinecap="round"
      />
      <path
        d="M50 86 C56 94 62 102 66 110"
        stroke="#1a7546"
        strokeWidth="0.95"
        strokeOpacity="0.76"
        strokeLinecap="round"
      />

      {/* fine vein tips */}
      <path
        d="M27 48 C24 50 21 52 19 54"
        stroke="#228552"
        strokeWidth="0.65"
        strokeOpacity="0.65"
        strokeLinecap="round"
      />
      <path
        d="M73 60 C76 63 79 66 81 68"
        stroke="#228552"
        strokeWidth="0.65"
        strokeOpacity="0.65"
        strokeLinecap="round"
      />
      <path
        d="M22 74 C19 76 17 78 15 80"
        stroke="#228552"
        strokeWidth="0.6"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M78 84 C81 87 84 89 86 91"
        stroke="#228552"
        strokeWidth="0.6"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />

      {/* light highlight along upper blade */}
      <path
        d="M50 14 C44 20 38 30 36 42"
        stroke="#7fd4a0"
        strokeWidth="1.2"
        strokeOpacity="0.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HomeLeafDecor() {
  return (
    <div className="home-leaf-pattern" aria-hidden="true">
      <VeinedLeaf
        className="home-leaf home-leaf--left-high"
        gradId="home-leaf-grad-lh"
      />
      <VeinedLeaf
        className="home-leaf home-leaf--left-low"
        gradId="home-leaf-grad-ll"
      />
      <VeinedLeaf
        className="home-leaf home-leaf--right-high"
        gradId="home-leaf-grad-rh"
      />
      <VeinedLeaf
        className="home-leaf home-leaf--right-low"
        gradId="home-leaf-grad-rl"
      />
    </div>
  );
}
