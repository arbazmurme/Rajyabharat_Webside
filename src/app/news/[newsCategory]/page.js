import CategoryDetails from "@/pages/CategoryDetails/CategoryDetails";

export default async function NewsDetails({ params }) {
  const resolvedParams = await params;
  const { newsCategory } = resolvedParams;

  return <CategoryDetails newsCategory={newsCategory} />;
}
