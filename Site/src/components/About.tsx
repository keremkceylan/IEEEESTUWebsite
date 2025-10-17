import { Card, CardContent } from "./ui/card";
import { Lightbulb, Users, Target, Rocket } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8" style={{ color: '#00629B' }} />,
      title: "İnovasyon",
      description:
        "Teknolojinin geleceğini şekillendiren yenilikçi projeler geliştiriyoruz.",
    },
    {
      icon: <Users className="h-8 w-8" style={{ color: '#00629B' }} />,
      title: "Topluluk",
      description:
        "Farklı disiplinlerden öğrencileri bir araya getirip güçlü bir network oluşturuyoruz.",
    },
    {
      icon: <Target className="h-8 w-8" style={{ color: '#00629B' }} />,
      title: "Hedef Odaklı",
      description:
        "Her projemizde belirli hedefler koyup başarıya ulaşmak için çalışıyoruz.",
    },
    {
      icon: <Rocket className="h-8 w-8" style={{ color: '#00629B' }} />,
      title: "Gelişim",
      description:
        "Üyelerimizin teknik ve kişisel gelişimini destekleyen fırsatlar sunuyoruz.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Hakkımızda
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eskişehir Teknik Üniversitesi'nin teknoloji
              tutkunlarını buluşturan en prestijli öğrenci
              kulüplerinden biri olan IEEE, mühendislik ve
              teknoloji alanlarında kendini geliştirmek isteyen
              öğrencilere dinamik ve ilham verici bir platform
              sunmaktadır. IEEE, "Institute of Electrical and
              Electronics Engineers" kısaltmasıyla tanınan ve
              teknoloji ve her türlü mühendislik alanında
              ilerlemek isteyen öğrenciler için mükemmel bir
              ortam sağlar.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              IEEE Eskişehir Teknik Üniversitesi Öğrenci Kolu
              olarak amacımız, üyelerimize teknik bilgi ve
              pratik deneyim kazandırmak, etkileyici projeler
              geliştirmelerine olanak tanımak ve sektördeki
              profesyonellerle güçlü bağlantılar kurmalarına
              yardımcı olmaktır. Kulüp faaliyetlerimiz arasında
              seminerler, atölye çalışmaları, konferanslar ve
              yarışmalar yer almakta; bu etkinlikler,
              üyelerimize hem öğrenme hem de uygulama fırsatları
              sunmaktadır.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              IEEE kulübümüz sadece mühendislik öğrencilerine
              değil, teknolojiye ilgi duyan tüm öğrencilere
              açıktır. Etkinliklerimiz, katılımcıların kişisel
              ve mesleki gelişimlerine katkıda bulunurken,
              sosyal etkinlikler ve sektörel bağlantılar ile
              güçlü bir ağ kurmalarına yardımcı olur.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eğer siz de teknolojiye tutkuluysanız, kendinizi
              geliştirmek ve yeni insanlarla tanışmak
              istiyorsanız, IEEE Eskişehir Teknik Üniversitesi
              Öğrenci Kulübü tam size göre! Kulübümüze katılarak
              bu heyecan verici yolculuğa adım atabilirsiniz.
            </p>
            <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl p-6 mt-8">
              <p className="text-primary font-medium mb-2">
                Geleceği şekillendiren teknolojinin kalbinde yer
                almak için IEEE çatısı altında buluşalım!
              </p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  <span className="font-medium">
                    Kulüp Başkanı:
                  </span>{" "}
                  Gizem TUĞUZ
                </p>
                <p>
                  <span className="font-medium">
                    Kulüp Danışmanı:
                  </span>{" "}
                  Dr. Öğr. Üyesi Sıtkı GÜNER
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-shadow duration-300 rounded-2xl border-0 bg-white dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-970"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Misyonumuz
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              IEEE'nin global vizyon ve değerleriyle uyum
              içinde, Eskişehir Teknik Üniversitesi bünyesinde
              teknoloji ve mühendislik alanında öğrencilerin
              akademik ve profesyonel gelişimlerini desteklemek,
              yenilikçi projeler geliştirmek ve sektör ile
              academia arasında köprü kurmaktır.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#00629B' }} />
                <p className="text-muted-foreground">
                  Teknik workshop ve seminerler düzenleme
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#00629B' }} />
                <p className="text-muted-foreground">
                  Uluslararası yarışmalara katılım
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#00629B' }} />
                <p className="text-muted-foreground">
                  Sektör profesyonelleriyle networking
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#00629B' }} />
                <p className="text-muted-foreground">
                  Açık kaynak projelere katkı
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1672917187338-7f81ecac3d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzU3MjQ2MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="IEEE ESTU Team"
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}