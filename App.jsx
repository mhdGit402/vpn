import React from "react";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white font-sans">
      {/* Hero Section */}
      <header className="w-full py-24 px-8 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-6">
          Secure Your Internet in One Click
        </h1>
        <p className="text-lg text-neutral-400 max-w-xl mb-8">
          Military‑grade encryption • Zero‑logs policy • Global servers •
          Unlimited bandwidth
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-600 rounded-xl text-lg font-semibold hover:bg-blue-500 transition">
            Download
          </button>
          <button className="px-6 py-3 border border-neutral-600 rounded-xl text-lg font-semibold hover:bg-neutral-800 transition">
            Learn More
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 px-8 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <FeatureCard
          title="AES‑256 Encryption"
          desc="Industry‑leading encryption protecting all your data."
        />
        <FeatureCard
          title="Zero‑Logs Policy"
          desc="We never track, store, or sell your information."
        />
        <FeatureCard
          title="Kill Switch"
          desc="Instant protection if your VPN connection drops."
        />
      </section>

      {/* Devices */}
      <section className="py-24 px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Works on All Your Devices</h2>
        <p className="text-neutral-400 mb-10">
          Windows • macOS • iOS • Android • Linux • Chrome Extension
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-neutral-300">
          {["Windows", "Mac", "iOS", "Android", "Linux", "Chrome"].map((d) => (
            <div
              key={d}
              className="px-5 py-3 border border-neutral-700 rounded-xl bg-neutral-900"
            >
              {d}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl text-center font-bold mb-14">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <PriceCard title="Monthly" price="$9.99" />
          <PriceCard title="6 Months" price="$7.49" highlight />
          <PriceCard title="Yearly" price="$4.99" />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 border-t border-neutral-800 text-neutral-500">
        © 2025 SecureVPN • Privacy • Terms • Support
      </footer>
    </div>
  );
}

// Components
function FeatureCard({ title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-400 text-sm">{desc}</p>
    </div>
  );
}

function PriceCard({ title, price, highlight }) {
  return (
    <div
      className={`p-8 rounded-2xl border ${
        highlight
          ? "border-blue-600 bg-neutral-900"
          : "border-neutral-800 bg-neutral-950"
      }`}
    >
      <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
      <div className="text-center text-4xl font-bold mb-6">{price}</div>
      <ul className="text-neutral-400 mb-8 space-y-2 text-sm">
        <li>Unlimited Bandwidth</li>
        <li>All Global Servers</li>
        <li>Military‑Grade Encryption</li>
        <li>No Logs Policy</li>
      </ul>
      <button
        className={`w-full py-3 rounded-xl font-semibold ${
          highlight
            ? "bg-blue-600 hover:bg-blue-500"
            : "bg-neutral-800 hover:bg-neutral-700"
        } transition`}
      >
        Get Started
      </button>
    </div>
  );
}
