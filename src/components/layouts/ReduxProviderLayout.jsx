"use client"; // This is required because Redux Provider uses client-side context

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useEffect, useState } from "react";

export default function ReduxProviderLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return <Provider store={store}>{children}</Provider>;
}
