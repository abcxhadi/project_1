import React from 'react';
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
  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      
      {/* HEADER */}
      <header className="bg-black text-white shadow-lg">
        <div className="py-6 px-8 flex justify-center items-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-3">
              <Car className="w-10 h-10 text-white" />
              <h1 className="text-3xl font-bold">Shafeer Thazhe Veetil</h1>
            </div>
            <p className="text-gray-300 font-medium">Professional Chauffeur Service</p>
          </div>
        </div>
        <nav className="py-3 border-t border-gray-800 bg-black">
          <div className="container mx-auto flex justify-center">
            <ul className="flex flex-wrap justify-center space-x-2 md:space-x-6 px-4">
              <li className="my-1">
                <a
                  href="#services"
                  className="block px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors"
                >
                  Services
                </a>
              </li>
              <li className="my-1">
                <a
                  href="#fleet"
                  className="block px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors"
                >
                  Fleet
                </a>
              </li>
              <li className="my-1">
                <a
                  href="#booking"
                  className="block px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-gray-900">
          <img
            src="/wall.jpg"
            alt="Professional Chauffeur Service"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative h-full flex items-center justify-center z-20 px-6">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Chauffeur Service</h2>
            <p className="text-xl mb-8">Luxury transportation with safety, punctuality, and comfort</p>
            <a
              href="#booking"
              className="inline-block bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-xl"
            >
              Book Your Ride
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-12"></div>
          <div className="flex flex-col items-center">
            <div className="space-y-6 max-w-3xl text-center">
              <p className="text-gray-700 leading-relaxed">
                <span className="block text-2xl font-bold text-black mb-4">I'm Shafeer Thazhe Veetil,</span>
                a professional chauffeur with over a decade of driving experience in the UAE. I provide premium chauffeur services with an emphasis on safety, punctuality, and professionalism. My extensive knowledge of roads and routes ensures efficient travel, while my commitment to customer service guarantees a comfortable and pleasant journey.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-[#fafafa] p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 text-center border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <Shield className="w-8 h-8 text-gray-800" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Safe Driving</h4>
                  <p className="text-sm text-gray-600">Impeccable safety record throughout my career</p>
                </div>
                <div className="bg-[#fafafa] p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 text-center border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <Clock className="w-8 h-8 text-gray-800" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Punctual</h4>
                  <p className="text-sm text-gray-600">Always on time, every time</p>
                </div>
                <div className="bg-[#fafafa] p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 text-center border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <Award className="w-8 h-8 text-gray-800" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Experienced</h4>
                  <p className="text-sm text-gray-600">Decade of professional driving expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-16 px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">My Experience</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#fafafa] p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 text-center border border-gray-100">
              <div className="flex justify-center mb-4">
                <Award className="w-8 h-8 text-gray-800" />
              </div>
              <div className="text-3xl font-bold mb-2 text-gray-900">10+</div>
              <div className="text-sm text-gray-600">Years of Experience</div>
            </div>
            <div className="bg-[#fafafa] p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 text-center border border-gray-100">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8 text-gray-800" />
              </div>
              <div className="text-3xl font-bold mb-2 text-gray-900">5000+</div>
              <div className="text-sm text-gray-600">Clients Served</div>
            </div>
            <div className="bg-[#fafafa] p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 text-center border border-gray-100">
              <div className="flex justify-center mb-4">
                <Car className="w-8 h-8 text-gray-800" />
              </div>
              <div className="text-3xl font-bold mb-2 text-gray-900">500k+</div>
              <div className="text-sm text-gray-600">Kilometers Driven</div>
            </div>
            <div className="bg-[#fafafa] p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 text-center border border-gray-100">
              <div className="flex justify-center mb-4">
                <Star className="w-8 h-8 text-gray-800" />
              </div>
              <div className="text-3xl font-bold mb-2 text-gray-900">250+</div>
              <div className="text-sm text-gray-600">VIP Clients</div>
            </div>
          </div>
          <div className="mt-12 bg-[#fafafa] p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Professional Qualifications</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-gray-800 mr-3 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Professional Chauffeur</span>
                  <p className="text-gray-600">
                    Certified professional driver with specialized training in VIP transportation
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-gray-800 mr-3 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">10+ Years in UAE</span>
                  <p className="text-gray-600">
                    Extensive experience navigating UAE roads and providing premium service
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-gray-800 mr-3 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Safe Driving Record</span>
                  <p className="text-gray-600">
                    Impeccable safety record with zero incidents throughout my career
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-gray-800 mr-3 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Excellent Route Knowledge</span>
                  <p className="text-gray-600">
                    In-depth knowledge of routes, traffic patterns, and shortcuts
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-gray-800 mr-3 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Professional Etiquette</span>
                  <p className="text-gray-600">
                    Trained in VIP service protocols and professional communication
                  </p>
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
          <div className="w-20 h-1 bg-black mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fafafa] rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="mb-4">
                  <Sun className="w-10 h-10 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Full Day Service</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">800 AED</span>
                  <span className="text-gray-600 ml-2">/ Full Day</span>
                </div>
                <p className="text-gray-600">
                  Luxury chauffeur service for high-profile clients with discretion and premium comfort.
                </p>
              </div>
            </div>
            <div className="bg-[#fafafa] rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="mb-4">
                  <Sunrise className="w-10 h-10 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Half Day Service</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">400 AED</span>
                  <span className="text-gray-600 ml-2">/ Half Day</span>
                </div>
                <p className="text-gray-600">
                  Reliable transportation for executives and business professionals with punctuality guaranteed.
                </p>
              </div>
            </div>
            <div className="bg-[#fafafa] rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="mb-4">
                  <Route className="w-10 h-10 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Transfer</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">Starting from 150 AED</span>
                  <span className="text-gray-600 ml-2">/ Single Trip</span>
                </div>
                <p className="text-gray-600">
                  One-way transportation service with professional chauffeur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLEET SECTION */}
      <section id="fleet" className="py-16 px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">My Fleet</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#fafafa] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="grid md:grid-cols-2">
                <img src="/previa.jpg" alt="Toyota Previa" className="w-full h-full object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Toyota Previa</h3>
                  <div className="text-gray-600 font-medium mb-4">9 Passengers</div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-gray-800" />
                      <span className="text-gray-700">Comfortable Seating</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-gray-800" />
                      <span className="text-gray-700">Air Conditioning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-gray-800" />
                      <span className="text-gray-700">Smooth Ride</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fafafa] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="grid md:grid-cols-2">
                <img src="/carnival.jpg" alt="Kia Carnival" className="w-full h-full object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Kia Carnival</h3>
                  <div className="text-gray-600 font-medium mb-4">8 Passengers</div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-gray-800" />
                      <span className="text-gray-700">Spacious Interior</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-gray-800" />
                      <span className="text-gray-700">Premium Comfort</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-gray-800" />
                      <span className="text-gray-700">Modern Amenities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-16 px-4 sm:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Book My Services</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Fill out the form below to request a booking. I'll get back to you promptly to confirm your reservation.
          </p>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Left Side - Form Description */}
              <div className="bg-black text-white p-6 md:p-8 md:w-1/3">
                <h3 className="text-xl font-semibold mb-4">Booking Details</h3>
                <p className="text-gray-300 mb-6">
                  Please provide your travel details and preferences so I can serve you better.
                </p>
                <div className="space-y-4 mt-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Instant confirmation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">24/7 customer support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Flexible cancellation</span>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <h4 className="font-medium mb-2">Need urgent assistance?</h4>
                  <a href="tel:+971501781981" className="flex items-center space-x-2 text-white hover:text-gray-300 mb-3">
                    <Phone className="w-5 h-5" />
                    <span>+971 50 178 1981</span>
                  </a>
                </div>
              </div>
              {/* Right Side - Static Form */}
              <div className="p-6 md:p-8 md:w-2/3">
                <form action="#" method="POST" className="space-y-5">
                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Type
                    </label>
                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 relative">
                      <Briefcase className="w-5 h-5 mr-3 text-gray-400" />
                      <select id="service" name="service" className="bg-transparent w-full focus:outline-none appearance-none" defaultValue="">
                        <option value="">Select Service Type</option>
                        <option value="Full Day Service - 800 AED">Full Day Service - 800 AED</option>
                        <option value="Half Day Service - 400 AED">Half Day Service - 400 AED</option>
                        <option value="Transfer - Starting from 150 AED">Transfer - Starting from 150 AED</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Date
                      </label>
                      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                        <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                        <input id="bookingDate" type="date" name="bookingDate" className="bg-transparent w-full focus:outline-none" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="bookingTime" className="block text-sm font-medium text-gray-700 mb-1">
                        Time
                      </label>
                      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                        <Clock className="w-5 h-5 mr-3 text-gray-400" />
                        <input id="bookingTime" type="time" name="bookingTime" className="bg-transparent w-full focus:outline-none" />
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
                      <input id="clientName" type="text" name="clientName" placeholder="Your Full Name" className="bg-transparent w-full focus:outline-none placeholder:text-gray-400" />
                    </div>
                  </div>
                  {/* Car Type Selection */}
                  <div>
                    <label htmlFor="carType" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Car
                    </label>
                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 relative">
                      <Car className="w-5 h-5 mr-3 text-gray-400" />
                      <select id="carType" name="carType" className="bg-transparent w-full focus:outline-none appearance-none" defaultValue="">
                        <option value="">Select Car Type</option>
                        <option value="Toyota Previa">Toyota Previa - 9 Passengers</option>
                        <option value="Kia Carnival">Kia Carnival - 8 Passengers</option>
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
                      <input id="pickupLocation" type="text" name="pickupLocation" placeholder="Enter pickup address" className="bg-transparent w-full focus:outline-none placeholder:text-gray-400" />
                    </div>
                  </div>
                  {/* Drop-off Location */}
                  <div>
                    <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-700 mb-1">
                      Drop-off Location
                    </label>
                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                      <Navigation className="w-5 h-5 mr-3 text-gray-400" />
                      <input id="dropoffLocation" type="text" name="dropoffLocation" placeholder="Enter destination address" className="bg-transparent w-full focus:outline-none placeholder:text-gray-400" />
                    </div>
                  </div>
                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                        <Phone className="w-5 h-5 mr-3 text-gray-400" />
                        <input id="phoneNumber" type="tel" name="phoneNumber" placeholder="Your contact number" className="bg-transparent w-full focus:outline-none placeholder:text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                        <Mail className="w-5 h-5 mr-3 text-gray-400" />
                        <input id="email" type="email" name="email" placeholder="Your email address" className="bg-transparent w-full focus:outline-none placeholder:text-gray-400" />
                      </div>
                    </div>
                  </div>
                  {/* Static status message */}
                  <div className="p-4 rounded-lg text-center bg-gray-50 text-gray-700 border border-gray-200">
                    Your booking request status will appear here.
                  </div>
                  {/* Buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4  pt-4">
                    <a
                      href="https://wa.me/+971501781981"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-black text-white rounded-lg flex items-center justify-center transition-colors shadow-md font-medium text-lg hover:bg-gray-900"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Book via WhatsApp
                    </a>
                    <button
                      type="submit"
                      className="w-full py-3 bg-black text-white hover:bg-gray-900 rounded-lg font-medium transition-colors"
                    >
                      Submit Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 px-8 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="tel:+971501781981" className="flex items-center space-x-2 text-white hover:text-gray-300">
              <Phone className="w-6 h-6" />
              <span>+971 50 178 1981</span>
            </a>
            <a href="mailto:mr.shafeer@gmail.com" className="flex items-center space-x-2 text-white hover:text-gray-300">
              <Mail className="w-6 h-6" />
              <span>mr.shafeer@gmail.com</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6" />
              <span>Dubai, United Arab Emirates</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ShafeerPortfolio;
