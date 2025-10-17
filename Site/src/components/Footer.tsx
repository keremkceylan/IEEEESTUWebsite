import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Github, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Takımımız', href: '#team' },
    { name: 'Etkinlikler', href: '#events' },
    { name: 'İletişim', href: '#contact' }
  ];

  const resources = [
    { name: 'IEEE Global', href: '#', external: true },
    { name: 'IEEE Türkiye', href: '#', external: true },
    { name: 'ESTU', href: '#', external: true },
    { name: 'Sponsorluk', href: '#sponsors' }
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn', href: '#' },
    { icon: <Twitter className="h-5 w-5" />, name: 'Twitter', href: '#' },
    { icon: <Github className="h-5 w-5" />, name: 'GitHub', href: '#' }
  ];

  return (
    <footer className="bg-black dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-[#030213] text-xl font-bold">I</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">IEEE ESTU Student Branch</h3>
                <p className="text-blue-200 text-sm">Eskişehir Teknik Üniversitesi</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
              Teknoloji ve mühendislik alanında yenilikçi projeler geliştiren, 
              öğrencilerin gelişimine katkı sağlayan ve sektörle güçlü bağlantılar 
              kuran öğrenci topluluğu.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-blue-100">
                <Mail className="h-4 w-4 mr-3 text-blue-300" />
                <span className="text-sm">ieee@estu.edu.tr</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Phone className="h-4 w-4 mr-3 text-blue-300" />
                <span className="text-sm">+90 222 335 05 80</span>
              </div>
              <div className="flex items-start text-blue-100">
                <MapPin className="h-4 w-4 mr-3 text-blue-300 mt-0.5 flex-shrink-0" />
                <span className="text-sm">ESTU Mühendislik Fakültesi<br />26555 Tepebaşı/Eskişehir</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Resources Combined */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col">
            <div className="grid grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Hızlı Erişim</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-blue-100 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block transition-transform"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Kaynaklar</h4>
                <ul className="space-y-3">
                  {resources.map((resource, index) => (
                    <li key={index}>
                      <a
                        href={resource.href}
                        className="text-blue-100 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block transition-transform flex items-center"
                      >
                        {resource.name}
                        {resource.external && <ExternalLink className="h-3 w-3 ml-1" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Media - Centered */}
            <div className="mt-8 flex flex-col items-center w-full">
              <h5 className="font-medium mb-4">Sosyal Medya</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors duration-200 group"
                    title={social.name}
                  >
                    <span className="text-blue-200 group-hover:text-white transition-colors duration-200">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 p-6 bg-white/5 rounded-2xl">
          <div className="max-w-md">
            <h4 className="font-semibold mb-2">Bülten Aboneliği</h4>
            <p className="text-blue-100 text-sm mb-4">
              Etkinliklerimiz ve duyurularımızdan haberdar olun.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 text-sm"
              />
              <Button 
                size="sm"
                className="bg-white text-primary dark:text-slate-900 hover:bg-gray-50 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#00629B]/30 dark:hover:shadow-[#00629B]/50 hover:ring-2 hover:ring-[#00629B]/40 dark:hover:ring-[#00629B]/60 hover:-translate-y-0.5 transition-all duration-300"
              >
                Abone Ol
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-blue-100 text-sm text-center md:text-left">
            <p>
              © {currentYear} IEEE ESTU Student Branch. Tüm hakları saklıdır.
            </p>
            <p className="mt-1">
              Bu site <span className="text-white">❤️</span> ile ESTU'da yapılmıştır.
            </p>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}