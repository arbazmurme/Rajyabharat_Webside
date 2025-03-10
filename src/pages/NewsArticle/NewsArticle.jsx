"use client";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [englishText, setEnglishText] = useState("");
  const [teluguText, setTeluguText] = useState("");

  const detectLanguageAndTranslate = async (text) => {
    if (!text) {
      setTranslatedText("");
      return;
    }

    const isTelugu = /[\u0C00-\u0C7F]/.test(text);
    const sourceLang = isTelugu ? "te" : "en";
    const targetLang = isTelugu ? "en" : "te";

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data[0] && data[0][0]) {
        setTranslatedText(data[0][0][0]); // Extracting translated text
      }
    } catch (error) {
      console.error("Translation failed", error);
      setTranslatedText("Translation error");
    }
  };

  const handleSubmit = () => {
    if (/[\u0C00-\u0C7F]/.test(inputText)) {
      setTeluguText(inputText);
      setEnglishText(translatedText);
    } else {
      setEnglishText(inputText);
      setTeluguText(translatedText);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          🌍 Bidirectional Translator (Telugu & English)
        </h2>

        <input
          type="text"
          placeholder="Enter text in English or Telugu"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            detectLanguageAndTranslate(e.target.value);
          }}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Translated text"
          value={translatedText}
          readOnly
          className="w-full p-3 border rounded-lg mt-3 bg-gray-200 text-gray-700"
        />

        <button
          onClick={handleSubmit}
          className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Translate & Save
        </button>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg text-gray-800">
          <p className="font-semibold">Results:</p>
          <p className="mt-2"><strong>English:</strong> {englishText || "N/A"}</p>
          <p><strong>Telugu:</strong> {teluguText || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}
