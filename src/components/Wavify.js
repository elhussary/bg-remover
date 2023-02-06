import Wave from "react-wavify";

const Wavify = () => {
  return (
    <section className="fixed left-0 bottom-0 w-full translate-y-1.5">
      <Wave
        fill="url(#gradient)"
        paused={false}
        options={{
          height: 85,
          amplitude: 30,
          speed: 0.2,
          points: 10,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#0AB3D7" />
            <stop offset="90%" stopColor="#5C6CEF" />
          </linearGradient>
        </defs>
      </Wave>
    </section>
  );
};

export default Wavify;
