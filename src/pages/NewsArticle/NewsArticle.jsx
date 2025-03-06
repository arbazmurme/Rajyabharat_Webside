import Image from "next/image";

export default function NewsArticle() {
  const tags = [
    "Telugu News",
    "Latest Telugu news",
    "Latest News in Telugu",
    "Weather Alert",
  ];
  const relatedPosts = [
    {
      id: 1,
      title: "రాష్ట్రపతి నిలయంలో రాజపేట కళాకారుడు",
      image: "/test1.jpg", // Replace with actual image path
    },
    {
      id: 2,
      title:
        "Ukraine-US: ఉక్రెయిన్‌కు మరో షాక్ ఇచ్చిన అమెరికా.. ఈసారి ఏం చేసిందంటే?",
      image: "/test2.jpg", // Replace with actual image path
    },
    {
      id: 3,
      title:
        "అసెంబ్లీలో మాటిచ్చి మూడు నెలలు.. మూడు రూపాయలు కూడా చెక్కించలేదని ప్రభుత్వం: మంత్రి హరీష్ రావు",
      image: "/test3.jpg", // Replace with actual image path
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full sm:w-9/12 md:overflow-y-auto md:no-scrollbar">
          <div className="bg-white p-4">
            {/* Headline */}
            <h1 className="text-2xl font-bold text-gray-800">
              Attack: Missed threat to Union Minister Jaishankar.. Khalistanis
              attempted attack (video viral)
            </h1>

            {/* Author Info */}
            <p className="text-sm text-gray-600 mt-2">
              By <span className="font-semibold">Disha</span>, Webdesk |
              Updated: 6 Mar 2025 9:29 AM
            </p>

            {/* Image Section */}
            <div className="mt-4">
              <Image
                src="/test2.jpg"
                alt="News Image"
                width={800}
                height={400}
                className="w-full rounded-lg shadow"
              />
            </div>

            {/* Content */}
            <p className="mt-4 text-gray-700 leading-relaxed">
              Union External Affairs Minister Jaishankar, who is currently on a
              tour of London, has averted a major threat. While he was leaving
              in a car after attending an event at a think tank in Chatham
              House, Khalistani sympathizers there created a commotion by
              raising slogans against Jaishankar. Suddenly, an assailant
              bypassed the security personnel and rushed to his car at lightning
              speed and tried to attack Union Minister Jaishankar...
            </p>

            {/* Related Article */}
            <div className="mt-6 border-t pt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Also Read:
              </h2>
              <a href="#" className="text-blue-600 hover:underline">
                Ukraine-US: America gave another shock to Ukraine.. What did it
                do this time?
              </a>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Union External Affairs Minister Jaishankar, who is currently on
                a tour of London, has averted a major threat. While he was
                leaving in a car after attending an event at a think tank in
                Chatham House, Khalistani sympathizers there created a commotion
                by raising slogans against Jaishankar. Suddenly, an assailant
                bypassed the security personnel and rushed to his car at
                lightning speed and tried to attack Union Minister Jaishankar...
              </p>
            </div>

            {/* Related Article */}
            <div className="mt-6 border-t pt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Also Read:
              </h2>
              <a href="#" className="text-blue-600 hover:underline">
                Ukraine-US: America gave another shock to Ukraine.. What did it
                do this time?
              </a>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Union External Affairs Minister Jaishankar, who is currently on
                a tour of London, has averted a major threat. While he was
                leaving in a car after attending an event at a think tank in
                Chatham House, Khalistani sympathizers there created a commotion
                by raising slogans against Jaishankar. Suddenly, an assailant
                bypassed the security personnel and rushed to his car at
                lightning speed and tried to attack Union Minister Jaishankar...
              </p>
            </div>
          </div>
          <div className="bg-white p-4  ">
            {/* Tags Section */}
            <div className="flex gap-2 flex-wrap">
              <span className="bg-black text-white text-sm font-semibold px-3 py-1 rounded">
                Tags
              </span>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="border border-gray-400 text-gray-800 text-sm font-medium px-3 py-1 rounded cursor-pointer hover:bg-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Related Posts Section */}
            <h2 className="text-xl font-semibold mt-6">Related Post</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {relatedPosts.map((post) => (
                <div key={post.id} className="flex flex-col">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full h-40 object-cover"
                  />
                  <p className="mt-2 text-gray-800 text-sm font-medium">
                    {post.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full sm:w-3/12  border border-gray-300 md:sticky md:top-0">
          <div className="bg-white p-4">
            {/* Latest News Header */}
            <h2 className="bg-blue-700 text-white text-lg font-bold py-2 px-3">
              Latest News
            </h2>

            {/* News List */}
            <div className="mt-2 divide-y divide-gray-300">
              {relatedPosts.map((news) => (
                <div key={news.id} className="flex gap-3 py-3">
                  {/* News Image */}
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={80}
                    height={60}
                    className="w-20 h-16 rounded-lg object-cover shadow-sm"
                  />
                  {/* News Title */}
                  <p className="text-sm text-gray-800 font-medium">
                    {news.title}
                  </p>
                </div>
              ))}
              {relatedPosts.map((news) => (
                <div key={news.id} className="flex gap-3 py-3">
                  {/* News Image */}
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={80}
                    height={60}
                    className="w-20 h-16 rounded-lg object-cover shadow-sm"
                  />
                  {/* News Title */}
                  <p className="text-sm text-gray-800 font-medium">
                    {news.title}
                  </p>
                </div>
              ))}
              {relatedPosts.map((news) => (
                <div key={news.id} className="flex gap-3 py-3">
                  {/* News Image */}
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={80}
                    height={60}
                    className="w-20 h-16 rounded-lg object-cover shadow-sm"
                  />
                  {/* News Title */}
                  <p className="text-sm text-gray-800 font-medium">
                    {news.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-4">
            {/* Latest News Header */}
            <h2 className="bg-blue-700 text-white text-lg font-bold py-2 px-3">
              Latest News
            </h2>

            {/* News List */}
            <div className="mt-2 divide-y divide-gray-300">
              {relatedPosts.map((news) => (
                <div key={news.id} className="flex gap-3 py-3">
                  {/* News Image */}
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={80}
                    height={60}
                    className="w-20 h-16 rounded-lg object-cover shadow-sm"
                  />
                  {/* News Title */}
                  <p className="text-sm text-gray-800 font-medium">
                    {news.title}
                  </p>
                </div>
              ))}
              {relatedPosts.map((news) => (
                <div key={news.id} className="flex gap-3 py-3">
                  {/* News Image */}
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={80}
                    height={60}
                    className="w-20 h-16 rounded-lg object-cover shadow-sm"
                  />
                  {/* News Title */}
                  <p className="text-sm text-gray-800 font-medium">
                    {news.title}
                  </p>
                </div>
              ))}
              {relatedPosts.map((news) => (
                <div key={news.id} className="flex gap-3 py-3">
                  {/* News Image */}
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={80}
                    height={60}
                    className="w-20 h-16 rounded-lg object-cover shadow-sm"
                  />
                  {/* News Title */}
                  <p className="text-sm text-gray-800 font-medium">
                    {news.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
