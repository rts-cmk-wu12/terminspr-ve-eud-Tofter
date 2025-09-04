import "./globals.css";

export const metadata = {
  title:{ 
   template: "%s | Landrup",
   default: 'Landrup'
 },
  description: "Landrup danseskole",
}

export default function RootLayout({ children }) {
  return (
    <html lang="dk">
      <body >
        {children}
      </body>
    </html>
  );
}
