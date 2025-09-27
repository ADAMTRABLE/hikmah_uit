import React, { useState } from 'react';
import './QuranArabicCourse.css';

const QuranArabicCourse = () => {
  const [activeLesson, setActiveLesson] = useState(0);
  
  // Sample course data
  const course = {
    title: "Quranic Arabic Mastery",
    arabicTitle: "اللغة العربية القرآنية",
    description: "Unlock the profound meanings of the Quran by mastering the language of revelation.",
    instructor: "Yusuf Ali Bulafu",
    duration: "12 Weeks",
    rating: 4.9,
    reviews: 142,
    modules: [
      {
        title: "Module 1: Introduction to Arabic Script",
        lessons: [
          { 
            title: "Lesson 1: The Arabic Alphabet", 
            duration: "15:30", 
            videoUrl: "https://www.youtube.com/embed/NFcLr58wFmQ",
            description: "Learn the 28 letters of the Arabic alphabet and their basic forms."
          },
          { 
            title: "Lesson 2: Letter Forms", 
            duration: "18:45", 
            videoUrl: "https://www.youtube.com/embed/K_Jplg8uiis",
            description: "Understand how letters change shape based on their position in words."
          },
          { 
            title: "Lesson 3: Vowels and Pronunciation", 
            duration: "22:10", 
            videoUrl: "https://www.youtube.com/embed/6BbHsLPkvlw",
            description: "Master the vowel system and proper pronunciation of Arabic letters."
          }
        ]
      },
      {
        title: "Module 2: Basic Grammar Concepts",
        lessons: [
          { 
            title: "Lesson 1: Nouns and Pronouns", 
            duration: "20:15", 
            videoUrl: "https://www.youtube.com/embed/abc123",
            description: "Introduction to Arabic nouns, gender, and pronoun usage."
          },
          { 
            title: "Lesson 2: Introduction to Verbs", 
            duration: "25:20", 
            videoUrl: "https://www.youtube.com/embed/def456",
            description: "Learn about Arabic verb forms and basic conjugation."
          },
          { 
            title: "Lesson 3: Sentence Structure", 
            duration: "19:30", 
            videoUrl: "https://www.youtube.com/embed/ghi789",
            description: "Understand how to form basic sentences in Arabic."
          }
        ]
      },
      {
        title: "Module 3: Quranic Vocabulary",
        lessons: [
          { 
            title: "Lesson 1: Common Quranic Words", 
            duration: "28:45", 
            videoUrl: "https://www.youtube.com/embed/jkl012",
            description: "Learn the most frequently used words in the Quran."
          },
          { 
            title: "Lesson 2: Root Words System", 
            duration: "32:10", 
            videoUrl: "https://www.youtube.com/embed/mno345",
            description: "Discover the root-based system of Arabic vocabulary."
          },
          { 
            title: "Lesson 3: Vocabulary in Context", 
            duration: "24:20", 
            videoUrl: "https://www.youtube.com/embed/pqr678",
            description: "See how Quranic vocabulary is used in actual verses."
          }
        ]
      }
    ]
  };

  // Flatten all lessons for easier navigation
  const allLessons = course.modules.flatMap(module => module.lessons);

  const handleLessonSelect = (index) => {
    setActiveLesson(index);
  };

  const navigateLesson = (direction) => {
    if (direction === 'prev' && activeLesson > 0) {
      setActiveLesson(activeLesson - 1);
    } else if (direction === 'next' && activeLesson < allLessons.length - 1) {
      setActiveLesson(activeLesson + 1);
    }
  };

  return (
    <div className="course-container">
      {/* Header - Not Fixed */}
      <header className="course-header">
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <h1>{course.title}</h1>
              <div className="arabic-title">{course.arabicTitle}</div>
              <p className="course-description">{course.description}</p>
            </div>
            <div className="header-meta">
              <div className="course-meta">
                <span><i className="fas fa-clock"></i> {course.duration}</span>
                <span><i className="fas fa-user"></i> {course.instructor}</span>
                <span><i className="fas fa-star"></i> {course.rating} ({course.reviews} reviews)</span>
              </div>
              <div className="header-actions">
                <button className="enroll-btn">
                  <i className="fas fa-shopping-cart"></i> Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="course-main-content">
        <div className="container">
          <div className="content-grid">
            {/* Syllabus Sidebar */}
            <div className="syllabus-sidebar">
              <h3>Course Content</h3>
              <div className="syllabus-list">
                {course.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="module">
                    <div className="module-title">{module.title}</div>
                    <div className="lessons-list">
                      {module.lessons.map((lesson, lessonIndex) => {
                        // Calculate global index for this lesson
                        const globalIndex = course.modules
                          .slice(0, moduleIndex)
                          .reduce((acc, m) => acc + m.lessons.length, 0) + lessonIndex;
                        
                        return (
                          <div 
                            key={lessonIndex} 
                            className={`lesson-item ${globalIndex === activeLesson ? 'active' : ''}`}
                            onClick={() => handleLessonSelect(globalIndex)}
                          >
                            <div className="lesson-play-icon">
                              <i className={`fas ${globalIndex === activeLesson ? 'fa-pause' : 'fa-play'}`}></i>
                            </div>
                            <div className="lesson-info">
                              <div className="lesson-title">{lesson.title}</div>
                              <div className="lesson-duration">{lesson.duration}</div>
                            </div>
                            <div className="lesson-status">
                              {globalIndex < activeLesson ? (
                                <i className="fas fa-check-circle completed"></i>
                              ) : globalIndex === activeLesson ? (
                                <i className="fas fa-circle active"></i>
                              ) : (
                                <i className="far fa-circle"></i>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Player Area */}
            <div className="video-content-area">
              <div className="video-player-container">
                <div className="video-player">
                  <iframe 
                    src={allLessons[activeLesson].videoUrl}
                    title={allLessons[activeLesson].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <h2>{allLessons[activeLesson].title}</h2>
                  <p className="lesson-description">{allLessons[activeLesson].description}</p>
                  <div className="lesson-meta">
                    <span>Lesson {activeLesson + 1} of {allLessons.length}</span>
                    <span>{allLessons[activeLesson].duration}</span>
                  </div>
                </div>
                
                <div className="video-navigation">
                  <button 
                    className="nav-btn prev" 
                    onClick={() => navigateLesson('prev')}
                    disabled={activeLesson === 0}
                  >
                    <i className="fas fa-arrow-left"></i> Previous Lesson
                  </button>
                  <button 
                    className="nav-btn next" 
                    onClick={() => navigateLesson('next')}
                    disabled={activeLesson === allLessons.length - 1}
                  >
                    Next Lesson <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>

              {/* Lesson Notes Section */}
              <div className="lesson-notes">
                <h3>Lesson Notes</h3>
                <div className="notes-content">
                  <p>In this lesson, we cover the fundamental concepts of {allLessons[activeLesson].title.toLowerCase()}.</p>
                  <ul>
                    <li>Key terminology and definitions</li>
                    <li>Practical examples from the Quran</li>
                    <li>Common mistakes to avoid</li>
                    <li>Practice exercises for reinforcement</li>
                  </ul>
                  <div className="download-resources">
                    <button className="download-btn">
                      <i className="fas fa-download"></i> Download Lesson Notes
                    </button>
                    <button className="download-btn">
                      <i className="fas fa-file-pdf"></i> Download Exercises
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranArabicCourse;