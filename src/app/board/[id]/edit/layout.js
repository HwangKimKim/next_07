


// src/app/layout.js
export const metadata = {
  title: "Edit Board",
  description: "Board next app",
};

export default function Layout({ children }) {
  return (
    <html lang="ko">
      <body>

        {children}
      </body>
    </html>
  );
}
 