const CenterCircle = () => (
  <div className="relative flex items-center justify-center">
    {/* Outer green ring */}
    <div className="w-28 h-28 rounded-full bg-academy-green flex items-center justify-center shadow-lg">
      {/* Inner blue circle */}
      <div className="w-20 h-20 rounded-full bg-academy-blue flex items-center justify-center">
        {/* Abstract loop icon */}
        <svg
          viewBox="0 0 48 48"
          className="w-10 h-10"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 12c-6 0-10 4-10 10s4 10 10 10" />
          <path d="M32 36c6 0 10-4 10-10s-4-10-10-10" />
          <path d="M16 32c4 0 8-3 10-8 2 5 6 8 10 8" />
          <path d="M32 16c-4 0-8 3-10 8-2-5-6-8-10-8" />
        </svg>
      </div>
    </div>
  </div>
);

export default CenterCircle;