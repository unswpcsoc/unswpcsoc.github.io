import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSlideshow from '@/components/HeroSlideshow';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroSlideshow />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            UNSW Computer Enthusiasts Society
          </h1>
          <a
            href="#about"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-4 px-8 rounded-lg text-lg uppercase transition-colors"
          >
            About Us
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              About Us
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Welcome to the UNSW Computer Enthusiasts Society (aka PCSoc)
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Our aim is to provide an opportunity for members to learn and interact with computers and the computer hardware industry by connecting them with others who share similar passions. It doesn't matter if you are completely new to building computers or if you are a seasoned overclocker and modder - our society will have content and events to inform, educate and entertain you.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Featured Events
            </h2>
            <p className="text-lg text-gray-600">
              Check out our major events and competitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Oceanic Prodigies */}
            <div className="relative rounded-xl shadow-xl overflow-hidden h-96">
              <img
                src="/img/events/oceanic-prodigies-2.jpg"
                alt="Oceanic Prodigies"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative p-8 text-white h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-12 h-12 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    <h3 className="text-3xl font-bold drop-shadow-lg">Oceanic Prodigies</h3>
                  </div>
                  <p className="drop-shadow-md mb-4 text-lg">
                    Australia's only LAN intervarsity esports tournament featuring the best university teams competing live with prizes over $5,000!
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 drop-shadow-md">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      </svg>
                      <span>The Roundhouse, UNSW</span>
                    </div>
                    <div className="flex items-center gap-2 drop-shadow-md">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                      </svg>
                      <span>Free spectator entry + prizes!</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href="/events#oceanic-prodigies"
                    className="inline-block bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Learn More
                  </a>
                  <a
                    href="https://oceanicprodigies.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition-colors shadow-lg"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>

            {/* MegaLan */}
            <div className="relative bg-black rounded-xl shadow-xl overflow-hidden h-96">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <img
                  src="/img/megalan-logo.png"
                  alt="MegaLAN"
                  className="w-96 h-auto"
                />
              </div>
              <div className="relative p-8 text-white h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="/img/megalan-logo.png"
                      alt="MegaLAN Logo"
                      className="h-12 w-auto"
                    />
                  </div>
                  <p className="mb-4 text-lg">
                    Australia's biggest LAN party! Bring your PC, meet gamers, and game all night long with amazing prizes.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      </svg>
                      <span>UNSW Campus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                      </svg>
                      <span>Annual event</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href="/events#megalan"
                    className="inline-block bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Learn More
                  </a>
                  <a
                    href="https://megalan.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition-colors shadow-lg"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Join Us!
            </h2>
            <p className="text-lg text-gray-600">
              Interested in joining us? Follow the links below!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Row 1 */}
            <a
              href="https://www.facebook.com/groups/UNSWPCMR/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <svg className="w-16 h-16 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <p className="font-medium text-gray-700">Facebook Group</p>
            </a>

            <a
              href="http://discord.gg/unswpcsoc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <svg className="w-16 h-16 text-indigo-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <p className="font-medium text-gray-700">Discord</p>
            </a>

            <a
              href="https://steamcommunity.com/groups/unswpcsoc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <svg className="w-16 h-16 text-gray-700 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524c2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159c0 1.875-1.515 3.396-3.39 3.396c-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25c1.297.539 2.793-.076 3.332-1.375c.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455c-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015c-1.665 0-3.015 1.353-3.015 3.015c0 1.665 1.35 3.015 3.015 3.015c1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266c1.249 0 2.266 1.014 2.266 2.266c0 1.251-1.017 2.265-2.266 2.265c-1.253 0-2.265-1.014-2.265-2.265z"/>
              </svg>
              <p className="font-medium text-gray-700">Steam Group</p>
            </a>

            {/* Row 2 */}
            <a
              href="https://www.facebook.com/unswpcsoc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <svg className="w-16 h-16 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
              <p className="font-medium text-gray-700">Facebook Page</p>
            </a>

            <a
              href="http://unswpcsoc.us12.list-manage.com/subscribe?u=a5b64fb656f222a0d51ab9fd3&id=4476ef8393"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <svg className="w-16 h-16 text-yellow-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
              <p className="font-medium text-gray-700">Newsletter</p>
            </a>

            <a
              href="https://orgsync.com/129400/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <svg className="w-16 h-16 text-gray-700 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              <p className="font-medium text-gray-700">Arc @ UNSW (OrgSync)</p>
            </a>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Sponsors & Partners
            </h2>
            <p className="text-lg text-gray-600">
              Supporting our events and community
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Sponsor logos */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-12 items-center justify-items-center mb-12 max-w-3xl mx-auto">
              <div className="bg-gray-900 rounded-lg p-8 hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
                <img
                  src="/img/sponsors/aorus.png"
                  alt="Gigabyte AORUS"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="bg-gray-900 rounded-lg p-8 hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
                <img
                  src="/img/sponsors/arc.png"
                  alt="Arc @ UNSW"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Interested in Sponsoring?</h3>
              <p className="text-lg text-gray-300 mb-6">
                Partner with us to reach UNSW's gaming and tech enthusiast community. Support our events and help us create amazing experiences!
              </p>
              <a
                href="mailto:unswpcsoc@gmail.com?subject=Sponsorship Inquiry"
                className="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <Image
                src="/img/pcsoc_web.svg"
                alt="PCSoc Logo"
                width={300}
                height={300}
                className="w-64 h-64"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contact Us
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                For any general or business enquiries please email us at the address below:
              </p>
              <a
                href="mailto:unswpcsoc@gmail.com"
                className="inline-flex items-center gap-3 text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
                <span className="text-xl">unswpcsoc@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
