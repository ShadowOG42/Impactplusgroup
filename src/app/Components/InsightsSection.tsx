"use client";
import React from "react";

const InsightsSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        Latest Insights
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
        Stay ahead with articles, research, and strategies that drive
        transformation and growth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Digital Transformation
          </h3>
          <p className="text-gray-600">
            Explore how businesses can leverage technology to improve
            efficiency and customer experiences.
          </p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Leadership Strategies
          </h3>
          <p className="text-gray-600">
            Insights into modern leadership styles that foster innovation and
            team growth.
          </p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Market Trends
          </h3>
          <p className="text-gray-600">
            Stay updated with the latest industry shifts and opportunities for
            sustainable business growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
