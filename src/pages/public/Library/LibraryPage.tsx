import React, { useState, useRef } from 'react';
import './LibraryPage.css';

const LibraryPage = () => {
  // State for filtering and categories
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('Quran');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [selectedSurah, setSelectedSurah] = useState('Al-Fatiha');
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for file upload and form
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState('');
  const [formData, setFormData] = useState({
    resourceTitle: '',
    resourceAuthor: '',
    resourceType: '',
    resourceCategory: '',
    resourceDescription: '',
    contactEmail: '',
    contactPhone: '',
    additionalNotes: ''
  });
  
  const fileInputRef = useRef(null);
  
  // Categories and subcategories
  const categories = [
    "Quran", "Arabic", "Tafseer", "History", "Seerah", "Aqeedah", "Fiqh", "Spirituality", "Family"
  ];
  
  const subcategories = {
    Arabic: ["All", "Topics", "Deep Dives", "Special Editions"],
    Tafseer: ["All", "Topics", "Deep Dives", "Special Editions"],
    History: ["All", "Topics", "Deep Dives", "Special Editions"],
    Seerah: ["All", "Topics", "Deep Dives", "Special Editions"],
    Aqeedah: ["All", "Topics", "Deep Dives", "Special Editions"],
    Fiqh: ["All", "Topics", "Deep Dives", "Special Editions"],
    Spirituality: ["All", "Topics", "Deep Dives", "Special Editions"],
    Family: ["All", "Topics", "Deep Dives", "Special Editions"],
  };
  
  const surahs = [
    "Al-Fatiha", "Al-Baqarah", "Al-Imran", "An-Nisa", "Al-Maidah", "Al-Anam", "Al-Araf"
  ];
  
  // Arabic quotes for the hero section
  const arabicQuotes = [
    "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ",
    "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
    "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ"
  ];
  
  const [arabicQuoteIndex] = useState(0);
  
  // Sample resources with more specific data for each Surah
  const mockResources = [
    { 
      id: 1, 
      category: "Quran", 
      subcategory: "Al-Fatiha", 
      title: "Introduction to Surah Al-Fatiha", 
      description: "Deep explanation of the opening chapter of the Quran",
      author: "Ustadh Ibrahim Al-Rashid",
      authorInitials: "IA",
      type: "video",
      meta: { duration: "45m", views: "1.2K" },
      icon: "play-circle",
      url: "https://www.youtube.com/embed/sP9RCDAlwJk"
    },
    { 
      id: 2, 
      category: "Quran", 
      subcategory: "Al-Fatiha", 
      title: "Tafsir of Surah Al-Fatiha", 
      description: "Detailed commentary on the meanings of Al-Fatiha",
      author: "Dr. Amina Khalid",
      authorInitials: "AK",
      type: "pdf",
      meta: { pages: "25 Pages", downloads: "845 Downloads" },
      icon: "file-pdf",
      url: "https://docs.google.com/document/d/1v0l4TC2ZyFYyk6Y0ggFw86li2F6cwr5GLuTUyrzSpT4/edit?usp=sharing"
    },
    { 
      id: 3, 
      category: "Quran", 
      subcategory: "Al-Baqarah", 
      title: "Lessons from Surah Al-Baqarah (Part 1)", 
      description: "Exploring themes in the longest surah - verses 1-100",
      author: "Sheikh Omar Hassan",
      authorInitials: "OH",
      type: "video",
      meta: { duration: "1h 15m", views: "2.3K" },
      icon: "play-circle",
      url: "https://www.youtube.com/embed/sP9RCDAlwJk"
    },
    { 
      id: 4, 
      category: "Quran", 
      subcategory: "Al-Baqarah", 
      title: "Lessons from Surah Al-Baqarah (Part 2)", 
      description: "Exploring themes in the longest surah - verses 101-200",
      author: "Sheikh Omar Hassan",
      authorInitials: "OH",
      type: "video",
      meta: { duration: "1h 20m", views: "1.8K" },
      icon: "play-circle",
      url: "https://www.youtube.com/embed/sP9RCDAlwJk"
    },
    { 
      id: 5, 
      category: "Quran", 
      subcategory: "Al-Baqarah", 
      title: "Tafsir of Ayatul Kursi", 
      description: "Detailed explanation of the Verse of the Throne",
      author: "Ustadh Ibrahim Al-Rashid",
      authorInitials: "IA",
      type: "pdf",
      meta: { pages: "35 Pages", downloads: "1.2K Downloads" },
      icon: "file-pdf",
      url: "https://docs.google.com/document/d/1v0l4TC2ZyFYyk6Y0ggFw86li2F6cwr5GLuTUyrzSpT4/edit?usp=sharing"
    },
    { 
      id: 6, 
      category: "Arabic", 
      subcategory: "Topics", 
      title: "Arabic Grammar Basics", 
      description: "Introduction to Nahw and Sarf",
      author: "Sheikh Yusuf Abdullah",
      authorInitials: "YA",
      type: "audio",
      meta: { duration: "2h 30m", listens: "980 Listens" },
      icon: "headphones",
      url: "#"
    },
    { 
      id: 7, 
      category: "Tafseer", 
      subcategory: "Special Editions", 
      title: "Ramadan Tafseer Series", 
      description: "Special lectures for Ramadan",
      author: "Ustadh Ibrahim Al-Rashid",
      authorInitials: "IA",
      type: "video",
      meta: { duration: "3h 15m", views: "2.3K" },
      icon: "play-circle",
      url: "https://www.youtube.com/embed/sP9RCDAlwJk"
    },
  ];

  // Video resources for each Surah
  const surahVideos = {
    "Al-Fatiha": [
      {
        id: 1,
        title: "Introduction to Surah Al-Fatiha",
        src: "https://www.youtube.com/embed/sP9RCDAlwJk",
        description: "Deep explanation of the opening chapter of the Quran",
        duration: "45m",
        views: "1.2K"
      },
      {
        id: 2,
        title: "Tafsir of Surah Al-Fatiha",
        src: "https://www.youtube.com/embed/sP9RCDAlwJk",
        description: "Detailed commentary on the meanings of Al-Fatiha",
        duration: "38m",
        views: "980"
      }
    ],
    "Al-Baqarah": [
      {
        id: 1,
        title: "Lessons from Surah Al-Baqarah (Part 1)",
        src: "https://www.youtube.com/embed/sP9RCDAlwJk",
        description: "Exploring themes in the longest surah - verses 1-100",
        duration: "1h 15m",
        views: "2.3K"
      },
      {
        id: 2,
        title: "Lessons from Surah Al-Baqarah (Part 2)",
        src: "https://www.youtube.com/embed/Sf1DdajN750",
        description: "Exploring themes in the longest surah - verses 101-200",
        duration: "1h 20m",
        views: "1.8K"
      },
      {
        id: 3,
        title: "Tafsir of Ayatul Kursi",
        src: "https://www.youtube.com/embed/sP9RCDAlwJk",
        description: "Detailed explanation of the Verse of the Throne",
        duration: "52m",
        views: "3.5K"
      }
    ],
    "Al-Imran": [
      {
        id: 1,
        title: "Introduction to Surah Al-Imran",
        src: "https://www.youtube.com/embed/sP9RCDAlwJk",
        description: "Overview of the third chapter of the Quran",
        duration: "40m",
        views: "1.5K"
      }
    ],
    "An-Nisa": [
      {
        id: 1,
        title: "Key Themes in Surah An-Nisa",
        src: "https://www.youtube.com/embed/sP9RCDAlwJk",
        description: "Understanding women's rights and social justice in Islam",
        duration: "55m",
        views: "1.7K"
      }
    ]
  };
  
  // Filter resources based on selected category, subcategory, surah, type, and search query
  const filteredResources = mockResources.filter((res) => {
    // Filter by category and subcategory/surah
    const matchesCategory = selectedCategory === "Quran" 
      ? res.category === "Quran" && res.subcategory === selectedSurah
      : res.category === selectedCategory && 
        (selectedSubcategory === "All" || res.subcategory === selectedSubcategory);
    
    // Filter by type
    const matchesType = activeFilter === 'all' || res.type === activeFilter;
    
    // Filter by search query
    const matchesSearch = searchQuery === '' || 
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesType && matchesSearch;
  });
  
  // Get videos for the selected Surah (if Quran category is selected)
  const currentSurahVideos = selectedCategory === "Quran" ? surahVideos[selectedSurah] || [] : [];
  
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory("All");
    if (category === "Quran") {
      setSelectedSurah("Al-Fatiha");
    }
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileUploaded(true);
      setFileName(e.target.files[0].name);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your resource has been submitted for review! Our scholars will evaluate it and you will be notified once it is approved.');
    
    // Reset form
    setFormData({
      resourceTitle: '',
      resourceAuthor: '',
      resourceType: '',
      resourceCategory: '',
      resourceDescription: '',
      contactEmail: '',
      contactPhone: '',
      additionalNotes: ''
    });
    
    // Reset file upload
    setFileUploaded(false);
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const getResourceTypeClass = (type) => {
    switch (type) {
      case 'video': return 'video';
      case 'pdf': return 'pdf';
      case 'audio': return 'audio';
      case 'article': return 'article';
      default: return '';
    }
  };

  return (
    <div className="library-page">
      {/* Hero Section */}
      <section className="library-hero">
        <h1>Hikmah Islamic Knowledge Repository</h1>
        <p>Access a vast collection of authentic Islamic resources including articles, lectures, books, and multimedia content.</p>
        <div className="arabic-hero">{arabicQuotes[arabicQuoteIndex]}</div>
        <p>"Say: Are those who know equal to those who do not know?" - Quran 39:9</p>
      </section>

      {/* Category Tabs */}
      <div className="library-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`library-tab ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Library Container */}
      <section className="library-container">
        {/* Search and Filter Section */}
        <div className="search-section">
          <h2>Search Our Library</h2>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search for resources, topics, authors..." 
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="search-btn"><i className="fas fa-search"></i></button>
          </div>
          <div className="filter-options">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              All Resources
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'video' ? 'active' : ''}`}
              onClick={() => handleFilterClick('video')}
            >
              Videos
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'pdf' ? 'active' : ''}`}
              onClick={() => handleFilterClick('pdf')}
            >
              PDFs
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'audio' ? 'active' : ''}`}
              onClick={() => handleFilterClick('audio')}
            >
              Audios
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'article' ? 'active' : ''}`}
              onClick={() => handleFilterClick('article')}
            >
              Articles
            </button>
          </div>
        </div>

        {/* Subcategory/Surah Selection */}
        {selectedCategory === "Quran" ? (
          <div className="quran-layout">
            {/* Surah Sidebar */}
            <aside className="surah-list">
              <h3>Select Surah</h3>
              {surahs.map((surah) => (
                <button
                  key={surah}
                  className={`surah-item ${selectedSurah === surah ? "active" : ""}`}
                  onClick={() => setSelectedSurah(surah)}
                >
                  {surah}
                </button>
              ))}
            </aside>

            {/* Main Content Area */}
            <section className="resource-display">
              {/* Video Grid for Quran - Only shown when Video filter is selected or all resources */}
              {(activeFilter === 'video' || activeFilter === 'all') && currentSurahVideos.length > 0 && (
                <div className="video-grid-section">
                  <h3>Videos for {selectedSurah}</h3>
                  <div className="videos-grid">
                    {currentSurahVideos.map(video => (
                      <div key={video.id} className="video-card">
                        <div className="video-wrapper">
                          <iframe 
                            src={video.src} 
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                          <div className="play-icon">
                            <i className="fas fa-play-circle"></i>
                          </div>
                        </div>
                        <div className="video-content">
                          <h3>{video.title}</h3>
                          <p>{video.description}</p>
                          <div className="video-meta">
                            <span><i className="fas fa-clock"></i> {video.duration}</span>
                            <span><i className="fas fa-eye"></i> {video.views}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Resources for Quran */}
              <div className="resource-grid">
                {filteredResources.map((res) => (
                  <div key={res.id} className="resource-card">
                    <div className={`resource-header ${getResourceTypeClass(res.type)}`}>
                      <div className="resource-icon">
                        <i className={`fas fa-${res.icon}`}></i>
                      </div>
                      <div className="resource-category">
                        {res.type.charAt(0).toUpperCase() + res.type.slice(1)}
                      </div>
                    </div>
                    <div className="resource-body">
                      <h3>{res.title}</h3>
                      <div className="resource-author">
                        <div className="author-avatar">{res.authorInitials}</div>
                        <span>{res.author}</span>
                      </div>
                      <p className="resource-description">{res.description}</p>
                      <div className="resource-meta">
                        {res.type === 'video' || res.type === 'audio' ? (
                          <>
                            <span><i className="fas fa-clock"></i> {res.meta.duration}</span>
                            <span>
                              <i className={res.type === 'video' ? "fas fa-eye" : "fas fa-headphones"}></i> 
                              {res.type === 'video' ? ` ${res.meta.views}` : ` ${res.meta.listens}`}
                            </span>
                          </>
                        ) : (
                          <>
                            <span><i className="fas fa-file"></i> {res.meta.pages}</span>
                            <span><i className="fas fa-download"></i> {res.meta.downloads}</span>
                          </>
                        )}
                      </div>
                      <div className="resource-actions">
                        <a 
                          href={res.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="action-btn"
                        >
                          <i className={
                            res.type === 'video' ? "fas fa-play" : 
                            res.type === 'audio' ? "fas fa-play" : 
                            res.type === 'pdf' ? "fas fa-eye" : 
                            "fas fa-book-open"
                          }></i> 
                          {res.type === 'video' ? 'Watch' : 
                           res.type === 'audio' ? 'Listen' : 
                           res.type === 'pdf' ? 'Preview' : 'Read'}
                        </a>
                        <a 
                          href={res.type === 'pdf' ? res.url : '#'} 
                          download={res.type === 'pdf'} 
                          className="action-btn"
                        >
                          <i className="fas fa-download"></i> Download
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredResources.length === 0 && <p className="no-resources">No resources found.</p>}
              </div>
            </section>
          </div>
        ) : (
          <div>
            {/* Subcategory Tabs for other categories */}
            <div className="subcategory-tabs">
              <h3>Filter by Type</h3>
              {subcategories[selectedCategory]?.map((sub) => (
                <button
                  key={sub}
                  className={`subcategory-tab ${selectedSubcategory === sub ? "active" : ""}`}
                  onClick={() => setSelectedSubcategory(sub)}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* Other Resources */}
            <div className="resource-grid">
              {filteredResources.map((res) => (
                <div key={res.id} className="resource-card">
                  <div className={`resource-header ${getResourceTypeClass(res.type)}`}>
                    <div className="resource-icon">
                      <i className={`fas fa-${res.icon}`}></i>
                    </div>
                    <div className="resource-category">
                      {res.type.charAt(0).toUpperCase() + res.type.slice(1)}
                    </div>
                  </div>
                  <div className="resource-body">
                    <h3>{res.title}</h3>
                    <div className="resource-author">
                      <div className="author-avatar">{res.authorInitials}</div>
                      <span>{res.author}</span>
                    </div>
                    <p className="resource-description">{res.description}</p>
                    <div className="resource-meta">
                      {res.type === 'video' || res.type === 'audio' ? (
                        <>
                          <span><i className="fas fa-clock"></i> {res.meta.duration}</span>
                          <span>
                            <i className={res.type === 'video' ? "fas fa-eye" : "fas fa-headphones"}></i> 
                            {res.type === 'video' ? ` ${res.meta.views}` : ` ${res.meta.listens}`}
                          </span>
                        </>
                      ) : (
                        <>
                          <span><i className="fas fa-file"></i> {res.meta.pages}</span>
                          <span><i className="fas fa-download"></i> {res.meta.downloads}</span>
                        </>
                      )}
                    </div>
                    <div className="resource-actions">
                      <a 
                        href={res.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="action-btn"
                      >
                        <i className={
                          res.type === 'video' ? "fas fa-play" : 
                          res.type === 'audio' ? "fas fa-play" : 
                          res.type === 'pdf' ? "fas fa-eye" : 
                          "fas fa-book-open"
                        }></i> 
                        {res.type === 'video' ? 'Watch' : 
                         res.type === 'audio' ? 'Listen' : 
                         res.type === 'pdf' ? 'Preview' : 'Read'}
                      </a>
                      <a 
                        href={res.type === 'pdf' ? res.url : '#'} 
                        download={res.type === 'pdf'} 
                        className="action-btn"
                      >
                        <i className="fas fa-download"></i> Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              {filteredResources.length === 0 && <p className="no-resources">No resources found.</p>}
            </div>
          </div>
        )}

        {/* Submission Section */}
        <div className="submission-section">
          <div className="section-header">
            <h2>Contribute to Our Library</h2>
            <p>Share your knowledge with the community by submitting resources for review. All submissions will be evaluated by our scholars before being added to the library.</p>
          </div>
          
          <form className="submission-form" onSubmit={handleSubmit}>
            <div className="form-group full-width">
              <h3 className="form-section-title">Resource Information</h3>
            </div>
            
            <div className="form-group">
              <label htmlFor="resourceTitle">Resource Title <span>*</span></label>
              <input 
                type="text" 
                id="resourceTitle" 
                name="resourceTitle"
                className="form-control" 
                placeholder="Enter resource title" 
                value={formData.resourceTitle}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="resourceAuthor">Your Name <span>*</span></label>
              <input 
                type="text" 
                id="resourceAuthor" 
                name="resourceAuthor"
                className="form-control" 
                placeholder="Enter your name" 
                value={formData.resourceAuthor}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="resourceType">Resource Type <span>*</span></label>
              <select 
                id="resourceType" 
                name="resourceType"
                className="form-control" 
                value={formData.resourceType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select resource type...</option>
                <option value="video">Video</option>
                <option value="pdf">PDF Document</option>
                <option value="audio">Audio</option>
                <option value="article">Article</option>
                <option value="book">Book</option>
                <option value="presentation">Presentation</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="resourceCategory">Category <span>*</span></label>
              <select 
                id="resourceCategory" 
                name="resourceCategory"
                className="form-control" 
                value={formData.resourceCategory}
                onChange={handleInputChange}
                required
              >
                <option value="">Select category...</option>
                {categories.map(cat => (
                  <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="resourceDescription">Description <span>*</span></label>
              <textarea 
                id="resourceDescription" 
                name="resourceDescription"
                className="form-control" 
                placeholder="Describe your resource in detail..." 
                value={formData.resourceDescription}
                onChange={handleInputChange}
                required 
              ></textarea>
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="resource-file">Upload Resource <span>*</span></label>
              <div 
                className="file-upload" 
                id="upload-area"
                onClick={handleFileUploadClick}
              >
                {fileUploaded ? (
                  <>
                    <i className="fas fa-check-circle" style={{ color: '#27ae60' }}></i>
                    <h3>{fileName}</h3>
                    <p>Ready for submission</p>
                  </>
                ) : (
                  <>
                    <i className="fas fa-cloud-upload-alt"></i>
                    <h3>Click to upload or drag and drop</h3>
                    <p>Supported formats: PDF, MP4, MP3, DOCX (Max size: 100MB)</p>
                  </>
                )}
                <input 
                  type="file" 
                  id="resource-file" 
                  className="file-input" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="contactEmail">Your Email <span>*</span></label>
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
              <label htmlFor="contactPhone">Phone Number</label>
              <input 
                type="tel" 
                id="contactPhone" 
                name="contactPhone"
                className="form-control" 
                placeholder="Enter your phone number" 
                value={formData.contactPhone}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="additionalNotes">Additional Notes</label>
              <textarea 
                id="additionalNotes" 
                name="additionalNotes"
                className="form-control" 
                placeholder="Any additional information about your submission..." 
                value={formData.additionalNotes}
                onChange={handleInputChange}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <i className="fas fa-paper-plane"></i> Submit for Review
            </button>
          </form>
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
              <li><a href="#"><i className="fas fa-arrow-right"></i> About Us</a></li>
              <li><a href="#"><i className="fas fa-arrow-right"></i> Courses</a></li>
              <li><a href="#"><i className="fas fa-arrow-right"></i> Events</a></li>
              <li><a href="#"><i className="fas fa-arrow-right"></i> Library</a></li>
              <li><a href="#"><i className="fas fa-arrow-right"></i> Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li><a href="#"><i className="fas fa-envelope"></i> library@Hikmah.edu</a></li>
              <li><a href="#"><i className="fas fa-phone"></i> +1 (234) 567-8902</a></li>
              <li><a href="#"><i className="fas fa-map-marker-alt"></i> 123 Knowledge Street, Islamic City</a></li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2023 Hikmah Premier Institute. All rights reserved.</p>
          <p>Designed with <i className="fas fa-heart"></i> for the Ummah</p>
        </div>
      </footer>
    </div>
  );
};

export default LibraryPage;