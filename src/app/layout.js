import ReduxProviderLayout from "@/components/layouts/ReduxProviderLayout";
import "./tailwind.css"
import Mainlayout from "@/components/layouts/Mainlayout";
import { LanguageProvider } from "@/context/LanguageContext";
import ToggleLanguageLayout from "@/components/layouts/ToggleLanguageLayout";

export const metadata = {
  title: "Rajyabharat",
  description: "Rajyabharat",
  keywords: "Rajyabharat",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider >
          <ReduxProviderLayout>
            <ToggleLanguageLayout>
              <Mainlayout>
                {children}
              </Mainlayout>
            </ToggleLanguageLayout>
          </ReduxProviderLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
