import "../style/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "دیجی کالا", template: "%s - دیجی کالا" },
  description: "Digikala clone | کلون فروشگاه اینترنتی دیجیکالا",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="m-auto max-w-[1720px] flex-col items-center justify-center font-iranyekan">
            <main className="">{children}</main>
      </body>
    </html>
  );
}
