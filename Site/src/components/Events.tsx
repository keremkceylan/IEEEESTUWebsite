import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

export function Events() {
  const upcomingEvents = [
    {
      title: "Yapay Zeka ve Machine Learning Workshop'u",
      date: "2025-09-15",
      time: "14:00 - 17:00",
      location: "ESTU Teknoloji Merkezi",
      category: "Workshop",
      description: "Python ile machine learning algoritmalarına giriş. Hands-on projelerle öğrenme deneyimi.",
      image: "https://images.unsplash.com/photo-1596496356933-9b6e0b186b88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3Nob3AlMjBzdHVkZW50c3xlbnwxfHx8fDE3NTcyNDYzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      participants: "45 kişi",
      status: "Kayıt Açık"
    },
    {
      title: "IEEE Xtreme 18.0 Programlama Yarışması",
      date: "2025-10-26",
      time: "00:01 - 23:59",
      location: "ESTU Bilgisayar Laboratuvarları",
      category: "Yarışma",
      description: "24 saatlik küresel programlama yarışması. Takım halinde algoritmik problemler çözme.",
      image: "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBjb21wZXRpdGlvbiUyMGhhY2thdGhvbnxlbnwxfHx8fDE3NTcxODg4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      participants: "120 kişi",
      status: "Yakında"
    }
  ];

  const pastEvents = [
    {
      title: "Blockchain ve Kripto Para Semineri",
      date: "2025-08-20",
      time: "19:00 - 21:00",
      location: "ESTU Konferans Salonu",
      category: "Seminer",
      description: "Blockchain teknolojisinin temelleri ve gelecek projeksiyonları üzerine uzman konuşmacı sunumu.",
      image: "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGNvbmZlcmVuY2UlMjBzZW1pbmFyfGVufDF8fHx8MTc1NzI0NjM5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      participants: "80 kişi",
      status: "Tamamlandı"
    },
    {
      title: "Robotik ve Otomasyon Proje Günü",
      date: "2025-07-10",
      time: "10:00 - 16:00",
      location: "ESTU Mühendislik Fakültesi",
      category: "Proje Günü",
      description: "Öğrenci projelerinin sergilendiği ve teknik sunumların yapıldığı özel etkinlik.",
      image: "https://images.unsplash.com/photo-1562758778-e5638b5b6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9uJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU3MjQ2MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      participants: "65 kişi",
      status: "Tamamlandı"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Workshop": return "bg-slate-200 dark:bg-slate-700 text-gray-800 dark:text-gray-100";
      case "Yarışma": return "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200";
      case "Seminer": return "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200";
      case "Proje Günü": return "bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200";
      default: return "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Kayıt Açık": return "bg-green-600 dark:bg-green-700 text-white";
      case "Yakında": return "text-white";
      case "Tamamlandı": return "bg-gray-600 dark:bg-gray-700 text-white";
      default: return "bg-gray-600 dark:bg-gray-700 text-white";
    }
  };

  const getStatusCustomStyle = (status: string) => {
    if (status === "Yakında") return { backgroundColor: '#00629B' };
    return {};
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const EventCard = ({ event, isUpcoming = true }: { event: any, isUpcoming?: boolean }) => (
    <Card className="group hover:shadow-xl dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-all duration-300 rounded-2xl border-0 bg-white dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-970 overflow-hidden hover:-translate-y-1 h-full flex flex-col">
      <div className="relative">
        {/* Responsive Image Container */}
        <div className="aspect-[16/10] w-full overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-4 right-4">
          <Badge 
            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}
            style={getStatusCustomStyle(event.status)}
          >
            {event.status}
          </Badge>
        </div>
        <div className="absolute top-4 left-4">
          <Badge className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
            {event.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
          {event.title}
        </h3>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="h-4 w-4 mr-2" style={{ color: '#00629B' }} />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <Clock className="h-4 w-4 mr-2" style={{ color: '#00629B' }} />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 mr-2" style={{ color: '#00629B' }} />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <Users className="h-4 w-4 mr-2" style={{ color: '#00629B' }} />
            <span>{event.participants}</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
            {event.description}
          </p>

          {isUpcoming && (
            <Button 
              className="w-full text-white rounded-xl mt-auto"
              style={{ backgroundColor: '#00629B' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#004f7c'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00629B'}
              size="sm"
            >
              Detaylar
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="events" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Etkinliklerimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            IEEE ESTU Student Branch olarak düzenlediğimiz workshop'lar, seminerler, 
            yarışmalar ve sosyal etkinliklerle üyelerimizin gelişimine katkı sağlıyoruz.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Yaklaşan Etkinlikler
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={`upcoming-${index}`} event={event} isUpcoming={true} />
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Geçmiş Etkinlikler
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={`past-${index}`} event={event} isUpcoming={false} />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="border-0 rounded-2xl text-white" style={{ background: `linear-gradient(to right, #00629B, #004f7c)` }}>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Etkinliklerden Haberdar Olun
              </h3>
              <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
                Yeni etkinliklerimiz, workshop'lar ve seminerlerimiz hakkında 
                güncel bilgileri e-posta ile alın.
              </p>
              <Button 
                size="lg"
                className="bg-white hover:bg-gray-50 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#00629B]/30 dark:hover:shadow-[#00629B]/50 hover:ring-2 hover:ring-[#00629B]/40 dark:hover:ring-[#00629B]/60 hover:-translate-y-0.5 transition-all duration-300"
                style={{ color: '#00629B' }}
              >
                E-posta Listesine Katılın
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}