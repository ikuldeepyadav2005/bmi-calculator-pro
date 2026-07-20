export const metadata = {
  title: "Terms & Conditions | BMI Calculator Pro",
};

export default function TermsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-8">
        Terms & Conditions
      </h1>

      <div className="space-y-6 text-gray-300 leading-8">
        <p>
          By using BMI Calculator Pro you agree to these terms.
        </p>

        <h2 className="text-2xl text-white font-semibold">
          Informational Purpose
        </h2>

        <p>
          The calculator is for informational purposes only.
        </p>

        <h2 className="text-2xl text-white font-semibold">
          No Medical Advice
        </h2>

        <p>
          Please consult a healthcare professional before making health
          decisions.
        </p>

        <h2 className="text-2xl text-white font-semibold">
          Accuracy
        </h2>

        <p>
          We strive to provide accurate results but cannot guarantee complete
          accuracy.
        </p>

        <h2 className="text-2xl text-white font-semibold">
          Contact
        </h2>

        <p>Email : your@email.com</p>
      </div>
    </main>
  );
}