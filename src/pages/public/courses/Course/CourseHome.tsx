import React, { useState, useEffect } from 'react';
import './CourseHome.css';
import { Link } from 'react-router-dom';

// Type definitions
type Course = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  instructor: string;
  rating: string;
  icon: string;
  tags: string[];
  category: string;
};

type Category = {
  id: string;
  name: string;
};

const CourseHome: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('quran');
  const [arabicQuoteIndex, setArabicQuoteIndex] = useState<number>(0);
  
  const arabicQuotes = [
    "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
    "اقْرَأْ وَرَبُّكَ الْأَكْرَمُ"
  ];

  const categories: Category[] = [
    { id: 'quran', name: 'Quranic Studies' },
    { id: 'history', name: 'Islamic History' },
    { id: 'fiqh', name: 'Fiqh & Jurisprudence' },
    { id: 'aqeedah', name: 'Aqeedah & Theology' },
    { id: 'seerah', name: 'Prophetic Seerah' }
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: "Quranic Arabic",
      description: "Master the language of the Quran",
      longDescription: "Learn to understand the Quran in its original language. This course covers grammar, vocabulary, and syntax essential for comprehending the divine text.",
      duration: "12 Weeks",
      instructor: "Ustadh Ibrahim",
      rating: "4.9/5",
      icon: "book-quran",
      tags: ["Most Popular"],
      category: "quran"
    },
    {
      id: 2,
      title: "Quran Translation & Tafsir",
      description: "Understanding the meanings",
      longDescription: "Explore the profound meanings of the Quran through detailed explanation of verses, historical context, and scholarly interpretations.",
      duration: "24 Weeks",
      instructor: "Dr. Amina Khalid",
      rating: "4.8/5",
      icon: "quran",
      tags: [],
      category: "quran"
    },
    {
      id: 3,
      title: "Tajweed Mastery",
      description: "Perfect your Quran recitation",
      longDescription: "Learn the rules of proper Quranic recitation with practical exercises and personalized feedback from qualified instructors.",
      duration: "16 Weeks",
      instructor: "Sheikh Yusuf",
      rating: "4.7/5",
      icon: "microphone",
      tags: [],
      category: "quran"
    },
    {
      id: 4,
      title: "Hifz Program",
      description: "Memorize the Holy Quran",
      longDescription: "Structured program to memorize the Quran with proven techniques, revision schedules, and personalized guidance from certified Huffaz.",
      duration: "Custom Duration",
      instructor: "Ustadh Ahmed",
      rating: "4.9/5",
      icon: "brain",
      tags: ["New"],
      category: "quran"
    },
    {
      id: 5,
      title: "Islamic Golden Age",
      description: "Scientific and cultural achievements",
      longDescription: "Explore the remarkable contributions of Muslim scholars to science, medicine, philosophy, and art during the Islamic Golden Age.",
      duration: "10 Weeks",
      instructor: "Dr. Fatima Zahra",
      rating: "4.8/5",
      icon: "landmark",
      tags: ["Featured"],
      category: "history"
    },
    {
      id: 6,
      title: "History of Islamic Civilizations",
      description: "From Andalusia to the Ottomans",
      longDescription: "Journey through the rise and fall of great Islamic empires and their lasting impact on world civilization.",
      duration: "14 Weeks",
      instructor: "Prof. Omar Hassan",
      rating: "4.6/5",
      icon: "swatchbook",
      tags: [],
      category: "history"
    },
    {
      id: 7,
      title: "Fiqh of Worship",
      description: "Purification, Prayer, Fasting, Zakat, Hajj",
      longDescription: "Comprehensive study of the rulings related to Islamic acts of worship according to the four schools of thought.",
      duration: "18 Weeks",
      instructor: "Sheikh Abdullah",
      rating: "4.7/5",
      icon: "scale-balanced",
      tags: [],
      category: "fiqh"
    },
    {
      id: 8,
      title: "Fiqh of Transactions",
      description: "Islamic commercial law",
      longDescription: "Learn about Islamic principles governing business, finance, contracts, and economic transactions in contemporary contexts.",
      duration: "12 Weeks",
      instructor: "Dr. Khalid Mahmood",
      rating: "4.5/5",
      icon: "handshake",
      tags: [],
      category: "fiqh"
    },
    {
      id: 9,
      title: "Islamic Creed (Aqeedah)",
      description: "Fundamentals of faith",
      longDescription: "Study the essential beliefs of Islam based on Quran and authentic Sunnah, covering the six articles of faith and their implications.",
      duration: "10 Weeks",
      instructor: "Sheikh Yusuf Al-Qaradawi",
      rating: "4.9/5",
      icon: "star-and-crescent",
      tags: ["New"],
      category: "aqeedah"
    },
    {
      id: 10,
      title: "Life of Prophet Muhammad (PBUH)",
      description: "Comprehensive Seerah",
      longDescription: "Detailed study of the Prophet's life from birth to passing, drawing lessons for contemporary Muslim life and character development.",
      duration: "20 Weeks",
      instructor: "Dr. Tariq Ramadan",
      rating: "4.8/5",
      icon: "person-praying",
      tags: [],
      category: "seerah"
    },
    {
      id: 11,
      title: "Lives of the Prophets",
      description: "From Adam to Jesus (AS)",
      longDescription: "Explore the stories of prophets mentioned in the Quran, their trials, lessons, and relevance to modern believers.",
      duration: "16 Weeks",
      instructor: "Ustadha Aisha Rahman",
      rating: "4.7/5",
      icon: "people-group",
      tags: [],
      category: "seerah"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setArabicQuoteIndex(prev => (prev + 1) % arabicQuotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const filteredCourses = courses.filter(course => course.category === activeCategory);

  return (
    <div className="course-home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Islamic Knowledge Courses</h1>
        <p>Embark on a journey of spiritual growth and intellectual enlightenment with our comprehensive Islamic curriculum taught by qualified scholars.</p>
        <div className="arabic-hero">{arabicQuotes[arabicQuoteIndex]}</div>
        <p>"Seeking knowledge is an obligation upon every Muslim." - Prophet Muhammad (PBUH)</p>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="section-title">
          <h2>Course Categories</h2>
        </div>
        
        <div className="category-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`tab-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="courses-grid">
          {filteredCourses.map(course => (
            <div 
              key={course.id}
              className="course-card"
              onMouseEnter={e => e.currentTarget.classList.add('hovered')}
              onMouseLeave={e => e.currentTarget.classList.remove('hovered')}
            >
              {course.tags.includes("Most Popular") && (
                <div className="popular-tag">Most Popular</div>
              )}
              {course.tags.includes("New") && (
                <div className="popular-tag">New</div>
              )}
              {course.tags.includes("Featured") && (
                <div className="popular-tag">Featured</div>
              )}
              
              <div className="course-header">
                <div className="course-icon">
                  <i className={`fas fa-${course.icon}`}></i>
                </div>
                <div className="course-header-text">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
              </div>
              
              <div className="course-body">
                <p className="course-description">{course.longDescription}</p>
                
                <div className="course-meta">
                  <div className="meta-item">
                    <i className="fas fa-clock"></i>
                    <span>{course.duration}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-user"></i>
                    <span>{course.instructor}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-star"></i>
                    <span>{course.rating}</span>
                  </div>
                </div>
                     <Link to="/courses/quranic-arabic" className="enroll-btn">Enroll Now</Link>
            
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-column">
            <h3>Hikmah Institute</h3>
            <p>Premier online Islamic education platform providing authentic knowledge with qualified scholars.</p>
            <p>"Seeking knowledge is obligatory upon every Muslim."</p>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Faculty</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Library</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li><i className="fas fa-envelope"></i> contact@Hikmah.edu</li>
              <li><i className="fas fa-phone"></i> +1 (234) 567-8900</li>
              <li><i className="fas fa-map-marker-alt"></i> 123 Knowledge Street, Islamic City</li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2025 Hikmah Premier Institute. All rights reserved.</p>
          <p>Designed with <i className="fas fa-heart"></i> for the Ummah</p>
        </div>
      </footer>
    </div>
  );
};

export default CourseHome;