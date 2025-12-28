import { useState, useEffect } from 'react';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('Tümü');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projectsCount, setProjectsCount] = useState(0);
  const [internshipsCount, setInternshipsCount] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Welcome badge animasyonu
    setTimeout(() => {
      setShowWelcome(true);
    }, 300);
  }, []);

  useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset counts
            setProjectsCount(0);
            setInternshipsCount(0);

            // Animate projects count - daha yavaş animasyon
            let currentProjects = 0;
            const projectsInterval = setInterval(() => {
              currentProjects += 1;
              setProjectsCount(currentProjects);
              if (currentProjects >= 20) {
                clearInterval(projectsInterval);
              }
            }, 60); // 100ms'den 60ms'ye düşürüldü - daha yavaş

            // Animate internships count - daha yavaş animasyon
            let currentInternships = 0;
            const internshipsInterval = setInterval(() => {
              currentInternships += 1;
              setInternshipsCount(currentInternships);
              if (currentInternships >= 2) {
                clearInterval(internshipsInterval);
              }
            }, 600); // 1000ms'den 600ms'ye düşürüldü - daha yavaş
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Portfolyo',
      category: 'Profesyonel',
      description: 'Endüstriyel tasarım projelerimi, ürün tasarımlarımı ve çalışmalarımı sergileyen kapsamlı bir dijital portfolyo. Detaylı proje çalışmaları ve tasarım süreci dokümantasyonu içerir.',
      image: 'https://readdy.ai/api/search-image?query=elegant%20professional%20portfolio%20presentation%20with%20multiple%20design%20project%20showcases%20displayed%20on%20modern%20tablet%20and%20laptop%20screens%20showing%20industrial%20product%20designs%20creative%20layouts%20organized%20grid%20of%20work%20samples%20clean%20minimalist%20workspace%20with%20design%20sketches%20and%20prototypes%20contemporary%20portfolio%20book%20open%20on%20designer%20desk&width=800&height=600&seq=portfolio2024new&orientation=landscape',
      tags: ['Portfolyo Tasarımı', 'UI/UX', 'Dijital Sunum'],
      pdfUrl: 'https://drive.google.com/file/d/1OCnGFuY_3fB5iDkqZvLrrR9i1QtjukEP/view?usp=sharing'
    },
    {
      id: 2,
      title: 'Mobil Uygulama Tasarımı',
      category: 'İş',
      description: 'Sezgisel kullanıcı deneyimi, modern görsel tasarım ilkeleri ve mobil platformlar için kusursuz etkileşim kalıplarına odaklanan kullanıcı merkezli mobil uygulama arayüz tasarımı projesi.',
      image: 'https://readdy.ai/api/search-image?query=modern%20mobile%20application%20interface%20design%20sleek%20smartphone%20screen%20showing%20elegant%20app%20interface%20with%20clean%20user%20experience%20contemporary%20mobile%20UI%20design%20professional%20presentation&width=800&height=600&seq=mobileapp001&orientation=landscape',
      tags: ['Mobil UI/UX', 'Etkileşim Tasarımı', 'Kullanıcı Ara Yüzü'],
      pdfUrl: 'https://drive.google.com/file/d/1OuTz3Dja0FAgENCo9KsBnofsoTOoHRHv/view?usp=sharing'
    },
    {
      id: 3,
      title: 'Üretim Stajı',
      category: 'Akademik',
      description: 'Üretim ortamında uygulamalı endüstriyel tasarım stajı deneyimi, gerçek ürün geliştirme, üretim süreçleri ve üretime yönelik tasarım projeleri üzerinde mühendislik ekipleriyle işbirliği.',
      image: 'https://readdy.ai/api/search-image?query=bright%20modern%20industrial%20manufacturing%20facility%20with%20engineers%20and%20designers%20collaborating%20on%20product%20development%20assembly%20line%20with%20precision%20machinery%20workers%20in%20safety%20gear%20examining%20quality%20control%20of%20manufactured%20products%20clean%20organized%20factory%20floor%20with%20advanced%20production%20equipment%20industrial%20design%20prototypes%20being%20tested%20and%20refined%20professional%20manufacturing%20environment%20with%20CAD%20workstations%20and%20physical%20product%20samples&width=800&height=600&seq=productiondesignfactory2024&orientation=landscape',
      tags: ['Ürün Geliştirme', 'Üretim', 'Tasarım'],
      pdfUrl: 'https://drive.google.com/file/d/1fv1NgeL4vpG12jDohlSbHakKfFiVqTsu/view?usp=sharing'
    },
    {
      id: 4,
      title: 'Ar-Ge Stajı',
      category: 'Akademik',
      description: 'Yenilikçi ürün tasarımı, malzeme keşfi, yeni konseptlerin prototiplenmesi ve gelişmekte olan tasarım teknolojileri ve metodolojilerinin araştırılmasına odaklanan araştırma ve geliştirme stajı.',
      image: 'https://readdy.ai/api/search-image?query=advanced%20three%20dimensional%20printer%20creating%20prototype%20object%20layer%20by%20layer%20modern%20additive%20manufacturing%20technology%203D%20printing%20machine%20in%20action%20with%20detailed%20printed%20parts%20clean%20professional%20laboratory%20setting%20with%20innovative%20rapid%20prototyping%20equipment&width=800&height=600&seq=3dprinting002&orientation=landscape',
      tags: ['Tasarım Araştırması', 'İnovasyon', 'Prototipleme'],
      pdfUrl: 'https://drive.google.com/file/d/1ztMop0u58nsgbgdAMENEHIGRLi9oKS8M/view?usp=sharing'
    },
    {
      id: 5,
      title: 'Bitirme Tezi',
      category: 'Araştırma',
      description: 'Endüstriyel tasarımda ileri konuları araştıran, tasarım metodolojisi, kullanıcı merkezli tasarım ilkeleri ve yenilikçi ürün geliştirme yaklaşımları üzerine özgün araştırma sunan kapsamlı bitirme tezi.',
      image: 'https://readdy.ai/api/search-image?query=graduation%20thesis%20presentation%20scene%20with%20bound%20academic%20document%20open%20on%20wooden%20desk%20showing%20detailed%20research%20pages%20with%20diagrams%20and%20text%20university%20library%20setting%20with%20books%20and%20laptop%20displaying%20thesis%20chapters%20professional%20academic%20research%20documentation%20scholarly%20work%20with%20charts%20and%20analysis&width=800&height=600&seq=thesisdocument2024&orientation=landscape',
      tags: ['Tasarım Araştırması', 'Akademik Çalışma', 'Tez Projesi'],
      pdfUrl: 'https://drive.google.com/file/d/1o1Wm0dfATzl3jMXx7ihnGBs7JfMF1-1k/view?usp=sharing'
    }
  ];

  const filters = ['Tümü', 'İş', 'Profesyonel', 'Akademik', 'Araştırma'];

  const filteredProjects = activeFilter === 'Tümü' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPDF = (url: string) => {
    window.open(url, '_blank');
  };

  // PDF URL'ini embed formatına çevir
  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      const fileId = url.match(/\/d\/([^/]+)/)?.[1];
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return url;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
      {/* Çok Minimal Arka Plan Animasyonları */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#f97316] rounded-full filter blur-[100px] opacity-[0.02] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#ea580c] rounded-full filter blur-[120px] opacity-[0.015] animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <img src="https://static.readdy.ai/image/4c02c0d9d10919294d753188e68165b5/e6d539770bdc0e7925f4af7271d500db.jpeg" alt="Alper" className="w-full h-full object-cover" />
            </div>
            <span className="text-base sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Alper</span>
          </div>
          <div className="flex gap-3 sm:gap-8">
            <button onClick={() => scrollToSection('projects')} className="text-xs sm:text-base text-gray-300 hover:text-[#f97316] transition-all duration-300 font-medium whitespace-nowrap cursor-pointer">Projeler</button>
            <button onClick={() => scrollToSection('about')} className="text-xs sm:text-base text-gray-300 hover:text-[#f97316] transition-all duration-300 font-medium whitespace-nowrap cursor-pointer">Hakkımda</button>
            <button onClick={() => scrollToSection('contact')} className="text-xs sm:text-base text-gray-300 hover:text-[#f97316] transition-all duration-300 font-medium whitespace-nowrap cursor-pointer">İletişim</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-10 w-56 h-56 bg-[#f97316] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#ea580c] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="text-center z-10 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="mb-4 sm:mb-6 inline-block">
            <span className={`px-4 sm:px-6 py-1.5 sm:py-2 bg-[#f97316]/20 text-[#f97316] rounded-full text-xs sm:text-sm font-semibold border border-[#f97316]/30 whitespace-nowrap transition-all duration-700 ${
              showWelcome ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4'
            }`}>
              Web siteme hoş geldiniz
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-4 sm:mb-6 leading-tight">
            Merhaba, Ben <span className="bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent">Alper</span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-300 font-light mb-4 sm:mb-6">Endüstriyel Tasarımcı & Ürün Geliştirici</p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Form ve işlevi birleştiren yenilikçi ürünler oluşturma konusunda tutkuluyum. Tasarım projelerimi, araştırma çalışmalarımı ve endüstriyel tasarımdaki  yolculuğumu keşfedin.
          </p>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#f97316]/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer text-sm sm:text-base"
          >
            Çalışmalarımı Görüntüle
          </button>
          <div className="mt-12 sm:mt-16 animate-bounce cursor-pointer" onClick={() => scrollToSection('projects')}>
            <i className="ri-arrow-down-line text-4xl sm:text-5xl text-[#f97316]"></i>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.015]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#f97316] rounded-full filter blur-[120px] animate-pulse" style={{ animationDuration: '5s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Öne Çıkan <span className="bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent">Projeler</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Becerilerimi ve vizyonumu sergileyen tasarım araştırmalarım, profesyonel çalışmalarım ve yenilikçi projelerimden oluşan bir koleksiyon
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-2 sm:px-4 overflow-x-auto">
            {filters.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-2 sm:px-8 py-1.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 font-medium whitespace-nowrap cursor-pointer text-[10px] sm:text-base flex-shrink-0 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white shadow-lg shadow-[#f97316]/30'
                    : 'bg-[#1e293b] text-gray-300 hover:bg-[#334155] border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-[#1e293b] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-700 hover:border-[#f97316] hover:shadow-2xl hover:shadow-[#f97316]/20 relative"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/90 backdrop-blur-sm text-white rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  {/* Tıklama İpucu - Hover'da Görünür */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center shadow-lg shadow-[#f97316]/50 animate-pulse">
                        <i className="ri-eye-line text-3xl text-white"></i>
                      </div>
                      <p className="text-white font-semibold text-lg">Detayları Gör</p>
                      <p className="text-gray-300 text-sm mt-1">Tıklayın</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-[#f97316] transition-colors break-words">{project.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed break-words">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 sm:px-3 py-1 bg-[#0f172a] text-[#f97316] rounded-lg text-xs font-medium whitespace-nowrap border border-[#f97316]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Köşe İkonu - Sürekli Görünür */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <i className="ri-arrow-right-up-line text-xl text-white"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#1e293b]/30 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.015]">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ea580c] rounded-full filter blur-[130px] animate-pulse" style={{ animationDuration: '5.5s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent">Hakkımda</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Merhaba, Ben Alper</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
                Ürün geliştirme ve tasarım araştırması konusunda güçlü bir geçmişe sahip tutkulu bir endüstriyel tasarımcıyım. 
                Yolculuğum akademik mükemmelliği, üretim ve Ar-Ge'deki profesyonel stajları ve yenilikçi tasarım projelerini içeriyor.
              </p>
              <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
                Kullanıcı merkezli tasarım, ürün geliştirme ve tasarım araştırması konularında uzmanım. Kariyerim boyunca, 
                dijital arayüzlerden fiziksel ürünlere kadar çeşitli projelerde çalıştım. Düşünceli problem çözme ve 
                yenilikçi düşünme yoluyla insanların hayatlarını iyileştiren ve kolaylık sağlayan anlamlı tasarımlar oluşturmaya kendimi adadım.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-[#f97316]/10 to-[#ea580c]/10 p-4 sm:p-6 rounded-2xl border border-[#f97316]/20">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent mb-1 sm:mb-2">{projectsCount}+</div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">Tasarım Projesi</div>
                </div>
                <div className="bg-gradient-to-br from-[#f97316]/10 to-[#ea580c]/10 p-4 sm:p-6 rounded-2xl border border-[#f97316]/20">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent mb-1 sm:mb-2">{internshipsCount}</div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">Staj</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden border-4 border-[#f97316]/30">
                  <img
                    src="https://static.readdy.ai/image/4c02c0d9d10919294d753188e68165b5/e6d539770bdc0e7925f4af7271d500db.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.015]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#f97316] rounded-full filter blur-[140px] animate-pulse" style={{ animationDuration: '6s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Hadi <span className="bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent">Bağlanalım</span>
          </h2>
          <p className="text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Yeni tasarım projeleri, fırsatlar veya işbirlikleri hakkında konuşmaya her zaman açığım. Benimle iletişime geçin ve birlikte harika bir şeyler oluşturalım!
          </p>
          <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <a href="mailto:alperkose34@gmail.com" className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1e293b] rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-[#f97316] hover:to-[#ea580c] transition-all duration-300 border border-gray-700 hover:border-transparent hover:shadow-lg hover:shadow-[#f97316]/30 cursor-pointer group">
              <i className="ri-mail-line text-2xl sm:text-3xl text-gray-300 group-hover:text-white transition-colors"></i>
            </a>
            <a href="tel:05071714038" className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1e293b] rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-[#f97316] hover:to-[#ea580c] transition-all duration-300 border border-gray-700 hover:border-transparent hover:shadow-lg hover:shadow-[#f97316]/30 cursor-pointer group">
              <i className="ri-phone-line text-2xl sm:text-3xl text-gray-300 group-hover:text-white transition-colors"></i>
            </a>
            <a href="https://www.instagram.com/alperrrkose?igsh=MWtteXNoMjVpcXFjcA==" target="_blank" rel="noopener noreferrer" className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1e293b] rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-[#f97316] hover:to-[#ea580c] transition-all duration-300 border border-gray-700 hover:border-transparent hover:shadow-lg hover:shadow-[#f97316]/30 cursor-pointer group">
              <i className="ri-instagram-line text-2xl sm:text-3xl text-gray-300 group-hover:text-white transition-colors"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-gray-800 bg-[#0f172a] relative">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-base sm:text-lg">2025</p>
          <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base">
            <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="hover:text-[#f97316] transition-colors cursor-pointer font-medium">
              Alper Köse
            </a>
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6 animate-fadeIn" onClick={() => setSelectedProject(null)}>
          <div className="bg-[#1e293b] rounded-2xl sm:rounded-3xl max-w-6xl w-full max-h-[90vh] border border-gray-700 shadow-2xl flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Üst Kısım - Başlık ve Kapatma */}
            <div className="flex-shrink-0 p-3 sm:p-5 border-b border-gray-700/50">
              <div className="flex items-start justify-between gap-2 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white rounded-lg font-semibold whitespace-nowrap shadow-lg text-[10px] sm:text-xs">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-sm sm:text-xl font-bold truncate">{selectedProject.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#0f172a]/90 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-[#f97316] transition-all duration-300 cursor-pointer border border-gray-700"
                >
                  <i className="ri-close-line text-lg sm:text-xl"></i>
                </button>
              </div>
            </div>

            {/* İçerik Alanı - Mobilde Tek Kolon, Masaüstünde Grid */}
            <div className="flex-1 flex flex-col lg:grid lg:grid-cols-2 gap-3 sm:gap-5 p-3 sm:p-5 min-h-0 overflow-hidden">
              {/* Sol Taraf - Açıklama ve Butonlar */}
              <div className="flex flex-col gap-2 sm:gap-4 lg:overflow-y-auto lg:pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#f97316 #1e293b' }}>
                {/* Açıklama */}
                <div className="bg-[#0f172a]/50 p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-700/50">
                  <h3 className="text-[10px] sm:text-base font-bold mb-1 sm:mb-2 text-[#f97316]">Proje Hakkında</h3>
                  <p className="text-gray-300 text-[9px] sm:text-xs leading-relaxed sm:line-clamp-none">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Etiketler */}
                <div className="bg-[#0f172a]/50 p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-700/50">
                  <h3 className="text-[10px] sm:text-base font-bold mb-1 sm:mb-2 text-[#f97316]">Teknolojiler</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-[#f97316]/20 to-[#ea580c]/20 text-[#f97316] rounded-md sm:rounded-lg text-[9px] sm:text-xs font-medium whitespace-nowrap border border-[#f97316]/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Butonlar */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <button 
                    onClick={() => openPDF(selectedProject.pdfUrl)}
                    className="w-full px-3 py-2 sm:py-3 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white rounded-lg sm:rounded-xl hover:shadow-xl hover:shadow-[#f97316]/50 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer font-bold text-[10px] sm:text-sm transform hover:scale-105"
                  >
                    <i className="ri-external-link-line text-xs sm:text-lg"></i>
                    <span>PDF'i Görüntüle</span>
                  </button>
                </div>

                {/* Bilgi Kutusu - Sadece Masaüstünde */}
                <div className="hidden lg:block bg-gradient-to-r from-[#f97316]/10 to-[#ea580c]/10 p-3 rounded-xl border border-[#f97316]/30">
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center">
                      <i className="ri-information-line text-white text-xs"></i>
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      PDF'i tam ekranda açarak daha iyi görüntüleyebilir ve indirebilirsiniz.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sağ Taraf - PDF Önizleme */}
              <div className="flex flex-col gap-1.5 sm:gap-2 min-h-0">
                <div className="flex-1 relative group rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-[#f97316]/40 bg-gray-900 shadow-2xl shadow-[#f97316]/20 min-h-0 h-[400px] sm:h-auto">
                  <iframe
                    src={getEmbedUrl(selectedProject.pdfUrl)}
                    className="w-full h-full"
                    title="PDF Preview"
                  />
                  {/* Hover Overlay - Sadece Masaüstünde */}
                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none lg:flex items-center justify-center">
                    <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-xl shadow-2xl shadow-[#f97316]/50 animate-pulse mb-2">
                        <i className="ri-external-link-line text-xl text-white"></i>
                        <span className="text-white font-bold text-sm">Tam Ekranda Aç</span>
                      </div>
                      <p className="text-white text-xs font-semibold bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                        Daha iyi görüntülemek için tıklayın
                      </p>
                    </div>
                  </div>
                  {/* Köşe İkonu */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-10 sm:h-10 bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center shadow-2xl shadow-[#f97316]/50 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none animate-pulse">
                    <i className="ri-file-pdf-line text-sm sm:text-xl text-white"></i>
                  </div>
                  {/* Tıklama Alanı */}
                  <div 
                    className="absolute inset-0 cursor-pointer z-10"
                    onClick={() => openPDF(selectedProject.pdfUrl)}
                  ></div>
                </div>
                <p className="text-center text-gray-400 text-[9px] sm:text-xs">
                  <i className="ri-eye-line mr-1"></i>
                  PDF Önizlemesi
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
