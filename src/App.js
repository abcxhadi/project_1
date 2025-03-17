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
  Sunrise
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
      icon: <Sun className="w-10 h-10 text-gold-500" />,
      description: 'Luxury chauffeur service for high-profile clients with discretion and premium comfort.',
      price: '800 AED',
      duration: 'Full Day'
    },
    {
      type: 'Half Day Service - 400 AED',
      icon: <Sunrise className="w-10 h-10 text-gold-500" />,
      description: 'Reliable transportation for executives and business professionals with punctuality guaranteed.',
      price: '400 AED',
      duration: 'Half Day'
    },
    {
      type: 'Transfer - Starting from 150 AED',
      icon: <Route className="w-10 h-10 text-gold-500" />,
      description: 'One-way transportation service with professional chauffeur.',
      price: 'Starting from 150 AED',
      duration: 'Single Trip'
    }
  ];

  const experienceItems = [
    { title: 'Years of Experience', value: '10+', icon: <Award className="w-8 h-8 text-gold-500" /> },
    { title: 'Clients Served', value: '5000+', icon: <Users className="w-8 h-8 text-gold-500" /> },
    { title: 'Kilometers Driven', value: '500k+', icon: <Car className="w-8 h-8 text-gold-500" /> },
    { title: 'VIP Clients', value: '250+', icon: <Star className="w-8 h-8 text-gold-500" /> }
  ];

  const qualitiesItems = [
    { 
      title: 'Safe Driving', 
      description: 'Impeccable safety record throughout my career',
      icon: <Shield className="w-8 h-8 text-gold-500" />
    },
    { 
      title: 'Punctual', 
      description: 'Always on time, every time',
      icon: <Clock className="w-8 h-8 text-gold-500" /> 
    },
    { 
      title: 'Experienced', 
      description: 'Decade of professional driving expertise',
      icon: <Award className="w-8 h-8 text-gold-500" /> 
    }
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

  // -----------------------
  //    RENDER
  // -----------------------
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      
      {/* HEADER */}
      <header className="bg-gradient-to-b from-green-900 to-green-800 text-white shadow-lg">
        <div className="py-6 px-8 flex justify-center items-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-3">
              <Car className="w-10 h-10 text-yellow-400" />
              <h1 className="text-3xl font-bold">Shafeer Thazhe Veetil</h1>
            </div>
            <p className="text-yellow-400 font-medium">Professional Chauffeur Service</p>
          </div>
        </div>
        
        <nav className="py-3 border-t border-green-700 bg-opacity-80">
          <div className="container mx-auto flex justify-center">
            <ul className="flex flex-wrap justify-center space-x-2 md:space-x-6 px-4">
              <li className="my-1">
                <a 
                  href="#services" 
                  className="block px-4 py-2 rounded-full bg-green-700 hover:bg-yellow-500 hover:text-green-900"
                >
                  Services
                </a>
              </li>
              <li className="my-1">
                <a 
                  href="#fleet" 
                  className="block px-4 py-2 rounded-full bg-green-700 hover:bg-yellow-500 hover:text-green-900"
                >
                  Fleet
                </a>
              </li>
              <li className="my-1">
                <a 
                  href="#booking" 
                  className="block px-4 py-2 rounded-full bg-green-700 hover:bg-yellow-500 hover:text-green-900"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* FLOATING WHATSAPP BUTTON */}
      {showFloatingButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={handleWhatsAppContact}
            className="flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/90 via-black/60 to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-gray-900">
          <img 
            src="/wall.jpg"
            alt="Professional Chauffeur Service" 
            className="absolute inset-0 w-full h-full object-cover object-center filter blur-[2px] scale-105"
          />
          <div 
            className="absolute inset-0 bg-black opacity-30 mix-blend-overlay" 
            style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")'}}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 to-transparent"></div>
        </div>
        <div className="relative h-full flex items-center justify-center z-20 px-6">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">Professional Chauffeur Service</h2>
            <p className="text-xl mb-8 text-shadow">Luxury transportation with safety, punctuality, and comfort</p>
            <a 
              href="#booking" 
              className="inline-block bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors duration-300 shadow-xl"
            >
              Book Your Ride
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-20"></div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>
          
          <div className="flex flex-col items-center">
            {/* Content section with integrated name and paragraph */}
            <div className="space-y-6 max-w-3xl text-center">
              <p className="text-gray-700 leading-relaxed">
                <span className="block text-2xl font-bold text-gray-900 mb-4">I'm Shafeer Thazhe Veetil,</span>
                a professional chauffeur with over a decade of driving experience in the UAE. I provide premium chauffeur services with an emphasis on safety, punctuality, and professionalism. My extensive knowledge of roads and routes ensures efficient travel, while my commitment to customer service guarantees a comfortable and pleasant journey.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {qualitiesItems.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="flex justify-center mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-16 px-8 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">My Experience</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {experienceItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{item.value}</div>
                <div className="text-sm text-gray-600">{item.title}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Professional Qualifications</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Professional Chauffeur</span>
                  <p className="text-gray-600">Certified professional driver with specialized training in VIP transportation</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">10+ Years in UAE</span>
                  <p className="text-gray-600">Extensive experience navigating UAE roads and providing premium service</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Safe Driving Record</span>
                  <p className="text-gray-600">Impeccable safety record with zero incidents throughout my career</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Excellent Route Knowledge</span>
                  <p className="text-gray-600">In-depth knowledge of routes, traffic patterns, and shortcuts</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Professional Etiquette</span>
                  <p className="text-gray-600">Trained in VIP service protocols and professional communication</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Specialized Services</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols=3 gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl">
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.type}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-yellow-500">{service.price}</span>
                    <span className="text-gray-500 ml-2">/ {service.duration}</span>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET SECTION */}
      <section id="fleet" className="py-16 px-8 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">My Fleet</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {cars.map((car, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl"
              >
                <div className="grid md:grid-cols-2">
                  <img 
                    src={car.image}
                    alt={car.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">{car.name}</h3>
                    <div className="text-yellow-500 font-medium mb-4">{car.capacity}</div>
                    <div className="space-y-3">
                      {car.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      {/* BOOKING SECTION */}
<section id="booking" className="py-16 px-4 sm:px-8 bg-gray-50">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl font-bold text-center mb-4">Book My Services</h2>
    <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
      Fill out the form below to request a booking. I'll get back to you promptly to confirm your reservation.
    </p>
    
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="md:flex">
        {/* Left side - Form description */}
        <div className="bg-green-800 text-white p-6 md:p-8 md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Booking Details</h3>
          <p className="text-green-100 mb-6">
            Please provide your travel details and preferences so I can serve you better.
          </p>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">Instant confirmation</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">24/7 customer support</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">Flexible cancellation</span>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-green-700">
            <h4 className="font-medium mb-2">Need urgent assistance?</h4>
            <a 
              href="tel:+971501781981" 
              className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 mb-3"
            >
              <Phone className="w-5 h-5" />
              <span>+971 50 178 1981</span>
            </a>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="p-6 md:p-8 md:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Type
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 relative">
                <Briefcase className="w-5 h-5 mr-3 text-gray-400" />
                <select
                  id="service"
                  name="service"
                  value={bookingDetails.service}
                  onChange={handleInputChange}
                  className="bg-transparent w-full focus:outline-none appearance-none"
                  required
                >
                  <option value="">Select Service Type</option>
                  {services.map((srv, index) => (
                    <option key={index} value={srv.type}>
                      {srv.type}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            
            {/* Date and Time in one row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Date Field */}
              <div>
                <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                  <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                  <input 
                    id="bookingDate"
                    type="date" 
                    name="bookingDate"
                    value={bookingDetails.bookingDate}
                    onChange={handleInputChange}
                    className="bg-transparent w-full focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Time Field */}
              <div>
                <label htmlFor="bookingTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                  <Clock className="w-5 h-5 mr-3 text-gray-400" />
                  <input 
                    id="bookingTime"
                    type="time" 
                    name="bookingTime"
                    value={bookingDetails.bookingTime}
                    onChange={handleInputChange}
                    className="bg-transparent w-full focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Client Name */}
            <div>
              <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                <Users className="w-5 h-5 mr-3 text-gray-400" />
                <input 
                  id="clientName"
                  type="text" 
                  name="clientName"
                  placeholder="Your Full Name" 
                  value={bookingDetails.clientName}
                  onChange={handleInputChange}
                  className="bg-transparent w-full focus:outline-none placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Car Type Selection */}
            <div>
              <label htmlFor="carType" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Car
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 relative">
                <Car className="w-5 h-5 mr-3 text-gray-400" />
                <select
                  id="carType"
                  name="carType"
                  value={bookingDetails.carType}
                  onChange={handleInputChange}
                  className="bg-transparent w-full focus:outline-none appearance-none"
                  required
                >
                  <option value="">Select Car Type</option>
                  {cars.map((car, index) => (
                    <option key={index} value={car.name}>
                      {car.name} - {car.capacity}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            
            {/* Pickup Location */}
            <div>
              <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Location
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                <input 
                  id="pickupLocation"
                  type="text" 
                  name="pickupLocation"
                  placeholder="Enter pickup address" 
                  value={bookingDetails.pickupLocation}
                  onChange={handleInputChange}
                  className="bg-transparent w-full focus:outline-none placeholder:text-gray-400"
                  required
                />
              </div>
            </div>
            
            {/* Drop-off Location (only if Transfer) */}
            {isTransferService && (
              <div>
                <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-700 mb-1">
                  Drop-off Location
                </label>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                  <Navigation className="w-5 h-5 mr-3 text-gray-400" />
                  <input 
                    id="dropoffLocation"
                    type="text" 
                    name="dropoffLocation"
                    placeholder="Enter destination address" 
                    value={bookingDetails.dropoffLocation}
                    onChange={handleInputChange}
                    className="bg-transparent w-full focus:outline-none placeholder:text-gray-400"
                    required={isTransferService}
                  />
                </div>
              </div>
            )}

            {/* Phone & Email Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                  <Phone className="w-5 h-5 mr-3 text-gray-400" />
                  <input 
                    id="phoneNumber"
                    type="tel" 
                    name="phoneNumber"
                    placeholder="Your contact number" 
                    value={bookingDetails.phoneNumber}
                    onChange={handleInputChange}
                    className="bg-transparent w-full focus:outline-none placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                  <Mail className="w-5 h-5 mr-3 text-gray-400" />
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Your email address" 
                    value={bookingDetails.email}
                    onChange={handleInputChange}
                    className="bg-transparent w-full focus:outline-none placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email Status Message */}
            {emailStatus.message && (
              <div 
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  emailStatus.error ? 'bg-red-50 text-red-700 border border-red-200' 
                  : emailStatus.sent ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}
              >
                {emailStatus.message}
              </div>
            )}

            {/* Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <button 
                type="button"
                onClick={handleWhatsAppContact}
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center transition-colors shadow-md font-medium text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </button>
              <button 
                type="submit"
                disabled={emailStatus.sending}
                className={`w-full py-3 rounded-lg transition-colors font-medium ${
                  emailStatus.sending 
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                    : 'bg-yellow-500 text-gray-800 hover:bg-yellow-400'
                }`}
              >
                {emailStatus.sending ? 'Sending...' : 'Submit Booking'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 px-8 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="tel:+971501781981" 
              className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300"
            >
              <Phone className="w-6 h-6" />
              <span>+971 50 178 1981</span>
            </a>
            <a 
              href="mailto:mr.shafeer@gmail.com" 
              className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300"
            >
              <Mail className="w-6 h-6" />
              <span>mr.shafeer@gmail.com</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <span>Dubai, United Arab Emirates</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* FOOTER REMOVED */}
    </div>
  );
};

export default ShafeerPortfolio;
