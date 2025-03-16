import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Car, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle,
  MessageCircle,
  Calendar,
  ChevronDown,
  Clock,
  Award,
  Shield,
  Star,
  Users,
  Briefcase,
  Navigation,
  Route,
  Sun,
  Sunrise,
  Menu,
  X
} from 'lucide-react';

const ShafeerPortfolio = () => {
  // -----------------------
  //    STATE
  // -----------------------
  const [bookingDetails, setBookingDetails] = useState({
    service: '',
    bookingDate: '',
    bookingTime: '', 
    clientName: '', 
    carType: '',
    pickupLocation: '',
    dropoffLocation: '',
    phoneNumber: '',
    email: ''
  });

  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [isTransferService, setIsTransferService] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const [emailStatus, setEmailStatus] = useState({
    sending: false,
    sent: false,
    error: false,
    message: ''
  });

  // -----------------------
  //    EFFECTS
  // -----------------------
  useEffect(() => {
    // Show/hide drop-off location based on service type
    setIsTransferService(bookingDetails.service.includes('Transfer'));
  }, [bookingDetails.service]);

  useEffect(() => {
    // Show/hide floating WhatsApp button based on scroll
    const handleScroll = () => {
      const navHeight = document.querySelector('header')?.offsetHeight || 0;
      const contactSection = document.getElementById('contact');
      const contactTop = contactSection?.offsetTop || Infinity;
      
      if (window.scrollY > navHeight && window.scrollY < contactTop - 100) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }

      // Set active section for navigation highlighting
      const sections = ['hero', 'about', 'experience', 'services', 'fleet', 'booking', 'contact'];
      let current = '';

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // -----------------------
  //    NAV LINKS
  // -----------------------
  const navLinks = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "fleet", label: "Fleet" },
    { id: "booking", label: "Book Now" }
  ];

  // -----------------------
  //    EVENT HANDLERS
  // -----------------------
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = '+971501781981'; // Replace with actual number
    
    let message = `Booking Inquiry:\nName: ${bookingDetails.clientName}\nService: ${bookingDetails.service}\nDate: ${bookingDetails.bookingDate}\nTime: ${bookingDetails.bookingTime}\nCar: ${bookingDetails.carType}`;
    
    if (bookingDetails.pickupLocation) {
      message += `\nPickup Location: ${bookingDetails.pickupLocation}`;
    }
    
    if (isTransferService && bookingDetails.dropoffLocation) {
      message += `\nDrop-off Location: ${bookingDetails.dropoffLocation}`;
    }
    
    message += `\n\nContact Details:\nPhone: ${bookingDetails.phoneNumber}\nEmail: ${bookingDetails.email}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailStatus({
      sending: true,
      sent: false,
      error: false,
      message: 'Sending your booking request...'
    });

    // Prepare EmailJS template params
    const templateParams = {
      client_name: bookingDetails.clientName,
      service_type: bookingDetails.service,
      booking_date: bookingDetails.bookingDate,
      booking_time: bookingDetails.bookingTime,
      car_type: bookingDetails.carType,
      pickup_location: bookingDetails.pickupLocation,
      dropoff_location: isTransferService ? bookingDetails.dropoffLocation : "N/A (Day Service)",
      phone_number: bookingDetails.phoneNumber,
      client_email: bookingDetails.email,
      message: `New booking request from ${bookingDetails.clientName} (${bookingDetails.email})`
    };

    // Send with EmailJS
    emailjs.send(
      'service_itzv98f',       // Your EmailJS service ID
      'template_booking',      // Your EmailJS template ID
      templateParams,
      '07_r8APLOH6vLUCiZ'      // Your EmailJS public key
    )
    .then((response) => {
      console.log('Email successfully sent!', response);
      setEmailStatus({
        sending: false,
        sent: true,
        error: false,
        message: 'Booking request submitted successfully! I will contact you soon.'
      });
      // Reset form
      setBookingDetails({
        service: '',
        bookingDate: '',
        bookingTime: '',
        clientName: '',
        carType: '',
        pickupLocation: '',
        dropoffLocation: '',
        phoneNumber: '',
        email: ''
      });
    })
    .catch((err) => {
      console.error('Error sending email:', err);
      setEmailStatus({
        sending: false,
        sent: false,
        error: true,
        message: 'There was an error sending your booking. Please try again or use WhatsApp.'
      });
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // -----------------------
  //    RENDER
  // -----------------------
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
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className={`text-sm font-medium relative pb-1 ${
                      activeSection === link.id 
                        ? 'text-amber-400' 
                        : 'text-gray-200 hover:text-amber-400'
                    }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400"></span>
                    )}
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
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 py-4">
            <ul className="flex flex-col space-y-3 px-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className={`block py-2 ${
                      activeSection === link.id 
                        ? 'text-amber-400' 
                        : 'text-gray-200'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-700">
                <a 
                  href="tel:+971501781981" 
                  className="flex items-center text-amber-400"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+971 50 178 1981</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* FLOATING WHATSAPP BUTTON */}
      {showFloatingButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={handleWhatsAppContact}
            className="flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors duration-300"
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      )}

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
            <p className="text-xl md:text-2xl text-gray-200 mb-8">Premium chauffeur service for your comfort and convenience across Dubai and the UAE.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button 
                onClick={() => scrollToSection('booking')}
                className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold rounded-md transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now
              </button>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800">About <span className="text-amber-500">Me</span></h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">My <span className="text-amber-400">Experience</span></h2>
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
                <h3 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{item.value}</h3>
                <p className="text-gray-300">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-slate-800">My <span className="text-amber-500">Services</span></h2>
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
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{service.type}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                </div>
                <div className="bg-slate-100 px-6 py-4">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-600 font-semibold">{service.price}</span>
                    <button 
                      onClick={() => {
                        scrollToSection('booking');
                        setBookingDetails(prev => ({...prev, service: service.type}));
                      }}
                      className="text-sm text-slate-800 hover:text-amber-500 font-medium flex items-center"
                    >
                      Book Now <ChevronDown className="w-4 h-4 ml-1 transform rotate-[-90deg]" />
                    </button>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-slate-800">My <span className="text-amber-500">Fleet</span></h2>
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
                  <button 
                    onClick={() => {
                      scrollToSection('booking');
                      setBookingDetails(prev => ({...prev, carType: car.name}));
                    }}
                    className="mt-6 w-full py-3 bg-slate-800 text-white rounded-md hover:bg-amber-500 transition-colors"
                  >
                    Select This Vehicle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Book <span className="text-amber-400">Now</span></h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Fill out the form below to book your premium transportation service. I'll get back to you promptly to confirm your booking.
          </p>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div className="p-8 md:p-12">
              {emailStatus.sent && (
                <div className="mb-8 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <p>{emailStatus.message}</p>
                  </div>
                </div>
              )}
              
              {emailStatus.error && (
                <div className="mb-8 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
                  <p>{emailStatus.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      name="clientName"
                      value={bookingDetails.clientName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-slate-800"
                      placeholder="Full Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={bookingDetails.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-slate-800"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={bookingDetails.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-slate-800"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Select Service</label>
                    <select
                      name="service"
                      value={bookingDetails.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-slate-800 bg-white"
                    >
                      <option value="">-- Select Service --</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.type}>
                          {service.type}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Select Vehicle</label>
                    <select
                      name="carType"
                      value={bookingDetails.carType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-slate-800 bg-white"
                    >
                      <option value="">-- Select Vehicle --</option>
                      {cars.map((car, index) => (
                        <option key={index} value={car.name}>
                          {car.name} - {car.capacity}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Date</label>
                    <input
                      type="date"
                      name="bookingDate"
                      value={bookingDetails.bookingDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Time</label>
                    <input
                      type="time"
                      name="bookingTime"
                      value={bookingDetails.bookingTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-slate-800"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-700 font-medium mb-2">Pickup Location</label>
                    <input
                      type="text"
                      name="pickupLocation"
                      value={bookingDetails.pickupLocation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-slate-800"
                      placeholder="Full address"
                    />
                  </div>

                  {isTransferService && (
                    <div className="md:col-span-2">
                      <label className="block text-slate-700 font-medium mb-2">Drop-off Location</label>
                      <input
                        type="text"
                        name="dropoffLocation"
                        value={bookingDetails.dropoffLocation}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-slate-800"
                        placeholder="Full address"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={emailStatus.sending}
                    className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md transition-all flex-1 flex items-center justify-center"
                  >
                    {emailStatus.sending ? 'Sending...' : 'Submit Booking'}
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleWhatsAppContact}
                    className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition-all flex-1 flex items-center justify-center"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-slate-800">Contact <span className="text-amber-500">Me</span></h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Have questions? Need more information? Reach out to me through any of these channels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
              <Phone className="w-10 h-10 mx-auto text-amber-500 mb-4" />
              <h3 className="text-lg font-bold text-slate-700 mb-2">Phone</h3>
              <a href="tel:+971501781981" className="text-amber-600 hover:text-amber-700">+971 50 178 1981</a>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
              <Mail className="w-10 h-10 mx-auto text-amber-500 mb-4" />
              <h3 className="text-lg font-bold text-slate-700 mb-2">Email</h3>
              <a href="mailto:shafeer.driver@gmail.com" className="text-amber-600 hover:text-amber-700">shafeer.driver@gmail.com</a>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
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
              <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} All Rights Reserved</p>
              <p className="text-gray-500 text-xs mt-1">Professional Chauffeur Services in UAE</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShafeerPortfolio;
