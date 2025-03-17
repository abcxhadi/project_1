import React from 'react';
import { 
  Car, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle,
  MessageCircle,
  ChevronDown,
  Clock,
  Award,
  Shield,
  Star,
  Users,
  Route,
  Sun,
  Sunrise,
  Menu,
  X
} from 'lucide-react';

const ShafeerPortfolioModern = () => {
  // -----------------------
  //    DATA ARRAYS
  // -----------------------
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

  const services = [
    {
      type: 'Full Day Service',
      icon: <Sun className="w-6 h-6 text-indigo-500" />,
      description: 'Luxury chauffeur service for high-profile clients with discretion and premium comfort.',
      price: '800 AED',
      duration: 'Full Day'
    },
    {
      type: 'Half Day Service',
      icon: <Sunrise className="w-6 h-6 text-indigo-500" />,
      description: 'Reliable transportation for executives and business professionals with punctuality guaranteed.',
      price: '400 AED',
      duration: 'Half Day'
    },
    {
      type: 'Transfer Service',
      icon: <Route className="w-6 h-6 text-indigo-500" />,
      description: 'One-way transportation service with professional chauffeur.',
      price: 'From 150 AED',
      duration: 'Single Trip'
    }
  ];

  const experienceItems = [
    { title: 'Years of Experience', value: '10+', icon: <Award className="w-6 h-6 text-indigo-500" /> },
    { title: 'Clients Served', value: '5000+', icon: <Users className="w-6 h-6 text-indigo-500" /> },
    { title: 'Kilometers Driven', value: '500k+', icon: <Car className="w-6 h-6 text-indigo-500" /> },
    { title: 'VIP Clients', value: '250+', icon: <Star className="w-6 h-6 text-indigo-500" /> }
  ];

  const qualitiesItems = [
    { 
      title: 'Safe Driving', 
      description: 'Impeccable safety record throughout my career',
      icon: <Shield className="w-6 h-6 text-indigo-500" />
    },
    { 
      title: 'Punctual', 
      description: 'Always on time, every time',
      icon: <Clock className="w-6 h-6 text-indigo-500" /> 
    },
    { 
      title: 'Experienced', 
      description: 'Decade of professional driving expertise',
      icon: <Award className="w-6 h-6 text-indigo-500" /> 
    }
  ];

  const navLinks = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "fleet", label: "Fleet" },
    { id: "booking", label: "Book Now" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative font-sans">
      
      {/* HEADER - Refined with subtle transparency and modern styling */}
      <header className="fixed w-full bg-white bg-opacity-95 z-50 transition-all duration-300 shadow-sm backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Car className="w-8 h-8 text-indigo-600" />
            <div>
              <h1 className="text-xl font-bold leading-none text-gray-900">Shafeer Thazhe Veetil</h1>
              <p className="text-xs text-indigo-600 font-medium">Premium Chauffeur Service</p>
            </div>
          </div>
          
          {/* Desktop Navigation - Simplified and modern */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    className="text-sm font-medium text-gray-700 hover:text-indigo-600 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Contact button - More elegant styling */}
          <div className="hidden md:block">
            <a 
              href="tel:+971501781981" 
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors text-sm shadow-indigo-200 shadow-md"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>+971 50 178 1981</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 text-gray-600 hover:text-indigo-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION - Refined with modern gradients and cleaner layout */}
      <section id="hero" className="relative h-screen pt-20 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-indigo-900/60 to-gray-900/70 z-10"></div>
        <div className="absolute inset-0 bg-gray-900">
          <img 
            src="/wall.jpg"
            alt="Professional Chauffeur Service" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <div className="container relative mx-auto px-6 z-20 flex flex-col items-center md:items-start">
          <div className="max-w-xl md:ml-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight leading-tight">
              Luxury Travel <span className="text-indigo-400">Elevated</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
              Premium chauffeur service for discerning clients across Dubai and the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="#booking"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now
              </a>
              <a 
                href="tel:+971501781981"
                className="px-8 py-4 border border-white hover:border-indigo-400 text-white hover:text-indigo-400 font-medium rounded-full flex items-center justify-center transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Me
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-gray-300 text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-indigo-400" />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Clean, minimalist approach */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-indigo-200 rounded-full opacity-30"></div>
              <img 
                src="/driver.jpg" 
                alt="Shafeer Thazhe Veetil - Professional Chauffeur" 
                className="w-full h-auto rounded-xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gray-200 rounded-full opacity-40"></div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                About <span className="text-indigo-600">Me</span>
              </h2>
              <div className="w-20 h-0.5 bg-indigo-600 mb-8"></div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                With over a decade of experience as a professional chauffeur in Dubai, I offer premium transportation services tailored to meet the highest standards of comfort, reliability, and discretion.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Whether you need airport transfers, full-day service for business meetings, or a dependable driver for your special occasions, I provide a personalized experience with impeccable attention to detail.
              </p>
              
              {/* Qualities Grid - More elegant styling */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {qualitiesItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md hover:bg-white border border-gray-100"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-gray-900 font-medium mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION - Sleek counter design */}
      <section id="experience" className="py-24 bg-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-indigo-300">Experience</span>
          </h2>
          <div className="w-20 h-0.5 bg-indigo-300 mx-auto mb-16"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-indigo-800/50 backdrop-blur-sm p-10 rounded-lg text-center transform transition-all hover:translate-y-[-5px] hover:shadow-xl border-b-2 border-indigo-500"
              >
                <div className="inline-flex justify-center items-center w-16 h-16 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                  {item.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {item.value}
                </h3>
                <p className="text-indigo-200">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Clean card design */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            My <span className="text-indigo-600">Services</span>
          </h2>
          <div className="w-20 h-0.5 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Tailored transportation solutions for every need, providing comfort, punctuality, and professionalism on every journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transform transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
                    {service.duration}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.type}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-indigo-600 font-bold">{service.price}</span>
                    <a 
                      href="#booking"
                      className="flex items-center text-gray-700 hover:text-indigo-600 font-medium text-sm transition-colors"
                    >
                      Book Now 
                      <ChevronDown className="w-4 h-4 ml-1 transform rotate-[-90deg]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET SECTION - Elegant showcase */}
      <section id="fleet" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            My <span className="text-indigo-600">Fleet</span>
          </h2>
          <div className="w-20 h-0.5 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Modern, well-maintained vehicles providing superior comfort for all your transportation needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cars.map((car, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl border border-gray-100 group"
              >
                <div className="overflow-hidden h-64 relative">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    {car.capacity}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{car.name}</h3>
                  <ul className="space-y-3 mb-8">
                    {car.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#booking"
                    className="block text-center py-3 px-6 bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-800 rounded-lg transition-all font-medium"
                  >
                    Select This Vehicle
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION - Refined, clean form */}
      <section id="booking" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Book <span className="text-indigo-600">Now</span>
          </h2>
          <div className="w-20 h-0.5 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Fill out the form below to book your premium transportation service.
          </p>
          <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <div className="p-10">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Select Service</label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all appearance-none bg-white"
                      style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%23444%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M1.646%206.646a.5.5%200%200%201%20.708%200L8%2012.293l5.646-5.647a.5.5%200%200%201%20.708.708l-6%206a.5.5%200%200%201-.708%200l-6-6a.5.5%200%200%201%200-.708z%22%2F%3E%3C%2Fsvg%3E')", backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat" }}
                    >
                      <option value="" disabled selected>Select service type</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.type}>{service.type} - {service.price}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Select Vehicle</label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all appearance-none bg-white"
                      style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%23444%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M1.646%206.646a.5.5%200%200%201%20.708%200L8%2012.293l5.646-5.647a.5.5%200%200%201%20.708.708l-6%206a.5.5%200%200%201-.708%200l-6-6a.5.5%200%200%201%200-.708z%22%2F%3E%3C%2Fsvg%3E')", backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat" }}
                    >
                      <option value="" disabled selected>Select vehicle</option>
                      {cars.map((car, index) => (
                        <option key={index} value={car.name}>{car.name} - {car.capacity}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Time</label>
                    <input
                      type="time"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Pickup Location</label>
                    <input
                      type="text"
                      placeholder="Enter pickup address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Drop-off Location</label>
                    <input
                      type="text"
                      placeholder="Enter destination address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex-1 flex justify-center items-center"
                  >
                    Submit Booking
                  </button>
                  <a
                    href="https://wa.me/+971501781981"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200 flex-1 flex justify-center items-center"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - Minimalist contact cards */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Contact <span className="text-indigo-600">Me</span>
          </h2>
          <div className="w-20 h-0.5 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Have questions? Reach out via any of these channels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 text-center transform transition-all hover:shadow-md hover:bg-white">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Phone</h3>
              <a href="tel:+971501781981" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                +971 50 178 1981
              </a>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 text-center transform transition-all hover:shadow-md hover:bg-white">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Email</h3>
              <a href="mailto:shafeer.driver@gmail.com" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                shafeer.driver@gmail.com
              </a>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 text-center transform transition-all hover:shadow-md hover:bg-white">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Location</h3>
              <p className="text-gray-600">Based in Dubai, UAE</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - Minimalist, elegant design */}
    </div>
  );
};

export default ShafeerPortfolioStatic;
