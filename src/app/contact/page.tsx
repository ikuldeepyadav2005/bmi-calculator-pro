export const metadata = {
  title: "Contact Us | BMI Calculator Pro",
  description: "Contact BMI Calculator Pro.",
};

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="space-y-5 text-gray-300 leading-8">
        <p>
          We'd love to hear from you.
        </p>

        <p>
          For questions, suggestions or business inquiries:
        </p>

        <div className="bg-white/10 p-6 rounded-xl">
          <p><strong>Email:</strong> ikuldeepyadav2005@gmail.com</p>
          <p><strong>Response Time:</strong> 24–48 Hours</p>
        </div>

        <p>
          We appreciate your feedback and continuously work to improve our
          website.
        </p>
      </div>
    </main>
  );
}