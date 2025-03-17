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
  Sunrise
} from 'lucide-react';

const ShafeerPortfolioStatic = () => {
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
      type: 'Full Day Service - 800 AED',
      icon: <Sun className="w-10 h-10 text-amber-400" />,
      description: 'Luxury chauffeur service for high-profile clients with discretion and premium comfort.',
      price: '800 AED',
      duration: 'Full Day'
    },
    {
      type: 'Half Day Service - 400 AED',
      icon: <Sunrise className="w-10 h-10 text-amber-400" />,
      description: 'Reliable transportation for executives and business professionals with punctuality guaranteed.',
      price: '400 AED',
      duration: 'Half Day'
    },
    {
      type: 'Transfer - Starting from 150 AED',
      icon: <Route className="w-10 h-10 text-amber-400" />,
      description: 'One-way transportation service with professional chauffeur.',
      price: 'Starting from 150 AED',
      duration: 'Single Trip'
    }
  ];

  const experienceItems = [
    { title: 'Years of Experience', value: '10+', icon: <Award className="w-8 h-8 text-amber-400" /> },
    { title: 'Clients Served', value: '5000+', icon: <Users className="w-8 h-8 text-amber-400" /> },
    { title: 'Kilometers Driven', value: '500k+', icon: <Car className="w-8 h-8 text-amber-400" /> },
    { title: 'VIP Clients', value: '250+', icon: <Star className="w-8 h-8 text-amber-400" /> }
  ];

  const qualitiesItems = [
    { 
      title: 'Safe Driving', 
      description: 'Impeccable safety record throughout my career',
      icon: <Shield className="w-8 h-8 text-amber-400" />
    },
    { 
      title: 'Punctual', 
      description: 'Always on time, every time',
      icon: <Clock className="w-8 h-8 text-amber-400" /> 
    },
    { 
      title: 'Experienced', 
      description: 'Decade of professional driving expertise',
      icon: <Award className="w-8 h-8 text-amber-400" /> 
    }
  ];

  const navLinks = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "fleet", label: "Fleet" },
    { id: "booking", label: "Book Now" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative font-sans">
      
      {/* HEADER */}
      <header className="fixed w-full bg-opacity-95 z-50 transition-all duration-300 bg-slate-900 text-white shadow-xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Car className="w-8 h-8 text-amber-400" />
            <div>
              <h1 className="text-xl font-bold leading-none">Shafeer Thazhe Veetil</h1>
              <p className="text-xs text-amber-400 font-medium">Premium Chauffeur Service</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    className="text-sm font-medium text-gray-200 hover:text-amber-400 relative pb-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Contact button */}
          <div className="hidden md:block">
            <a 
              href="tel:+971501781981" 
              className="flex items-center px-4 py-2 border border-amber-400 text-amber-400 rounded hover:bg-amber-400 hover:text-slate-900 transition-colors text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>+971 50 178 1981</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen pt-16 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-800/70 to-slate-700/50 z-10"></div>
        <div className="absolute inset-0 bg-slate-900">
          <img 
            src="/wall.jpg"
            alt="Professional Chauffeur Service" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900 opacity-30"></div>
        </div>
        <div className="container relative mx-auto px-6 z-20 flex flex-col items-center md:items-start">
          <div className="max-w-xl md:ml-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight leading-tight">
              Luxury Travel <span className="text-amber-400">Redefined</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Premium chauffeur service for your comfort and convenience across Dubai and the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="#booking"
                className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold rounded-md transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now
              </a>
              <a 
                href="tel:+971501781981"
                className="px-8 py-4 border-2 border-white hover:border-amber-400 text-white hover:text-amber-400 font-semibold rounded-md flex items-center justify-center transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Me
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-gray-300 text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-amber-400" />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-amber-400 rounded-full opacity-20"></div>
              <img 
                src="/driver.jpg" 
                alt="Shafeer Thazhe Veetil - Professional Chauffeur" 
                className="w-full h-auto rounded-lg shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-800 rounded-full opacity-10"></div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800">
                About <span className="text-amber-500">Me</span>
              </h2>
              <div className="w-20 h-1 bg-amber-400 mb-6"></div>
              <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                With over a decade of experience as a professional chauffeur in Dubai, I offer premium transportation services tailored to meet the highest standards of comfort, reliability, and discretion.
              </p>
              <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                Whether you need airport transfers, full-day service for business meetings, or a dependable driver for your special occasions, I provide a personalized experience with impeccable attention to detail.
              </p>
              
              {/* Qualities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {qualitiesItems.map((item, index) => (
                  <div key={index} className="bg-slate-50 p-4 rounded-lg shadow-md transition-transform hover:scale-105">
                    <div className="flex items-center mb-3">
                      {item.icon}
                      <h3 className="text-slate-800 font-semibold ml-2">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            My <span className="text-amber-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-slate-800 p-8 rounded-lg text-center transform transition-all hover:translate-y-[-10px] hover:shadow-2xl border-b-4 border-amber-400"
              >
                <div className="inline-flex justify-center items-center w-16 h-16 bg-slate-700 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                  {item.value}
                </h3>
                <p className="text-gray-300">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-slate-800">
            My <span className="text-amber-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Tailored transportation solutions for every need, providing comfort, punctuality, and professionalism on every journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-slate-50 rounded-lg overflow-hidden shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="p-6 border-b border-slate-200">
                  <div className="flex justify-between items-center mb-4">
                    {service.icon}
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {service.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {service.type}
                  </h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                </div>
                <div className="bg-slate-100 px-6 py-4">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-600 font-semibold">{service.price}</span>
                    <a 
                      href="#booking"
                      className="text-sm text-slate-800 hover:text-amber-500 font-medium flex items-center"
                    >
                      Book Now <ChevronDown className="w-4 h-4 ml-1 transform rotate-[-90deg]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET SECTION */}
      <section id="fleet" className="py-20 bg-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-slate-800">
            My <span className="text-amber-500">Fleet</span>
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Modern, well-maintained vehicles providing superior comfort for all your transportation needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cars.map((car, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-xl relative group"
              >
                <div className="overflow-hidden h-64">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-amber-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                  {car.capacity}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{car.name}</h3>
                  <ul className="space-y-2">
                    {car.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#booking"
                    className="mt-6 w-full py-3 block text-center bg-slate-800 text-white rounded-md hover:bg-amber-500 transition-colors"
                  >
                    Select This Vehicle
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Book <span className="text-amber-400">Now</span>
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Fill out the form below to book your premium transportation service.
          </p>
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      readOnly
                      defaultValue="John Doe"
                      className="w-full px-4 py-3 border border-slate-300 rounded-md bg-gray-100 text-slate-800 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      readOnly
                      defaultValue="john@example.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-md bg-gray-100 text-slate-800 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      readOnly
                      defaultValue="+971501781981"
                      className="w-full px-4 py-3 border border-slate-300 rounded-md bg-gray-100 text-slate-800 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Select Service</label>
                    <select
                      disabled
                      className="w-full px-4 py-3 border border-slate-300 rounded-md bg-gray-100 text-slate-800 cursor-not-allowed"
                    >
                      <option>-- Select Service --</option>
                      {services.map((service, index) => (
                        <option key={index}>{service.type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Select Vehicle</label>
                    <select
                      disabled
                      className="w-full px-4 py-3 border border-slate-300 rounded-md bg-gray-100 text-slate-800 cursor-not-allowed"
                    >
                      <option>-- Select Vehicle --</option>
                      {cars.map((car, index) => (
                        <option key={index}>{car.name} - {car.capacity}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Date</label>
                    <input
                      type="date"
                      readOnly
                      defaultValue="2025-04-01"
                      className="w-full px-4 py-3 border border-slate-300 rounded-md bg-gray-100 text-slate-800 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Time</label>
                    <input
                      type="time"
                      readOnly
                      defaultValue="12:00"
                      className="w-full px-4 py-3 border border-slate-300 rounded-md bg-gray-100 text-slate-800 cursor-not-allowed"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-slate-700 font-medium mb-2">Pickup Location</label>
                    <input
                      type="text"
                      readOnly
                      defaultValue="123 Main St, Dubai"
                      className="w-full px-4 py-3 border border-slate-300 rounded-md bg-gray-100 text-slate-800 cursor-not-allowed"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-slate-700 font-medium mb-2">Drop-off Location</label>
                    <input
                      type="text"
                      readOnly
                      defaultValue="456 Elm St, Dubai"
                      className="w-full px-4 py-3 border border-slate-300 rounded-md bg-gray-100 text-slate-800 cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="button"
                    className="px-8 py-4 bg-amber-500 text-white font-semibold rounded-md flex-1 text-center"
                  >
                    Submit Booking
                  </button>
                  <button
                    type="button"
                    className="px-8 py-4 bg-green-600 text-white font-semibold rounded-md flex-1 text-center"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact on WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-slate-800">
            Contact <span className="text-amber-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Have questions? Reach out via any of these channels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-lg shadow-md text-center">
              <Phone className="w-10 h-10 mx-auto text-amber-500 mb-4" />
              <h3 className="text-lg font-bold text-slate-700 mb-2">Phone</h3>
              <a href="tel:+971501781981" className="text-amber-600 hover:text-amber-700">
                +971 50 178 1981
              </a>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg shadow-md text-center">
              <Mail className="w-10 h-10 mx-auto text-amber-500 mb-4" />
              <h3 className="text-lg font-bold text-slate-700 mb-2">Email</h3>
              <a href="mailto:shafeer.driver@gmail.com" className="text-amber-600 hover:text-amber-700">
                shafeer.driver@gmail.com
              </a>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg shadow-md text-center">
              <MapPin className="w-10 h-10 mx-auto text-amber-500 mb-4" />
              <h3 className="text-lg font-bold text-slate-700 mb-2">Location</h3>
              <p className="text-slate-600">Based in Dubai, UAE</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <Car className="w-8 h-8 text-amber-400" />
              <div>
                <h1 className="text-xl font-bold">Shafeer Thazhe Veetil</h1>
                <p className="text-xs text-amber-400">Premium Chauffeur Service</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} All Rights Reserved
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Professional Chauffeur Services in UAE
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShafeerPortfolioStatic;
