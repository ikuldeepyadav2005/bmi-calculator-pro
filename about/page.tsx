export const metadata = {
  title: "About Us | BMI Calculator Pro",
  description: "Learn more about BMI Calculator Pro.",
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>

      <div className="space-y-6 text-gray-300 leading-8">
        <p>
          Welcome to <strong>BMI Calculator Pro</strong>, your trusted online
          health calculator for measuring Body Mass Index (BMI).
        </p>

        <p>
          Our mission is to provide free, fast, accurate, and easy-to-use health
          tools that help people better understand their health.
        </p>

        <p>
          Our BMI Calculator follows internationally accepted BMI formulas and
          provides instant results with useful health information.
        </p>

        <h2 className="text-2xl font-semibold text-white">
          Why Choose BMI Calculator Pro?
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Free to use</li>
          <li>Fast BMI Calculation</li>
          <li>Mobile Friendly</li>
          <li>Modern & Responsive Design</li>
          <li>Health Information</li>
          <li>Privacy Focused</li>
        </ul>

        <p>
          The information provided on this website is for educational purposes
          only and should not be considered medical advice.
        </p>
      </div>
    </main>
  );
}