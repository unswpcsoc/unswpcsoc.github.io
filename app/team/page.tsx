import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Team() {
  // Executive team with photos
  const executives = [
    {
      name: "Martin Zlatinov",
      title: "President",
      photo: null 
    },
    {
      name: "Maahir Ahmed",
      title: "Treasurer",
      photo: "/img/team/maahir-ahmed.jpg"
    },
    {
      name: "Jorge Underhill",
      title: "Secretary",
      photo: null
    },
        {
      name: "John McDonnell",
      title: "Welfare Officer",
      photo: null
    }
  ];

  const portfolios = [
    {
      director: "Harman Singh, Ryan Le & Patrick Kyaw",
      title: "Directors of Events",
      subcommittee: [
        "Li Wanze (Grace)",
        "Zachary Liam Lam",
        "Will Tran",
        "Veli",
        "Gavriana Lianti",
        "Haley Dixon"
      ]
    },
    {
      director: "Aurelia Maxima & Jasmine Heit",
      title: "Directors of Marketing",
      subcommittee: [
        "Leslie Siu",
        "Vanya Gupta"
      ]
    },
    {
      director: "Jorge Underhill",
      title: "Director of Hardware",
      subcommittee: [
        "Chan Jyun Jing (JJ)",
        "Julian Alcord",
        "Evan Lister"
      ]
    },
    {
      director: "Alex Gao",
      title: "Director of DevOps",
      subcommittee: []
    }
  ];

  return (
    <>
      <Navigation />

      <main className="pt-20 min-h-screen">
        {/* Header Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Team
              </h1>
              <p className="text-xl text-gray-300">
                Meet the committee behind PCSoc
              </p>
            </div>
          </div>
        </section>

        {/* Executives Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">2026 Executive Team</h2>
              <div className="flex justify-center gap-6">
                {executives.map((exec, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow w-48">
                    <div className="aspect-square bg-gray-200 flex items-center justify-center">
                      {exec.photo ? (
                        <img
                          src={exec.photo}
                          alt={exec.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-gray-400 text-5xl">👤</div>
                      )}
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="text-base font-bold text-gray-800 mb-1">
                        {exec.name}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {exec.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Directors and Subcommittees Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Directors & Subcommittees</h2>
              <div className="space-y-6">
                {portfolios.map((portfolio, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Director - Left Side */}
                      <div className="border-r border-gray-200 pr-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {portfolio.director}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {portfolio.title}
                        </p>
                      </div>

                      {/* Subcommittee - Right Side */}
                      <div className="pl-0 md:pl-6">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                          Subcommittee Members
                        </h4>
                        <ul className="space-y-2">
                          {portfolio.subcommittee.map((member, memberIndex) => (
                            <li key={memberIndex} className="text-gray-700">
                              • {member}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Join the Committee */}
              <div className="mt-16 bg-gray-900 rounded-xl p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Want to Join the Committee?</h2>
                <p className="text-lg text-gray-300 mb-6">
                  We&apos;re always looking for passionate members to join our team! Keep your eyes open for subcommittee recruitment in our Discord.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
