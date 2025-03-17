import React, { useState } from 'react';
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

const ShafeerPortfolioMinimalist = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      icon: <Sun className="w-5 h-5 text-amber-400" />,
      description: 'Luxury chauffeur service for high-profile clients with discretion and premium comfort.',
      price: '800 AED',
      duration: 'Full Day'
    },
    {
      type: 'Half Day Service',
      icon: <Sunrise className="w-5 h-5 text-amber-400" />,
      description: 'Reliable transportation for executives and business professionals with punctuality guaranteed.',
      price: '400 AED',
      duration: 'Half Day'
    },
    {
      type: 'Transfer Service',
      icon: <Route className="w-5 h-5 text-amber-400" />,
      description: 'One-way transportation service with professional chauffeur.',
      price: 'From 150 AED',
      duration: 'Single Trip'
    }
  ];

  const experienceItems = [
    { title: 'Years of Experience', value: '10+', icon: <Award className="w-5 h-5 text-amber-400" /> },
    { title: 'Clients Served', value: '5000+', icon: <Users className="w-5 h-5 text-amber-400" /> },
    { title: 'Kilometers Driven', value: '500k+', icon: <Car className="w-5 h-5 text-amber-400" /> },
    { title: 'VIP Clients', value: '250+', icon: <Star className="w-5 h-5 text-amber-400" /> }
  ];

  const qualitiesItems = [
    { 
      title: 'Safe Driving', 
      description: 'Impeccable safety record throughout my career',
      icon: <Shield className="w-5 h-5 text-amber-400" />
    },
    { 
      title: 'Punctual', 
      description: 'Always on time, every time',
      icon: <Clock className="w-5 h-5 text-amber-400" /> 
    },
    { 
      title: 'Experienced', 
      description: 'Decade of professional driving expertise',
      icon: <Award className="w-5 h-5 text-amber-400" /> 
    }
  ];

  const navLinks = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "fleet", label: "Fleet" },
    { id: "booking", label: "Book Now" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased">
      
      {/* HEADER - Elegant, minimalist and dark */}
      <header className="fixed w-full bg-gray-900 bg-opacity-90 z-50 transition-all duration-300 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Car className="w-7 h-7 text-amber-400" />
            <div>
              <h1 className="text-lg font-light leading-none tracking-wider text-white">SHAFEER</h1>
              <p className="text-xs text-amber-400 font-light tracking-wider">PREMIUM CHAUFFEUR</p>
            </div>
          </div>
          
          {/* Desktop Navigation - Minimalist */}
          <nav className="hidden md:block">
            <ul className="flex space-x-10">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    className="text-sm font-light text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Contact button - Minimalist */}
          <div className="hidden md:block">
            <a 
              href="tel:+971501781981" 
              className="flex items-center px-4 py-2 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 rounded transition-colors text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>+971 50 178 1981</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 text-gray-400 hover:text-amber-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.id}
                    href={`#${link.id}`} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-light text-gray-400 hover:text-amber-400 transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a 
                  href="tel:+971501781981" 
                  className="flex items-center px-4 py-2 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 rounded transition-colors text-sm w-full justify-center mt-4"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+971 50 178 1981</span>
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION - Minimalist, elegant dark theme */}
      <section id="hero" className="relative h-screen pt-20 flex items-center overflow-hidden">
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

      {/* ABOUT SECTION - Minimalist dark theme */}
      <section id="about" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 relative">
              <img 
                src="/driver.jpg" 
                alt="Shafeer Thazhe Veetil - Professional Chauffeur" 
                className="w-full h-auto rounded-md shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-amber-400 text-sm font-light tracking-widest mb-2">ABOUT ME</p>
              <h2 className="text-3xl font-light mb-6 text-white">
                A Decade of Excellence
              </h2>
              <div className="w-16 h-px bg-amber-400 mb-8"></div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                With over a decade of experience as a professional chauffeur in Dubai, I offer premium transportation services tailored to meet the highest standards of comfort, reliability, and discretion.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you need airport transfers, full-day service for business meetings, or a dependable driver for your special occasions, I provide a personalized experience with impeccable attention to detail.
              </p>
              
              {/* Qualities - Minimalist design */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                {qualitiesItems.map((item, index) => (
                  <div key={index} className="border-t border-gray-800 pt-6">
                    <div className="flex flex-col">
                      {item.icon}
                      <h3 className="text-white font-light mt-4 mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION - Minimalist counter design */}
      <section id="experience" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceItems.map((item, index) => (
              <div key={index} className="border-l border-gray-800 pl-6">
                {item.icon}
                <h3 className="text-3xl font-light text-white mt-4 mb-1">
                  {item.value}
                </h3>
                <p className="text-gray-500 text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Minimalist dark theme */}
      <section id="services" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <p className="text-amber-400 text-sm font-light tracking-widest mb-2 text-center">SERVICES</p>
          <h2 className="text-3xl font-light text-center mb-4 text-white">
            Transportation Solutions
          </h2>
          <div className="w-16 h-px bg-amber-400 mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-800 border border-gray-700 rounded-md overflow-hidden transition-all hover:border-amber-400"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <span className="ml-2 text-gray-400 text-xs font-light">
                      {service.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-light text-white mb-3">
                    {service.type}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                    <span className="text-amber-400">{service.price}</span>
                    <a 
                      href="#booking"
                      className="flex items-center text-gray-400 hover:text-amber-400 text-sm transition-colors"
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

      {/* FLEET SECTION - Minimalist dark theme */}
      <section id="fleet" className="py-24 bg-black">
      <div className="container mx-auto px-6">
          <p className="text-amber-400 text-sm font-light tracking-widest mb-2 text-center">FLEET</p>
          <h2 className="text-3xl font-light text-center mb-4 text-white">
            Premium Vehicles
          </h2>
          <div className="w-16 h-px bg-amber-400 mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cars.map((car, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-800">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-light text-white mb-2">
                    {car.name}
                  </h3>
                  <p className="text-amber-400 text-sm mb-4">{car.capacity}</p>
                  <ul className="flex flex-wrap gap-4">
                    {car.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-amber-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION - Clean, minimalist form */}
      <section id="booking" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <p className="text-amber-400 text-sm font-light tracking-widest mb-2">BOOK NOW</p>
              <h2 className="text-3xl font-light mb-6 text-white">
                Reserve Your Ride
              </h2>
              <div className="w-16 h-px bg-amber-400 mb-8"></div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Book your premium chauffeur service today. Please provide your details and requirements,
                and I will get back to you promptly to confirm your booking.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-400 mb-2">
                      Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-400 mb-2">
                      Phone
                    </label>
                    <input 
                      type="tel" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-400 mb-2">
                      Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-400 mb-2">
                      Service Type
                    </label>
                    <select 
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="">Select Service</option>
                      <option value="full-day">Full Day Service</option>
                      <option value="half-day">Half Day Service</option>
                      <option value="transfer">Transfer Service</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-400 mb-2">
                    Requirements
                  </label>
                  <textarea 
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors h-32"
                    placeholder="Please specify your requirements, pickup location, and any special requests."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-light py-3 px-6 rounded-md transition-colors"
                >
                  Send Request
                </button>
              </form>
            </div>
            
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="bg-gray-800 border border-gray-700 rounded-md p-8 h-full">
                <h3 className="text-xl font-light text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-amber-400 mt-1 mr-4" />
                    <div>
                      <p className="text-sm font-light text-gray-400 mb-1">Phone</p>
                      <p className="text-white">+971 50 178 1981</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-amber-400 mt-1 mr-4" />
                    <div>
                      <p className="text-sm font-light text-gray-400 mb-1">Email</p>
                      <p className="text-white">shafeer@premiumchauffeur.ae</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-amber-400 mt-1 mr-4" />
                    <div>
                      <p className="text-sm font-light text-gray-400 mb-1">Service Area</p>
                      <p className="text-white">Dubai & UAE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageCircle className="w-5 h-5 text-amber-400 mt-1 mr-4" />
                    <div>
                      <p className="text-sm font-light text-gray-400 mb-1">Response Time</p>
                      <p className="text-white">Within 1 hour</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-gray-700">
                  <p className="text-gray-400 text-sm mb-4">Available 24/7 for your transportation needs</p>
                  <a 
                    href="https://wa.me/971501781981" 
                    className="flex items-center text-amber-400 hover:text-amber-500 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Contact via WhatsApp
                    <ChevronDown className="w-4 h-4 ml-1 transform rotate-[-90deg]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <p className="text-amber-400 text-sm font-light tracking-widest mb-2 text-center">TESTIMONIALS</p>
          <h2 className="text-3xl font-light text-center mb-4 text-white">
            Client Feedback
          </h2>
          <div className="w-16 h-px bg-amber-400 mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Shafeer provided an exceptional service. Always punctual, professional, and his vehicle was immaculate. I highly recommend his services for business travel.",
                author: "Ahmed K.",
                position: "CEO, Tech Solutions"
              },
              {
                text: "I've been using Shafeer's chauffeur service for over a year now. The level of professionalism and attention to detail is unmatched. A truly premium experience.",
                author: "Sarah L.",
                position: "Marketing Director"
              },
              {
                text: "Reliable, discreet, and always goes the extra mile. Shafeer's service has been invaluable for our executive team's transportation needs.",
                author: "Michael R.",
                position: "Finance Executive"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-md p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-400 italic mb-6">"{testimonial.text}"</p>
                </div>
                <div className="mt-auto">
                  <p className="text-white font-light">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - Minimalist dark theme */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <Car className="w-6 h-6 text-amber-400" />
              <div>
                <h2 className="text-lg font-light leading-none tracking-wider text-white">SHAFEER</h2>
                <p className="text-xs text-amber-400 font-light tracking-wider">PREMIUM CHAUFFEUR</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
              <a href="#about" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">About</a>
              <a href="#services" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">Services</a>
              <a href="#fleet" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">Fleet</a>
              <a href="#booking" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">Book Now</a>
            </div>
            
            <div className="flex items-center space-x-6 mt-6 md:mt-0">
              <a href="https://wa.me/971501781981" className="text-gray-400 hover:text-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="tel:+971501781981" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:shafeer@premiumchauffeur.ae" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Shafeer Premium Chauffeur. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-2 md:mt-0">
                Professional Chauffeur Services in Dubai & UAE
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShafeerPortfolioMinimalist;