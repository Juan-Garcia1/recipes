import { Bebas_Neue, Nunito } from "next/font/google";
import "./globals.scss";

const bebasNue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--bebas-nue",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: "400",
  variable: "--nunito",
});

export const metadata = {
  title: "Taste Trail",
  description:
    "Uncover a world of flavors with our curated collection of recipes. From quick weeknight meals to exquisite dishes, we have something for every palate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebasNue.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
