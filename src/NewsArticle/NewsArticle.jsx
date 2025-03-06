export default function NewsArticle() {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-900">
          Surya, who was in jail for five days, received shocking comments saying that it really felt like that!
        </h1>
        <p className="text-sm text-gray-500">by Hamsa | 5 Mar 2025 3:43 PM</p>
  
        <div className="mt-4 flex flex-wrap gap-4">
          <img 
            src="./test1.jpg" 
            alt="Surya" 
            className="w-1/2 h-auto rounded-lg"
          />
  
          <div className="w-1/2">
            <p className="mt-4 text-gray-700">
              <strong className="font-bold">Disha. Movie:</strong> Kollywood star hero Surya is starring in the latest film 'Retro'. This...
            </p>
  
            <div className="mt-6 flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Share</button>
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">Comment</button>
            </div>
          </div>
        </div>
  
        <aside className="mt-8 border-t border-gray-300 pt-8">
          <h2 className="text-lg font-semibold text-gray-900">Latest News</h2>
          <ul className="mt-4 space-y-2">
            <li className="text-blue-500 hover:underline cursor-pointer">Unpaid bills... Farmers' protests</li>
            <li className="text-blue-500 hover:underline cursor-pointer">Surya, who was in jail for five days, received shocking comments...</li>
            <li className="text-blue-500 hover:underline cursor-pointer">TNGOs should participate in the comprehensive development...</li>
            <li className="text-blue-500 hover:underline cursor-pointer">Jana Reddy: If they scold me, I will fall...</li>
          </ul>
        </aside>
      </div>
    );
  }
  