export const metadata = {
  title: 'BMI Calculator Pro',
  description: 'Calculate your BMI instantly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}