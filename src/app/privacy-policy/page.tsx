export const metadata = {
  title: "Privacy Policy | BMI Calculator Pro",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="space-y-6 text-gray-300 leading-8">
        <p>
          Your privacy is important to us.
        </p>

        <h2 className="text-2xl text-white font-semibold">
          Information We Collect
        </h2>

        <p>
          We may collect anonymous information such as browser type, device,
          operating system and usage statistics.
        </p>

        <h2 className="text-2xl text-white font-semibold">
          Cookies
        </h2>

        <p>
          Cookies may be used to improve user experience.
        </p>

        <h2 className="text-2xl text-white font-semibold">
          Google AdSense
        </h2>

        <p>
          We may display advertisements through Google AdSense.
        </p>

        <h2 className="text-2xl text-white font-semibold">
          Third Party Services
        </h2>

        <ul className="list-disc pl-6">
          <li>Google Analytics</li>
          <li>Google AdSense</li>
        </ul>

        <h2 className="text-2xl text-white font-semibold">
          Contact
        </h2>

        <p>Email : your@email.com</p>
      </div>
    </main>
  );
}