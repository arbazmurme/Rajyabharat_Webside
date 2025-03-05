import "./tailwind.css"
import Mainlayout from "@/components/layouts/Mainlayout";



export const metadata = {
  title: "Rajyabharat",
  description: "Rajyabharat",
  keywords: "Rajyabharat",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Mainlayout>{children}</Mainlayout>
      </body>
    </html>
  );
}
