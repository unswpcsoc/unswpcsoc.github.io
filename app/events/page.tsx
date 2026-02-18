import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Events() {
  return (
    <>
      <Navigation />

      <main className="pt-20 min-h-screen">
        {/* Header Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Flagship Events
              </h1>
              <p className="text-xl text-gray-300">
                From eSports tournaments to epic LAN parties
              </p>
            </div>
          </div>
        </section>

        {/* Oceanic Prodigies Section */}
        <section id="oceanic-prodigies" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="relative px-8 py-12 text-white">
                  <img
                    src="/img/events/oceanic-prodigies-3.jpg"
                    alt="Oceanic Prodigies Event"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <svg className="w-16 h-16 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                      <h2 className="text-4xl font-bold drop-shadow-lg">Oceanic Prodigies</h2>
                    </div>
                    <p className="text-xl drop-shadow-md">
                      Australia&apos;s Only LAN Intervarsity Esports Tournament
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="prose max-w-none mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">About the Tournament</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      Oceanic Prodigies is Australia&apos;s only LAN intervarsity esports tournament, presented by UNSW PCSoc and Arc@UNSW. Experience live competition with a physical audience as Australia&apos;s best university teams battle it out at The Roundhouse, UNSW Kensington Campus.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      Featuring teams from ANU, UTS, Macquarie, UNSW, University of Sydney, Western Sydney University, and University of Wollongong competing for over $5,000 in prizes plus hardware from sponsors like Gigabyte AORUS.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        </svg>
                        For Competitors
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• University team competition</li>
                        <li>• Live LAN tournament</li>
                        <li>• Over $5,000 in prizes</li>
                        <li>• Gaming hardware prizes</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                        <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                        </svg>
                        For Spectators
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• FREE entry to watch live</li>
                        <li>• Free fairy floss & popcorn</li>
                        <li>• Pick&apos;ems prediction game</li>
                        <li>• Free Raffles! (up to $1,300 value!)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg text-white mb-8">
                    <h4 className="font-bold text-xl mb-4">Event Details</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-200">
                      <div>
                        <div className="font-semibold text-blue-300">Location</div>
                        <div>UNSW Kensington Campus</div>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-300">Entry</div>
                        <div>Free tickets via Humanitix</div>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-300">Contact</div>
                        <div>hello@megalan.com.au</div>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-300">Main Sponsor</div>
                        <div>Gigabyte AORUS</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Connect & Stay Updated</h4>
                    <p className="mb-4">Follow us for tournament announcements, registration details, and live updates!</p>
                    <div className="flex flex-wrap gap-3">
                      <a href="https://oceanicprodigies.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 font-bold py-2 px-6 rounded-lg hover:bg-blue-50 transition-colors">
                        Official Website
                      </a>
                      <a href="https://discord.com/invite/wknQ7ey" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-white text-white font-bold py-2 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                        Join Discord
                      </a>
                      <a href="https://www.youtube.com/@OceanicProdigies" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-white text-white font-bold py-2 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MegaLan Section */}
        <section id="megalan" className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="relative px-8 py-12 text-white bg-black overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/img/megalan-logo.png" alt="" className="w-full h-full object-contain opacity-10" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <img src="/img/megalan-logo.png" alt="MegaLan" className="h-16 w-auto" />
                    </div>
                    <p className="text-xl text-gray-200">
                      LAN Party
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="prose max-w-none mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">About MegaLan</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      MegaLan is Australia&apos;s premier LAN party event presented by UNSW PCSoc, bringing hundreds of gamers together for an unforgettable weekend of gaming, competitions, and community. Bring your PC, meet fellow gamers, and experience gaming the way it was meant to be played - together!
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-red-50 p-6 rounded-lg text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">24+</div>
                      <div className="text-gray-700 font-medium">Hours of Gaming</div>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg text-center">
                      <div className="text-4xl font-bold text-orange-600 mb-2">700+</div>
                      <div className="text-gray-700 font-medium">Attendees</div>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">$1000+</div>
                      <div className="text-gray-700 font-medium">In Prizes</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg text-white mb-8">
                    <h4 className="font-bold text-2xl mb-4">What to Expect</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                        </svg>
                        <div>
                          <div className="font-semibold">BYOC (Bring Your Own Computer)</div>
                          <div className="text-gray-300 text-sm">Set up your rig and game to your hearts content</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                        </svg>
                        <div>
                          <div className="font-semibold">Tournaments & Competitions</div>
                          <div className="text-gray-300 text-sm">Multiple games, big prizes</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                        </svg>
                        <div>
                          <div className="font-semibold">Artist Alley</div>
                          <div className="text-gray-300 text-sm">Meet local artists and get exclusive merchandise</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                        </svg>
                        <div>
                          <div className="font-semibold">Chill Zones</div>
                          <div className="text-gray-300 text-sm">Relax between gaming sessions</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                        </svg>
                        <div>
                          <div className="font-semibold">Amazing Atmosphere</div>
                          <div className="text-gray-300 text-sm">Meet gamers from across Australia</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                        </svg>
                        <div>
                          <div className="font-semibold">Sponsor Booths</div>
                          <div className="text-gray-300 text-sm">Check out the latest gaming gear</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <a href="https://megalan.com.au" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold py-4 px-8 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl">
                      MegaLAN Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Updated Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Stay Updated</h2>
                <p className="text-gray-600 mb-6">
                  For the latest information about all our events, please join our community channels:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href="https://www.facebook.com/groups/UNSWPCMR/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="font-medium text-gray-700">Facebook</span>
                  </a>
                  <a
                    href="http://discord.gg/unswpcsoc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                  >
                    <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    <span className="font-medium text-gray-700">Discord</span>
                  </a>
                  <a
                    href="http://unswpcsoc.us12.list-manage.com/subscribe?u=a5b64fb656f222a0d51ab9fd3&id=4476ef8393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors"
                  >
                    <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                    </svg>
                    <span className="font-medium text-gray-700">Newsletter</span>
                  </a>
                </div>
              </div>

              {/* Placeholder for future events */}
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Events Coming Soon
                </h3>
                <p className="text-gray-600">
                  We&apos;re planning exciting events for our members. Stay tuned by joining our community channels above!
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
