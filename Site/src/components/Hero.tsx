import {
  Users,
  Calendar,
  Award,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1741529189563-5f3eb1253eb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NzI0NjI3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="ESTU Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            IEEE ESTU
            <span className="block text-3xl md:text-5xl text-[#00629B] mt-2">
              Student Branch
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Eskişehir Teknik Üniversitesi'nde teknoloji ve
            mühendislik alanında öğrencileri bir araya getiren,
            yenilikçi projelere imza atan öğrenci topluluğu.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-[#00629B] rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">200+</p>
                <p className="text-gray-300 text-sm">
                  Aktif Üye
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-[#00629B] rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-gray-300 text-sm">
                  Etkinlik
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-[#00629B] rounded-xl flex items-center justify-center">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">15+</p>
                <p className="text-gray-300 text-sm">Ödül</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}