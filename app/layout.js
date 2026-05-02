import './globals.css';

export const metadata = {
  title: 'Blyster Private Limited - Digital Marketing Agency',
  description: 'Empowering Brands with Smart Digital Marketing Solutions',
  keywords: 'digital marketing, SEO, social media marketing, paid advertising',
  author: 'Blyster Private Limited',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
