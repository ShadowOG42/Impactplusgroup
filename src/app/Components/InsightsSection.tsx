"use client";

 

const InsightsSection = () => {
  // Static Insight Cards (now includes optional file links)
  const staticInsights = [
    {
      title: "Digital Transformation",
      description:
        "Explore how businesses can leverage technology to improve efficiency and customer experiences.",
      file_url:
        "https://example.com/digital-transformation.pdf", // Replace with actual link
    },
    {
      title: "Leadership Strategies",
      description:
        "Insights into modern leadership styles that foster innovation and team growth.",
      file_url:
        "https://example.com/leadership-strategies.pdf", // Replace with actual link
    },
    {
      title: "Market Trends",
      description:
        "Stay updated with the latest industry shifts and opportunities for sustainable business growth.",
      file_url:
        "https://example.com/market-trends.pdf", // Replace with actual link
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        Latest Insights
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
        Stay ahead with articles, research, and strategies that drive
        transformation and growth.
      </p>

      {/* Insights Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {staticInsights.map((insight, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition flex flex-col justify-between text-center h-56"
          >
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {insight.title}
              </h3>
              <p className="text-gray-600 mb-4">{insight.description}</p>
            </div>

            {insight.file_url && (
              <a
                href={insight.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                📄 View File
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsightsSection;
