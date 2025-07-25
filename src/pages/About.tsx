export default function About() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Our Mission</h1>

        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-8">
              We envision a world where sustainable afforestation practices combat climate change
              and create thriving ecosystems for future generations. Through partnerships with 
              dedicated NGOs and community engagement, we're working to make this vision a reality.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Saalumarada Thimmakka's Legacy</h2>
            <p className="text-gray-600 mb-4">
              Saalumarada Thimmakka, an environmental activist from Karnataka, has become a symbol
              of grassroots environmental conservation in India. Starting in the early 1960s, she
              and her husband began planting banyan trees along a four-kilometer stretch of highway
              between Hulikal and Kudur.
            </p>
            <p className="text-gray-600 mb-4">
              Despite facing poverty and lack of formal education, Thimmakka nurtured hundreds of
              banyan trees, treating them as her own children. Her dedication to environmental
              conservation earned her numerous awards, including the Padma Shri in 2019.
            </p>
            <p className="text-gray-600">
              Today, the trees she planted have grown into a massive canopy, providing shade,
              shelter, and environmental benefits to countless people. Her work demonstrates how
              individual action, sustained over time, can create lasting environmental impact
              and inspire generations of conservationists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}