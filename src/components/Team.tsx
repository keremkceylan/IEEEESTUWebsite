import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Linkedin, Mail, Github } from 'lucide-react';

export function Team() {
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      position: "Başkan",
      department: "Bilgisayar Mühendisliği",
      image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0JTIwc3R1ZGVudHxlbnwxfHx8fDE3NTcyNDYzMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "IEEE ESTU'da 3 yıldır aktif olarak görev alıyor. Yapay zeka ve makine öğrenmesi konularında uzmanlaşıyor."
    },
    {
      name: "Zeynep Kaya",
      position: "Başkan Yardımcısı",
      department: "Elektrik-Elektronik Mühendisliği",
      image: "https://images.unsplash.com/photo-1659080907111-7c726e435a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NzI0NjM0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Gömülü sistemler ve IoT projelerinde deneyimli. IEEE Xtreme yarışmalarında ödüller kazandı."
    },
    {
      name: "Mehmet Demir",
      position: "Teknik Koordinatör",
      department: "Yazılım Mühendisliği", 
      image: "https://images.unsplash.com/photo-1614492898637-435e0f87cef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTcyNDYzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Full-stack geliştirici olarak topluluk projelerinin teknik liderliğini yapıyor. Açık kaynak projelere aktif katkıda bulunuyor."
    },
    {
      name: "Ayşe Özkan",
      position: "Etkinlik Koordinatörü",
      department: "Endüstri Mühendisliği",
      image: "https://images.unsplash.com/photo-1602566356438-dd36d35e989c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3R1ZGVudCUyMHByb2Zlc3Npb25hbCUyMHBob3RvfGVufDF8fHx8MTc1NzI0NjM0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Workshop ve seminerlerin organizasyonunda uzman. Proje yönetimi ve liderlik konularında deneyimli."
    },
    {
      name: "Can Arslan",
      position: "Sosyal Medya Sorumlusu",
      department: "Bilgisayar Mühendisliği",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzIzODg2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Dijital pazarlama ve içerik üretimi konularında çalışıyor. Topluluk etkinliklerinin tanıtımından sorumlu."
    },
    {
      name: "Elif Şahin",
      position: "Mali İşler Sorumlusu",
      department: "Elektrik-Elektronik Mühendisliği",
      image: "https://images.unsplash.com/photo-1681070909604-f555aa006564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3MjQ2MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Finans ve muhasebe konularında deneyimli. Topluluk bütçesi ve sponsorluk süreçlerini yönetiyor."
    }
  ];

  const positions = ["Başkan", "Başkan Yardımcısı", "Koordinatör", "Sorumlu"];

  const getPositionColor = (position: string) => {
    if (position.includes("Başkan")) return "text-white";
    if (position.includes("Koordinatör")) return "bg-green-600 dark:bg-green-700 text-white";
    return "bg-gray-600 dark:bg-gray-700 text-white";
  };

  const getPositionStyle = (position: string) => {
    if (position.includes("Başkan")) return { backgroundColor: '#00629B' };
    return {};
  };

  return (
    <section id="team" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Takımımız
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            IEEE ESTU Student Branch olarak farklı disiplinlerden gelen, 
            deneyimli ve tutkulu öğrencilerden oluşan güçlü bir takımız var.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-all duration-300 rounded-2xl border-0 bg-white dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-970 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                {/* Profile Image with Professional Frame */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#00629B' }}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {member.name}
                  </h3>
                  
                  <Badge 
                    className={`mb-3 px-3 py-1 rounded-full text-xs font-medium ${getPositionColor(member.position)}`}
                    style={getPositionStyle(member.position)}
                  >
                    {member.position}
                  </Badge>

                  <p className="text-sm font-medium mb-3" style={{ color: '#00629B' }}>
                    {member.department}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <button className="w-8 h-8 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-[#00629B] hover:text-white dark:hover:bg-[#00629B] dark:hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-[#00629B] hover:text-white dark:hover:bg-[#00629B] dark:hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-[#00629B] hover:text-white dark:hover:bg-[#00629B] dark:hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Üye Olmak İster Misin?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              IEEE ESTU Student Branch'te yer alarak teknik becerilerini geliştirebilir, 
              yeni projeler üretebilir ve güçlü bir network oluşturabilirsin.
            </p>
            <button
              className="bg-[#00629B] hover:bg-[#004f7c] text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg dark:shadow-[#00629B]/30 dark:hover:shadow-[#00629B]/50 dark:hover:ring-2 dark:hover:ring-[#00629B]/50"
            >
              Kayıt Formu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}