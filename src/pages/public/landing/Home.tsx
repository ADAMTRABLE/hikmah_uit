import React, { useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('all');

  const courses = [
    {
      id: 1,
      category: 'arabic',
      title: 'Quranic Arabic Foundation',
      duration: '12 weeks',
      level: 'Beginner',
      price: '$99',
      badge: 'Popular',
    },
    {
      id: 2,
      category: 'quran',
      title: 'Tajweed Mastery',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$79',
    },
    {
      id: 3,
      category: 'fiqh',
      title: 'Fiqh of Worship',
      duration: '10 weeks',
      level: 'All Levels',
      price: '$89',
    },
    {
      id: 4,
      category: 'history',
      title: 'Islamic History Essentials',
      duration: '6 weeks',
      level: 'All Levels',
      price: '$69',
    },
  ];


  const videos = [
    {
      id: 1,
      title: "Loving Muhammad ﷺ – Part 1",
      src: "https://www.youtube.com/embed/NFcLr58wFmQ",
      description: "Episode 1: Why a Series about Loving Muhammad ﷺ - Loving Muhammad ﷺ"
    },
    {
      id: 2,
      title: "Loving Muhammad ﷺ – Part 2",
      src: "https://www.youtube.com/embed/K_Jplg8uiis",
      description: "Episode 2: What is True love? - Loving Muhammad ﷺ"
    },
    {
      id: 3,
      title: "Loving Muhammad ﷺ – Part 3",
      src: "https://www.youtube.com/embed/6BbHsLPkvlw",
      description: "Episode 3: Does Allah love me? - Loving Muhammad ﷺ"
    },
    {
      id: 4,
      title: "Loving Muhammad ﷺ – Part 4",
      src: "https://www.youtube.com/embed/SWIIXPkuo1g",
      description: "Episode 4: The Greatest Love Story - Loving Muhammad ﷺ"
    }
  ];

  const filteredCourses =
    activeTab === 'all'
      ? courses
      : courses.filter((course) => course.category === activeTab);

  const testimonials = [
    {
      id: 1,
      content:
        "The Arabic course completely changed my relationship with the Quran. I can now understand what I'm reading for the first time in my life.",
      author: "Kabuya Fatwiinah",
      avatar: "KF",
    },
    {
      id: 2,
      content:
        "The instructors are knowledgeable and passionate. They make complex topics easy to understand and apply.",
      author: "Nabunya Taus",
      avatar: "NT",
    },
    {
      id: 3,
      content:
        "The community aspect is amazing. I've connected with brothers and sisters from around the world who are also seeking knowledge.",
      author: "Kimbowa Yasin",
      avatar: "KY",
    },
  ];

  return (
    <div className={styles.homeLanding}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>Deepen Your Understanding of Islam</h1>
              <p>
                Join thousands of students learning Quranic Arabic, Tafsir,
                and Islamic Studies with world-class instructors.
              </p>
              <div className={styles.heroButtons}>
                <button className={styles.btnPrimary}>Start Learning</button>
                <button className={styles.btnOutlineWhite}>
                  Explore Courses
                </button>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.imagePlaceholder}>
                <i className="fas fa-graduation-cap"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Why Choose Hikmah Online School?</h2>
            <p>
              Experience transformative Islamic education that connects you to
              the authentic tradition
            </p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Qualified Instructors</h3>
              <p>Learn from certified scholars with years of teaching experience</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-book-open"></i>
              </div>
              <h3>Comprehensive Curriculum</h3>
              <p>Structured courses from beginner to advanced levels</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-users"></i>
              </div>
              <h3>Community Learning</h3>
              <p>Join a global community of students and seekers of knowledge</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-laptop"></i>
              </div>
              <h3>Flexible Access</h3>
              <p>Learn at your own pace from anywhere in the world</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className={styles.coursesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Featured Courses</h2>
            <p>Explore our most popular courses in Quranic studies and Islamic sciences</p>
          </div>

          <div className={styles.coursesTabs}>
            <button
              className={`${styles.tabBtn} ${activeTab === 'all' ? styles.active : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Courses
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'arabic' ? styles.active : ''}`}
              onClick={() => setActiveTab('arabic')}
            >
              Arabic
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'quran' ? styles.active : ''}`}
              onClick={() => setActiveTab('quran')}
            >
              Quran
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'fiqh' ? styles.active : ''}`}
              onClick={() => setActiveTab('fiqh')}
            >
              Fiqh
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'history' ? styles.active : ''}`}
              onClick={() => setActiveTab('history')}
            >
              History
            </button>
          </div>

          <div className={styles.coursesGrid}>
            {filteredCourses.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseImage}>
                  <div className={styles.imagePlaceholder}>
                    <i className="fas fa-book-quran"></i>
                  </div>
                  {course.badge && <div className={styles.courseBadge}>{course.badge}</div>}
                </div>
                <div className={styles.courseContent}>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className={styles.courseMeta}>
                    <span><i className="fas fa-clock"></i> {course.duration}</span>
                    <span><i className="fas fa-user"></i> {course.level}</span>
                  </div>
                  <div className={styles.courseFooter}>
                    <div className={styles.coursePrice}>{course.price}</div>
                    <button className={styles.btnOutline}>Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sectionCta}>
            <button className={styles.btnPrimary}>View All Courses</button>
          </div>
        </div>
      </section>



       <section className={styles.videosSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Series: Loving Prophet Muhammad ﷺ</h2>
            <div className={styles.headerDecoration}>
              <span>ﷺ</span>
            </div>
            <p>Watch our most insightful lectures and series about the life and teachings of Prophet Muhammad ﷺ</p>
          </div>

          <div className={styles.videosGrid}>
            {videos.map(video => (
              <div key={video.id} className={styles.videoCard}>
                <div className={styles.videoWrapper}>
                  <iframe 
                    src={video.src} 
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className={styles.playIcon}>
                    <i className="fas fa-play-circle"></i>
                  </div>
                </div>
                <div className={styles.videoContent}>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className={styles.instructorsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Meet Our Instructors</h2>
            <p>Learn from world-class scholars and educators who are passionate about teaching</p>
          </div>
          <div className={styles.instructorsGrid}>
            <div className={styles.instructorCard}>
              <div className={styles.instructorAvatar}>S</div>
              <h4>Sheikh Muḥaddith Adam Trable</h4>
              <p>Arabic & Quranic Studies</p>
            </div>
            <div className={styles.instructorCard}>
              <div className={styles.instructorAvatar}>M</div>
              <h4>Mufti Hasakya Mousa</h4>
              <p>Fiqh & Islamic Law</p>
            </div>
            <div className={styles.instructorCard}>
              <div className={styles.instructorAvatar}>F</div>
              <h4>Āyatullāh Abel Sentamu</h4>
              <p>Islamic History & Tafsir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>What Our Students Say</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t) => (
              <div key={t.id} className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <p>"{t.content}"</p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>{t.avatar}</div>
                  <div className={styles.authorDetails}>
                    <h4>{t.author}</h4>
                    <span>Student</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest updates and new courses delivered directly to your inbox</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Your email address" />
            <button type="submit"><i className="fas fa-arrow-right"></i></button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Start Your Learning Journey Today</h2>
          <p>Join thousands of students worldwide who are deepening their understanding of Islam</p>
          <button className={styles.btnPrimary}>Get Started for Free</button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <div className={styles.logo}>
                <div className={styles.logoIcon}><i className="fas fa-book-quran"></i></div>
                <div className={styles.logoText}>
                  <h3>Hikmah Online School</h3>
                  <span>Premier Islamic Education</span>
                </div>
              </div>
              <p>Providing authentic Islamic knowledge worldwide through comprehensive courses and qualified instructors.</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Instructors</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Courses</h4>
              <ul>
                <li><a href="#">Quranic Arabic</a></li>
                <li><a href="#">Tajweed</a></li>
                <li><a href="#">Fiqh</a></li>
                <li><a href="#">Islamic History</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Connect With Us</h4>
              <div className={styles.socialLinks}>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} Hikmah Online School. All rights reserved.</p>
            <div className={styles.footerLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
