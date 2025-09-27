// src/pages/public/events/EventsPage.tsx
import React, { useState, useEffect } from 'react';
import './EventsPage.css';

const EventsPage = () => {
  const [activeCategory, setActiveCategory] = useState('hikmah');
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    organization: '',
    sheikh: '',
    eventName: '',
    eventLocation: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    serviceType: '',
    theme: '',
    attendees: '',
    expectations: '',
    otherGuests: '',
    additionalInfo: ''
  });
  const [arabicQuoteIndex, setArabicQuoteIndex] = useState(0);
  
  const arabicQuotes = [
    "وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ",
    "يَا أَيُّهَا الَّذِينَ آمَنُوا ارْكَعُوا وَاسْجُدُوا وَاعْبُدُوا رَبَّكُمْ وَافْعَلُوا الْخَيْرَ لَعَلَّكُمْ تُفْلِحُونَ",
    "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setArabicQuoteIndex(prev => (prev + 1) % arabicQuotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your booking request has been submitted successfully!');
    // Reset form
    setFormData({
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      organization: '',
      sheikh: '',
      eventName: '',
      eventLocation: '',
      eventDate: '',
      startTime: '',
      endTime: '',
      serviceType: '',
      theme: '',
      attendees: '',
      expectations: '',
      otherGuests: '',
      additionalInfo: ''
    });
  };

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <h1>Islamic Events & Programs</h1>
        <p>Join our transformative events and programs designed to deepen your understanding of Islam and strengthen your faith.</p>
        <div className="arabic-hero">{arabicQuotes[arabicQuoteIndex]}</div>
        <p>"And remind, for indeed, the reminder benefits the believers." - Quran 51:55</p>
      </section>

      {/* Events Section */}
      <section className="events-container">
        <div className="section-title">
          <h2>Upcoming Events</h2>
        </div>
        
        <div className="events-tabs">
          <button 
            className={`tab-btn ${activeCategory === 'hikmah' ? 'active' : ''}`}
            onClick={() => setActiveCategory('hikmah')}
          >
            Hikmah Events
          </button>
          <button 
            className={`tab-btn ${activeCategory === 'invited' ? 'active' : ''}`}
            onClick={() => setActiveCategory('invited')}
          >
            Sheikh Invitations
          </button>
        </div>
        
        {/* Hikmah Events */}
        <div className={`events-section ${activeCategory === 'hikmah' ? 'active' : ''}`} id="hikmah">
          <div className="section-subtitle">Events Organized by Hikmah Institute</div>
          
          <div className="events-grid">
            {/* Event 1 */}
            <div className="event-card Hikmah-card">
              <div className="event-type">Conference</div>
              <div className="event-header">
                <div className="event-icon">
                  <i className="fas fa-book-quran"></i>
                </div>
                <div className="event-header-text">
                  <h3>Quran Memorization Conference</h3>
                  <p>Annual gathering of Huffaz</p>
                </div>
              </div>
              <div className="event-body">
                <div className="event-details">
                  <div className="event-date">
                    <div className="day">15</div>
                    <div className="month">NOV</div>
                  </div>
                  <div className="event-info">
                    <p>Join us for our annual conference celebrating Quran memorization achievements and inspiring new students to begin their Hifz journey.</p>
                    <div className="event-meta">
                      <span><i className="fas fa-clock"></i> 9:00 AM - 5:00 PM</span>
                      <span><i className="fas fa-map-marker-alt"></i> Hikmah Main Campus</span>
                    </div>
                    <span className="event-status">Open for Registration</span>
                  </div>
                </div>
                <button className="btn"><i className="fas fa-calendar-plus"></i> Register Now</button>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="event-card Hikmah-card">
              <div className="event-type">Workshop</div>
              <div className="event-header">
                <div className="event-icon">
                  <i className="fas fa-scale-balanced"></i>
                </div>
                <div className="event-header-text">
                  <h3>Fiqh of Contemporary Issues</h3>
                  <p>Practical guidance for modern Muslims</p>
                </div>
              </div>
              <div className="event-body">
                <div className="event-details">
                  <div className="event-date">
                    <div className="day">22</div>
                    <div className="month">NOV</div>
                  </div>
                  <div className="event-info">
                    <p>A comprehensive workshop addressing contemporary fiqh issues in finance, technology, and social interactions from an Islamic perspective.</p>
                    <div className="event-meta">
                      <span><i className="fas fa-clock"></i> 2:00 PM - 6:00 PM</span>
                      <span><i className="fas fa-map-marker-alt"></i> Online - Zoom</span>
                    </div>
                    <span className="event-status">Limited Seats</span>
                  </div>
                </div>
                <button className="btn"><i className="fas fa-calendar-plus"></i> Register Now</button>
              </div>
            </div>
            
            {/* Event 3 */}
            <div className="event-card Hikmah-card">
              <div className="event-type">Seminar</div>
              <div className="event-header">
                <div className="event-icon">
                  <i className="fas fa-history"></i>
                </div>
                <div className="event-header-text">
                  <h3>Islamic History Symposium</h3>
                  <p>Lessons from the Golden Age</p>
                </div>
              </div>
              <div className="event-body">
                <div className="event-details">
                  <div className="event-date">
                    <div className="day">05</div>
                    <div className="month">DEC</div>
                  </div>
                  <div className="event-info">
                    <p>Explore the remarkable achievements of Islamic civilization during its golden age and draw lessons for contemporary Muslim societies.</p>
                    <div className="event-meta">
                      <span><i className="fas fa-clock"></i> 10:00 AM - 4:00 PM</span>
                      <span><i className="fas fa-map-marker-alt"></i> Islamic Cultural Center</span>
                    </div>
                    <span className="event-status">Early Bird Discount</span>
                  </div>
                </div>
                <button className="btn"><i className="fas fa-calendar-plus"></i> Register Now</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sheikh Invitations */}
        <div className={`events-section ${activeCategory === 'invited' ? 'active' : ''}`} id="invited">
          <div className="section-subtitle">Events Featuring Hikmah Sheikhs</div>
          
          <div className="events-grid">
            {/* Event 1 */}
            <div className="event-card invited-card">
              <div className="event-type">Community Event</div>
              <div className="event-header">
                <div className="event-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="event-header-text">
                  <h3>Community Unity Gathering</h3>
                  <p>With Sheikh Omar Hassan</p>
                </div>
              </div>
              <div className="event-body">
                <div className="event-details">
                  <div className="event-date">
                    <div className="day">18</div>
                    <div className="month">NOV</div>
                  </div>
                  <div className="event-info">
                    <p>Sheikh Omar will be speaking on the importance of community unity and cooperation in Islam at the annual community gathering.</p>
                    <div className="event-meta">
                      <span><i className="fas fa-clock"></i> 6:00 PM - 9:00 PM</span>
                      <span><i className="fas fa-map-marker-alt"></i> City Convention Center</span>
                    </div>
                    <span className="event-status">Free Admission</span>
                  </div>
                </div>
                <button className="btn"><i className="fas fa-info-circle"></i> Event Details</button>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="event-card invited-card">
              <div className="event-type">Interfaith Dialogue</div>
              <div className="event-header">
                <div className="event-icon">
                  <i className="fas fa-hands-praying"></i>
                </div>
                <div className="event-header-text">
                  <h3>Interfaith Peace Conference</h3>
                  <p>Featuring Dr. Amina Khalid</p>
                </div>
              </div>
              <div className="event-body">
                <div className="event-details">
                  <div className="event-date">
                    <div className="day">30</div>
                    <div className="month">NOV</div>
                  </div>
                  <div className="event-info">
                    <p>Dr. Amina will represent the Muslim perspective in this important dialogue on building peace and understanding among faith communities.</p>
                    <div className="event-meta">
                      <span><i className="fas fa-clock"></i> 3:00 PM - 7:00 PM</span>
                      <span><i className="fas fa-map-marker-alt"></i> Grand Hotel Ballroom</span>
                    </div>
                    <span className="event-status">Registration Required</span>
                  </div>
                </div>
                <button className="btn"><i className="fas fa-info-circle"></i> Event Details</button>
              </div>
            </div>
            
            {/* Event 3 */}
            <div className="event-card invited-card">
              <div className="event-type">Youth Camp</div>
              <div className="event-header">
                <div className="event-icon">
                  <i className="fas fa-campground"></i>
                </div>
                <div className="event-header-text">
                  <h3>Annual Youth Retreat</h3>
                  <p>With Ustadh Ibrahim</p>
                </div>
              </div>
              <div className="event-body">
                <div className="event-details">
                  <div className="event-date">
                    <div className="day">08</div>
                    <div className="month">DEC</div>
                  </div>
                  <div className="event-info">
                    <p>Ustadh Ibrahim will lead sessions on Islamic identity and character building at the three-day youth retreat in the mountains.</p>
                    <div className="event-meta">
                      <span><i className="fas fa-clock"></i> All Day Event</span>
                      <span><i className="fas fa-map-marker-alt"></i> Mountain Retreat Center</span>
                    </div>
                    <span className="event-status">Limited Spaces</span>
                  </div>
                </div>
                <button className="btn"><i className="fas fa-info-circle"></i> Event Details</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Booking Form */}
        <div className="booking-section">
          <div className="booking-header">
            <h2>Request a Sheikh for Your Event</h2>
            <p>Invite one of our qualified scholars to speak at your event. Fill out the form below and we'll respond within 48 hours.</p>
          </div>
          
          <form className="booking-form" onSubmit={handleSubmit}>
            {/* Contact Information Section */}
            <div className="form-group full-width">
              <h3 className="form-section-title">Contact Information</h3>
            </div>
            
            <div className="form-group">
              <label htmlFor="contactName">Your Full Name <span>*</span></label>
              <input 
                type="text" 
                id="contactName" 
                name="contactName"
                className="form-control" 
                placeholder="Enter your name" 
                value={formData.contactName}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="contactEmail">Email Address <span>*</span></label>
              <input 
                type="email" 
                id="contactEmail" 
                name="contactEmail"
                className="form-control" 
                placeholder="Enter your email" 
                value={formData.contactEmail}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="contactPhone">Phone Number <span>*</span></label>
              <input 
                type="tel" 
                id="contactPhone" 
                name="contactPhone"
                className="form-control" 
                placeholder="Enter your phone number" 
                value={formData.contactPhone}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="organization">Organization/Institution</label>
              <input 
                type="text" 
                id="organization" 
                name="organization"
                className="form-control" 
                placeholder="Enter organization name" 
                value={formData.organization}
                onChange={handleInputChange}
              />
            </div>
            
            {/* Event Information Section */}
            <div className="form-group full-width">
              <h3 className="form-section-title">Event Information</h3>
            </div>
            
            <div className="form-group">
              <label htmlFor="sheikh">Select Sheikh <span>*</span></label>
              <select 
                id="sheikh" 
                name="sheikh"
                className="form-control" 
                value={formData.sheikh}
                onChange={handleInputChange}
                required
              >
                <option value="">Choose a Sheikh...</option>
                <option value="1">Sheikh Omar Hassan (Fiqh & Contemporary Issues)</option>
                <option value="2">Dr. Amina Khalid (Quranic Studies & Tafsir)</option>
                <option value="3">Ustadh Ibrahim Al-Rashid (Quranic Arabic & Tajweed)</option>
                <option value="4">Sheikh Yusuf Abdullah (Islamic History & Seerah)</option>
                <option value="5">Ustadha Fatima Ahmed (Women's Programs & Family Counseling)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="eventName">Event Name <span>*</span></label>
              <input 
                type="text" 
                id="eventName" 
                name="eventName"
                className="form-control" 
                placeholder="e.g. Annual Islamic Conference" 
                value={formData.eventName}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="eventLocation">Location <span>*</span></label>
              <input 
                type="text" 
                id="eventLocation" 
                name="eventLocation"
                className="form-control" 
                placeholder="Venue address or online platform" 
                value={formData.eventLocation}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="eventDate">Date <span>*</span></label>
              <input 
                type="date" 
                id="eventDate" 
                name="eventDate"
                className="form-control" 
                value={formData.eventDate}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="startTime">Start Time <span>*</span></label>
              <input 
                type="time" 
                id="startTime" 
                name="startTime"
                className="form-control" 
                value={formData.startTime}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="endTime">End Time <span>*</span></label>
              <input 
                type="time" 
                id="endTime" 
                name="endTime"
                className="form-control" 
                value={formData.endTime}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="serviceType">Type of Service Required <span>*</span></label>
              <select 
                id="serviceType" 
                name="serviceType"
                className="form-control" 
                value={formData.serviceType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select service type...</option>
                <option value="teaching">Teaching Session</option>
                <option value="counselling">Counselling</option>
                <option value="lecture">Lecture/Presentation</option>
                <option value="workshop">Workshop Facilitation</option>
                <option value="panel">Panel Discussion</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="theme">Event Theme <span>*</span></label>
              <input 
                type="text" 
                id="theme" 
                name="theme"
                className="form-control" 
                placeholder="e.g. Building Strong Muslim Families" 
                value={formData.theme}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="attendees">Expected Number of Attendees <span>*</span></label>
              <input 
                type="number" 
                id="attendees" 
                name="attendees"
                className="form-control" 
                placeholder="Approximate number" 
                min="1" 
                value={formData.attendees}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="expectations">Specific Expectations <span>*</span></label>
              <textarea 
                id="expectations" 
                name="expectations"
                className="form-control" 
                placeholder="What specifically would you like the sheikh to cover?" 
                value={formData.expectations}
                onChange={handleInputChange}
                required 
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="otherGuests">Other Sheikhs/Guests Invited</label>
              <textarea 
                id="otherGuests" 
                name="otherGuests"
                className="form-control" 
                placeholder="Names of other speakers or special guests" 
                value={formData.otherGuests}
                onChange={handleInputChange}
              ></textarea>
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="additionalInfo">Additional Information</label>
              <textarea 
                id="additionalInfo" 
                name="additionalInfo"
                className="form-control" 
                placeholder="Any other important details about the event" 
                value={formData.additionalInfo}
                onChange={handleInputChange}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <i className="fas fa-paper-plane"></i> Submit Booking Request
            </button>
          </form>
        </div>
        
        {/* Our Sheikhs */}
        <div className="sheikhs-section">
          <div className="section-title">
            <h2>Our Esteemed Sheikhs</h2>
          </div>
          
          <div className="sheikhs-grid">
            {/* Sheikh 1 */}
            <div className="sheikh-card">
              <div className="sheikh-avatar">
                <i className="fas fa-user"></i>
              </div>
              <div className="sheikh-details">
                <h3>Sheikh Omar Hassan</h3>
                <div className="sheikh-title">Fiqh & Contemporary Issues</div>
                <p className="sheikh-bio">Specializing in Islamic jurisprudence and modern application of Shariah principles.</p>
              </div>
            </div>
            
            {/* Sheikh 2 */}
            <div className="sheikh-card">
              <div className="sheikh-avatar">
                <i className="fas fa-user"></i>
              </div>
              <div className="sheikh-details">
                <h3>Dr. Amina Khalid</h3>
                <div className="sheikh-title">Quranic Studies & Tafsir</div>
                <p className="sheikh-bio">Expert in Quranic exegesis with a PhD in Islamic Studies from Al-Azhar.</p>
              </div>
            </div>
            
            {/* Sheikh 3 */}
            <div className="sheikh-card">
              <div className="sheikh-avatar">
                <i className="fas fa-user"></i>
              </div>
              <div className="sheikh-details">
                <h3>Ustadh Ibrahim Al-Rashid</h3>
                <div className="sheikh-title">Quranic Arabic & Tajweed</div>
                <p className="sheikh-bio">Master of Quranic language sciences with 15+ years teaching experience.</p>
              </div>
            </div>
            
            {/* Sheikh 4 */}
            <div className="sheikh-card">
              <div className="sheikh-avatar">
                <i className="fas fa-user"></i>
              </div>
              <div className="sheikh-details">
                <h3>Sheikh Yusuf Abdullah</h3>
                <div className="sheikh-title">Islamic History & Seerah</div>
                <p className="sheikh-bio">Renowned historian specializing in Islamic civilization and Prophet's biography.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;