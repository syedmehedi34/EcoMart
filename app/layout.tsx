const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;

/*
use:   sanity for data management  
use:   next-sanity package for easy integration with Next.js
npm:   npx sanity@latest init
web link: https://www.npmjs.com/package/next-sanity

*/
