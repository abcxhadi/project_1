import React, { useState } from 'react';
import { 
  Car, 
  Phone,
  Menu,
  X
} from 'lucide-react';

const ShafeerPortfolioMinimalist = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // -----------------------
  //    DATA ARRAYS
  // -----------------------
  // Keeping all the original data arrays
  const cars = [
    {
      name: 'Toyota Previa',
      image: '/previa.jpg',
      capacity: '9 Passengers',
      features: ['Comfortable Seating', 'Air Conditioning', 'Smooth Ride']
    },
    {
      name: 'Kia Carnival',
      image: '/carnival.jpg',
      capacity: '8 Passengers',
      features: ['Spacious Interior', 'Premium Comfort', 'Modern Amenities']
    }
  ];

  // Other data arrays remain the same...
  const services = [
    // Service data...
  ];

  const experienceItems = [
    // Experience data...
  ];

  const qualitiesItems = [
    // Qualities data...
  ];

  const navLinks = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "fleet", label: "Fleet" },
    { id: "booking", label: "Book Now" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased">
      
      {/* NEW HEADER - Inspired by Hans design */}
      <header className="fixed w-full bg-gray-100 text-gray-900 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo area - minimalist approach */}
          <div>
            <h1 className="text-2xl md:text-3xl font-light tracking-wider uppercase">Shafeer</h1>
          </div>
          
          {/* Right side elements */}
          <div className="flex items-center space-x-8">
            {/* Cart/contact icon */}
            <a href="tel:+971501781981" className="flex items-center">
              <Phone className="w-4 h-4 text-gray-900" />
              <span className="ml-2 hidden md:inline text-sm">+971 50 178 1981</span>
            </a>
            
            {/* Menu text on desktop */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-sm uppercase tracking-wider"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>
      
      {/* Full screen menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-100 text-gray-900 z-40 flex items-center justify-center">
          <div className="container mx-auto px-6">
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl md:text-3xl font-light uppercase tracking-wider hover:text-amber-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="tel:+971501781981" 
                className="text-lg mt-12 flex items-center"
              >
                <Phone className="w-5 h-5 mr-3" />
                <span>+971 50 178 1981</span>
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* HERO SECTION - Adjusted for new header */}
      <section id="hero" className="relative h-screen pt-24 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/wall.jpg"
            alt="Professional Chauffeur Service" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <div className="container relative mx-auto px-6 z-20 flex flex-col items-center md:items-start">
          <div className="max-w-xl md:ml-12">
            <p className="text-sm font-light text-amber-400 mb-2 tracking-widest">PREMIUM CHAUFFEUR SERVICE</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white tracking-wide leading-tight">
              Luxury Travel <br/>
              <span className="text-amber-400">With Elegance</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
              Discreet, professional transportation across Dubai and the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#booking"
                className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-light rounded transition-all tracking-wide"
              >
                Book Now
              </a>
              <a 
                href="tel:+971501781981"
                className="px-8 py-3 border border-gray-400 hover:border-amber-400 text-gray-400 hover:text-amber-400 font-light rounded flex items-center justify-center transition-all"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <img 
                src="/api/placeholder/600/800" 
                alt="Shafeer - Professional Chauffeur" 
                className="w-full"
              />
            </div>
            <div className="md:col-span-7">
              <p className="text-sm uppercase tracking-widest mb-4">About</p>
              <h2 className="text-4xl mb-8">
                A Decade of Excellence in Premium Transportation
              </h2>
              <p className="text-lg mb-8 max-w-2xl">
                With over a decade of experience as a professional chauffeur in Dubai, I offer premium transportation services tailored to meet the highest standards of comfort, reliability, and discretion.
              </p>
              <p className="text-lg mb-12 max-w-2xl">
                Whether you need airport transfers, full-day service for business meetings, or a dependable driver for your special occasions, I provide a personalized experience with impeccable attention to detail.
              </p>
              
              {/* Qualities - Clean grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                {qualitiesItems.map((item, index) => (
                  <div key={index} className="border-t border-stone-300 pt-6">
                    <div className="flex flex-col">
                      {item.icon}
                      <h3 className="font-medium mt-4 mb-2">{item.title}</h3>
                      <p className="text-stone-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 bg-stone-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {experienceItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-5xl mt-6 mb-2">
                  {item.value}
                </h3>
                <p className="text-stone-600">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <p className="text-sm uppercase tracking-widest mb-4 text-center">Services</p>
          <h2 className="text-4xl text-center mb-16">
            Transportation Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl mb-3">
                  {service.type}
                </h3>
                <p className="text-stone-600 mb-6">{service.description}</p>
                <div className="mt-auto pt-6 border-t border-stone-300 flex justify-between items-center">
                  <span className="font-medium">{service.price}</span>
                  <a 
                    href="#booking"
                    className="flex items-center text-sm uppercase tracking-widest"
                  >
                    Book 
                    <ChevronDown className="w-4 h-4 ml-1 transform rotate-[-90deg]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET SECTION */}
      <section id="fleet" className="py-24 bg-stone-200">
        <div className="container mx-auto px-6">
          <p className="text-sm uppercase tracking-widest mb-4 text-center">Fleet</p>
          <h2 className="text-4xl text-center mb-16">
            Premium Vehicles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {cars.map((car, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden mb-6">
                  <img 
                    src={car.image}
                    alt={car.name}
                    className="w-full transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl mb-2">
                  {car.name}
                </h3>
                <p className="text-stone-600 mb-4">{car.capacity}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {car.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-stone-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <p className="text-sm uppercase tracking-widest mb-4 text-center">Testimonials</p>
          <h2 className="text-4xl text-center mb-16">
            Client Experiences
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col">
                <div className="mb-6">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <p className="text-lg italic mb-8">"{testimonial.text}"</p>
                <div className="mt-auto pt-6 border-t border-stone-300">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-stone-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-24 bg-stone-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <p className="text-sm uppercase tracking-widest mb-4">Reservations</p>
              <h2 className="text-4xl mb-8">
                Book Your Premium Transportation
              </h2>
              <p className="text-lg mb-12 max-w-2xl">
                Contact me directly to arrange your chauffeur service. I'm available for airport transfers, full-day bookings, corporate events, and more.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-stone-600">+971 50 178 1981</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-stone-600">booking@shafeer-chauffeur.ae</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Service Area</h3>
                    <p className="text-stone-600">Dubai & All Emirates</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-widest mb-2">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-4 bg-stone-100 border border-stone-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full p-4 bg-stone-100 border border-stone-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full p-4 bg-stone-100 border border-stone-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm uppercase tracking-widest mb-2">
                    Service Type
                  </label>
                  <select className="w-full p-4 bg-stone-100 border border-stone-300">
                    <option>Full Day Service</option>
                    <option>Half Day Service</option>
                    <option>Transfer Service</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm uppercase tracking-widest mb-2">
                    Date & Time
                  </label>
                  <input 
                    type="datetime-local" 
                    className="w-full p-4 bg-stone-100 border border-stone-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea 
                    rows="4" 
                    className="w-full p-4 bg-stone-100 border border-stone-300"
                    placeholder="Please provide any additional details about your transportation needs."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-stone-900 text-stone-100 text-sm uppercase tracking-widest"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-stone-900 text-stone-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-700">
            <div className="md:col-span-5">
              <h2 className="text-2xl tracking-wide mb-6">SHAFEER</h2>
              <p className="text-stone-400 max-w-md">
                Premium chauffeur service in Dubai and across the UAE. 
                Professional, reliable, and discreet transportation tailored to your needs.
              </p>
            </div>
            
            <div className="md:col-span-3 md:col-start-8">
              <h3 className="text-sm uppercase tracking-widest mb-6">Navigation</h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={`#${link.id}`} 
                      className="text-stone-400 hover:text-stone-100 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="text-sm uppercase tracking-widest mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-stone-400">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+971 50 178 1981</span>
                </li>
                <li className="flex items-center text-stone-400">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>booking@shafeer-chauffeur.ae</span>
                </li>
                <li className="flex items-center text-stone-400">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>Dubai, UAE</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 text-center text-stone-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Shafeer Professional Chauffeur Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShafeerPortfolioRedesign;