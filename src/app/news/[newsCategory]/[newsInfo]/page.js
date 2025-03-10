import NewsDetailsClient from "@/pages-components/NewsDetails/NewsDetailsClient";
import { newsByslugurl } from "../../../../../utils/news/newaUtils";

export default async function NewsDetailsPage({ params }) {
  const resolvedParams = await params;
  const { newsCategory, newsInfo } = resolvedParams;
  const fetchnews = await newsByslugurl(newsInfo);

  if (!fetchnews) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">News not found</h1>
      </div>
    );
  }

  return <NewsDetailsClient fetchnews={fetchnews} newsCategory={newsCategory} />;
}
