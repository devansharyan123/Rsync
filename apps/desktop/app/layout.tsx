import './globals.css'; // This will now find the file you just created

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-transparent" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}