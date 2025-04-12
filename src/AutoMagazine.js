import { useState } from 'react';
import { Search, Menu, X, ChevronRight, Heart, Share2, Clock, User } from 'lucide-react';

export default function AutoMagazine() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('featured');

  const featuredArticles = [
    {
      id: 1,
      title: "2026 Tesla Model 3 Long Range Review",
      excerpt: "The latest iteration of Tesla's popular sedan brings impressive range and new tech features.",
      image: "/images/tesla.avif",
      category: "Reviews",
      readTime: "8 min read",
      author: "Alex Morgan",
      date: "April 8, 2025"
    },
    {
      id: 2,
      title: "Porsche Unveils All-Electric Macan",
      excerpt: "Porsche's compact SUV goes fully electric with up to 402 miles of range and 600 horsepower.",
      image: "/images/macan.avif",
      category: "News",
      readTime: "5 min read",
      author: "Sarah Johnson",
      date: "April 5, 2025"
    },
    {
      id: 3,
      title: "The Future of Hydrogen Fuel Cell Vehicles",
      excerpt: "Is hydrogen the answer to sustainable transportation? We explore the technology and infrastructure challenges.",
      image: "/images/hydrogen.avif",
      category: "Features",
      readTime: "12 min read",
      author: "Michael Chen",
      date: "April 2, 2025"
    }
  ];

  const latestNews = [
    {
      id: 4,
      title: "BMW Announces New M5 with Hybrid Powertrain",
      excerpt: "The legendary M5 gets electrified with a combined output of 750 horsepower.",
      image: "/images/bmw.webp",
      category: "News",
      readTime: "4 min read",
      date: "April 10, 2025"
    },
    {
      id: 5,
      title: "Ford Mustang GT500 Sets New Nürburgring Record",
      excerpt: "The American muscle car breaks the 7-minute barrier at the famous German track.",
      image: "/images/ford.avif",
      category: "News",
      readTime: "3 min read",
      date: "April 9, 2025"
    },
    {
      id: 6,
      title: "Rivian Opens New Gigafactory in Texas",
      excerpt: "The EV startup expands production capacity with a new state-of-the-art facility.",
      image: "/images/rivian.jpg",
      category: "News",
      readTime: "5 min read",
      date: "April 7, 2025"
    },
    {
      id: 7,
      title: "Volkswagen ID.7 Wins Car of the Year Award",
      excerpt: "The German automaker's flagship electric sedan takes home the prestigious title.",
      image: "/images/vw.webp",
      category: "News",
      readTime: "4 min read",
      date: "April 6, 2025"
    }
  ];

  const carReviews = [
    {
      id: 8,
      title: "2025 Lucid Air Grand Touring",
      rating: 4.8,
      image: "/images/lucid.webp",
      category: "Luxury EV",
      pros: ["520-mile range", "Ultra-fast charging", "Luxurious interior"],
      cons: ["High price tag", "Limited service network"]
    },
    {
      id: 9,
      title: "2025 Toyota GR Corolla",
      rating: 4.5,
      image: "/images/toyota.avif",
      category: "Hot Hatch",
      pros: ["Thrilling performance", "Manual transmission", "Rally-inspired AWD"],
      cons: ["Firm ride", "Modest cargo space"]
    },
    {
      id: 10,
      title: "2025 Jeep Wrangler 4xe",
      rating: 4.3,
      image: "/images/jeep.avif",
      category: "Plug-in Hybrid SUV",
      pros: ["Off-road capability", "25-mile electric range", "Tax incentives"],
      cons: ["Expensive", "Wind noise at highway speeds"]
    }
  ];

  const trendingTopics = [
    "Electric Vehicles", "Autonomous Driving", "Hybrid SUVs", 
    "Car Maintenance", "Classic Cars", "Future Concepts",
    "Performance Tuning", "Automotive Design", "Racing News"
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">AUTO<span className="text-red-600">PULSE</span></h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-8">
                <a href="#" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">News</a>
                <a href="#" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">Reviews</a>
                <a href="#" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">Features</a>
                <a href="#" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">Videos</a>
                <a href="#" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">Buyers Guide</a>
              </nav>
              <div className="flex items-center space-x-4">
                <button className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none">
                  <Search size={20} />
                </button>
                <button className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none">
                  <User size={20} />
                </button>
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">News</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Reviews</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Features</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Videos</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Buyers Guide</a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-96 bg-gray-800 relative overflow-hidden">
            <img 
              src="/images/lambo.jpg"
              alt="Latest sports car" 
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="inline-block bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded-full mb-3">Featured</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-xl mb-2">
                2025 Supercar Showdown: The Ultimate Performance Comparison
              </h2>
              <p className="text-gray-200 mb-4 max-w-2xl">
                We pit the newest hypercars against each other on track to crown the ultimate performance king.
              </p>
              <div className="flex items-center text-gray-300 text-sm">
                <Clock size={16} className="mr-1" />
                <span className="mr-4">15 min read</span>
                <span className="mr-4">April 11, 2025</span>
                <span>By James Wilson</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('featured')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'featured' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Featured Articles
              </button>
              <button
                onClick={() => setActiveTab('latest')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'latest' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Latest News
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'reviews' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Car Reviews
              </button>
            </nav>
          </div>

          {/* Featured Articles */}
          {activeTab === 'featured' && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <div key={article.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={article.image} alt={article.title} />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-600">{article.category}</p>
                      <a href="#" className="block mt-2">
                        <h3 className="text-xl font-semibold text-gray-900">{article.title}</h3>
                        <p className="mt-3 text-base text-gray-500">{article.excerpt}</p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <span className="sr-only">{article.author}</span>
                        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{article.author}</p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime="2020-03-16">{article.date}</time>
                          <span aria-hidden="true">&middot;</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Latest News */}
          {activeTab === 'latest' && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestNews.map((news) => (
                <div key={news.id} className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden bg-white">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full md:w-48 object-cover" src={news.image} alt={news.title} />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-600">{news.category}</p>
                      <a href="#" className="block mt-2">
                        <h3 className="text-lg font-semibold text-gray-900">{news.title}</h3>
                        <p className="mt-3 text-base text-gray-500">{news.excerpt}</p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-1" />
                      <span className="mr-4">{news.readTime}</span>
                      <time dateTime="2020-03-16">{news.date}</time>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Car Reviews */}
          {activeTab === 'reviews' && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {carReviews.map((review) => (
                <div key={review.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={review.image} alt={review.title} />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium text-red-600">{review.category}</p>
                        <div className="flex items-center">
                          <span className="text-sm font-bold text-gray-900">{review.rating}</span>
                          <span className="text-sm text-gray-500">/5</span>
                        </div>
                      </div>
                      <a href="#" className="block mt-2">
                        <h3 className="text-xl font-semibold text-gray-900">{review.title}</h3>
                      </a>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">Pros:</h4>
                        <ul className="mt-2 text-sm text-gray-500">
                          {review.pros.map((pro, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 mr-2">+</span> {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium text-gray-900">Cons:</h4>
                        <ul className="mt-2 text-sm text-gray-500">
                          {review.cons.map((con, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-red-500 mr-2">-</span> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                      <a href="#" className="text-red-600 text-sm font-medium flex items-center">
                        Read full review <ChevronRight size={16} className="ml-1" />
                      </a>
                      <div className="flex space-x-2">
                        <button className="p-1 rounded-full text-gray-400 hover:text-red-600">
                          <Heart size={20} />
                        </button>
                        <button className="p-1 rounded-full text-gray-400 hover:text-blue-600">
                          <Share2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter and Topics */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Newsletter Signup */}
              <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-6">Get the latest automotive news, reviews, and exclusive content delivered straight to your inbox.</p>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                  <button 
                    type="submit"
                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              
              {/* Trending Topics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Trending Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-red-600 hover:text-white transition-colors"
                    >
                      {topic}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">AUTO<span className="text-red-600">PULSE</span></h2>
              <p className="text-gray-400">The ultimate destination for automotive enthusiasts, with the latest news, in-depth reviews, and exclusive content.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Reviews</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Comparisons</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Videos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Buyer's Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Maintenance Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Car Comparisons</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Electric Vehicles</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Future Tech</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 AUTOPULSE Magazine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}