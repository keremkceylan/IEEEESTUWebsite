import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, Clock, Users, Code } from 'lucide-react';

export function Xtreme() {
  return (
    <section id="xtreme" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            IEEE Xtreme
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            IEEE'nin düzenlediği dünyaca ünlü 24 saatlik programlama yarışması. 
            Bu sayfa yakında güncellenecek ve detaylı bilgiler eklenecek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-shadow duration-300 rounded-2xl border-0 bg-white dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-970">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4">
                <Clock className="h-8 w-8" style={{ color: '#00629B' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">24 Saat</h3>
              <p className="text-muted-foreground">Kesintisiz programlama maratonu</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-shadow duration-300 rounded-2xl border-0 bg-white dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-970">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-8 w-8" style={{ color: '#00629B' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">3 Kişilik</h3>
              <p className="text-muted-foreground">Takım halinde yarışma</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-shadow duration-300 rounded-2xl border-0 bg-white dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-970">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4">
                <Code className="h-8 w-8" style={{ color: '#00629B' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Algoritmik</h3>
              <p className="text-muted-foreground">Zorlayıcı problemler</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg dark:hover:shadow-[#00629B]/20 dark:hover:ring-1 dark:hover:ring-[#00629B]/50 transition-shadow duration-300 rounded-2xl border-0 bg-white dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-970">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8" style={{ color: '#00629B' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Global</h3>
              <p className="text-muted-foreground">Dünya çapında yarışma</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-amber-100 to-orange-200 dark:from-amber-900/40 dark:to-orange-800/40 border-0 rounded-2xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#d97706' }}>
                <Clock className="h-8 w-8 text-white" />
              </div>
              <Badge className="mb-4 text-white px-3 py-1 rounded-full" style={{ backgroundColor: '#d97706' }}>
                Güncelleme Yakında
              </Badge>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Sayfa Güncelleniyor
              </h3>
              <p className="text-muted-foreground">
                IEEE Xtreme sayfası yakında detaylı bilgiler, geçmiş sonuçlar 
                ve hazırlık materyalleriyle güncellenecek.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}