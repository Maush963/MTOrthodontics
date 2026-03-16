import Image from "next/image";
import {
  Star,
  CheckCircle2,
  Shield,
  Info,
  Maximize,
  ClipboardList,
  Eye,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100 bg-white">
        <div className="font-serif text-2xl font-bold text-mt-dark tracking-tight">
          M&T Orthodontics
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <a href="#servicios" className="hover:text-mt-blue transition-colors">
            Servicios
          </a>
          <a href="#proceso" className="hover:text-mt-blue transition-colors">
            Proceso
          </a>
          <a
            href="#testimonios"
            className="hover:text-mt-blue transition-colors"
          >
            Testimonios
          </a>
          <a href="#nosotros" className="hover:text-mt-blue transition-colors">
            Nosotros
          </a>
        </div>
        <div>
          <button className="bg-mt-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-500 transition-colors shadow-sm">
            Agendar cita
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-8 py-16 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-mt-dark leading-[1.1]">
            Obtén la confianza <br />
            de sonreír con <br />
            especialistas <br />
            certificados AMO
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Con el escáner iTero diseñamos una simulación 3D de tu sonrisa desde
            tu primera visita — para que veas exactamente a dónde vamos antes de
            empezar.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <button className="bg-mt-blue text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-200">
              Ver mi futura sonrisa
            </button>
            <div className="bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 flex items-center space-x-3">
              <span className="font-bold text-gray-800 flex items-center gap-1">
                <span className="text-red-500 font-serif mr-1">G</span> 5.0
              </span>
              <div className="flex text-yellow-400">
                <Star size={16} fill="currentColor" strokeWidth={0} />
                <Star size={16} fill="currentColor" strokeWidth={0} />
                <Star size={16} fill="currentColor" strokeWidth={0} />
                <Star size={16} fill="currentColor" strokeWidth={0} />
                <Star size={16} fill="currentColor" strokeWidth={0} />
              </div>
              <span className="text-sm text-gray-500 ml-2">
                Reseñas de Google
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 relative flex justify-end">
          <div className="absolute inset-0 bg-blue-50/50 rounded-[40px] transform rotate-3 scale-105 -z-10" />
          <div className="w-full h-[500px] bg-mt-dark rounded-[32px] overflow-hidden relative shadow-2xl">
            {/* Placeholder for the smiling woman image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-mt-dark to-mt-blue/20"></div>
            <div className="absolute bottom-10 right-10 text-white opacity-20">
              [Imagen: Sonrisa Perfecta]
            </div>
          </div>
        </div>
      </section>

      {/* Intro/Trust Section */}
      <section className="py-20 px-8 text-center max-w-4xl mx-auto">
        <div className="w-24 h-0.5 bg-mt-gold mx-auto mb-10"></div>
        <p className="font-serif text-xl md:text-2xl italic text-gray-800 mb-16 leading-relaxed">
          Sabemos que buscar al ortodoncista correcto no es fácil, no siempre es
          claro saber en quién confiar. Por eso en M&T:
        </p>

        <div className="space-y-8 text-left max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 bg-mt-blue mt-2 shrink-0"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">
                Somos especialistas certificados AMO
              </span>{" "}
              — tres años adicionales de formación dedicados exclusivamente a la
              ortodoncia. En Querétaro, somos de los pocos que pueden decirlo.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 bg-mt-blue mt-2 shrink-0"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">
                Y clínica certificada Invisalign
              </span>{" "}
              — con acceso a los protocolos más avanzados para que tu
              tratamiento sea predecible, preciso y diseñado para durar.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-24 px-8 bg-mt-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-serif text-2xl md:text-3xl text-gray-800 mb-16 max-w-3xl mx-auto leading-relaxed">
            Cada caso es diferente. Por eso antes de cualquier tratamiento,
            empezamos por entender el tuyo a fondo:
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {/* Step 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="w-14 h-14 border-2 border-mt-blue rounded-full flex items-center justify-center text-mt-blue text-xl font-bold mx-auto mb-6">
                1
              </div>
              <div className="text-mt-blue mb-6 flex justify-center">
                <Maximize strokeWidth={1.5} size={32} />
              </div>
              <h3 className="text-xl font-bold text-mt-dark mb-4">
                Diagnóstico 3D
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Escaneamos tu boca con el iTero para obtener un mapa digital
                completo. Sin moldes, sin incomodidad.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="w-14 h-14 border-2 border-mt-blue rounded-full flex items-center justify-center text-mt-blue text-xl font-bold mx-auto mb-6">
                2
              </div>
              <div className="text-mt-blue mb-6 flex justify-center">
                <ClipboardList strokeWidth={1.5} size={32} />
              </div>
              <h3 className="text-xl font-bold text-mt-dark mb-4">
                Plan a tu medida
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Diseñamos el tratamiento específico para ti — los tiempos, las
                etapas y el resultado esperado.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="w-14 h-14 border-2 border-mt-blue rounded-full flex items-center justify-center text-mt-blue text-xl font-bold mx-auto mb-6">
                3
              </div>
              <div className="text-mt-blue mb-6 flex justify-center">
                <Eye strokeWidth={1.5} size={32} />
              </div>
              <h3 className="text-xl font-bold text-mt-dark mb-4">
                Ves a dónde vamos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Antes de empezar, te mostramos la simulación de tu sonrisa
                final. Tú decides con los ojos abiertos.
              </p>
            </div>
          </div>

          <h2 className="text-center font-sans text-xl md:text-2xl text-gray-800 mb-12">
            A partir de ahí, trabajamos lo que tu caso necesita:
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border-l-4 border-mt-blue rounded-2xl shadow-sm">
              <div className="text-mt-blue mb-4">
                <CheckCircle2 strokeWidth={1.5} size={28} />
              </div>
              <h4 className="text-lg font-bold text-mt-dark mb-2">
                Una sonrisa que transforma
              </h4>
              <p className="text-gray-600 text-sm">
                con brackets o alineadores invisibles diseñados específicamente
                para tu caso.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-mt-blue rounded-2xl shadow-sm">
              <div className="text-mt-blue mb-4">
                <Shield strokeWidth={1.5} size={28} />
              </div>
              <h4 className="text-lg font-bold text-mt-dark mb-2">
                La sonrisa de tu hijo, protegida desde temprano
              </h4>
              <p className="text-gray-600 text-sm">
                los tratamientos interceptivos a la edad correcta pueden evitar
                años de tratamiento.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-mt-blue rounded-2xl shadow-sm">
              <div className="text-mt-blue mb-4">
                <CheckCircle2 strokeWidth={1.5} size={28} />
              </div>
              <h4 className="text-lg font-bold text-mt-dark mb-2">
                Tu salud dental a largo plazo
              </h4>
              <p className="text-gray-600 text-sm">
                diagnosticamos y corregimos mordidas, desgaste prematuro y
                problemas funcionales.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-mt-blue rounded-2xl shadow-sm">
              <div className="text-mt-blue mb-4">
                <Info strokeWidth={1.5} size={28} />
              </div>
              <h4 className="text-lg font-bold text-mt-dark mb-2">
                Un nuevo comienzo
              </h4>
              <p className="text-gray-600 text-sm">
                si tu tratamiento anterior no avanzó, sabemos exactamente cómo
                retomarlo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-24 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-5xl text-mt-dark font-bold text-center mb-16 leading-tight">
            Sonrisas que hablan <br /> por sí solas
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-mt-cream/50 p-10 rounded-3xl relative">
              <div className="absolute top-4 left-6 text-6xl text-mt-cream font-serif">
                "
              </div>
              <div className="absolute bottom-0 right-6 text-6xl text-mt-cream font-serif">
                "
              </div>
              <div className="relative z-10">
                <div className="flex text-yellow-400 mb-6">
                  <Star size={20} fill="currentColor" strokeWidth={0} />
                  <Star size={20} fill="currentColor" strokeWidth={0} />
                  <Star size={20} fill="currentColor" strokeWidth={0} />
                  <Star size={20} fill="currentColor" strokeWidth={0} />
                  <Star size={20} fill="currentColor" strokeWidth={0} />
                </div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">
                  Valentina Hdz.
                </h4>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  Trabajo y atención excelente, todo súper rápido y profesional
                  por parte de los ortodoncistas Sergio y Cintia, tienen un
                  espacio muy cómodo, aclaran dudas y todo el tratamiento se
                  adapta a ti, recomiendo muchísimo.
                </p>
              </div>
            </div>

            <div className="bg-mt-cream/50 p-10 rounded-3xl relative">
              <div className="absolute top-4 left-6 text-6xl text-mt-cream font-serif">
                "
              </div>
              <div className="absolute bottom-0 right-6 text-6xl text-mt-cream font-serif">
                "
              </div>
              <div className="relative z-10">
                <div className="flex text-yellow-400 mb-6">
                  <Star size={20} fill="currentColor" strokeWidth={0} />
                  <Star size={20} fill="currentColor" strokeWidth={0} />
                  <Star size={20} fill="currentColor" strokeWidth={0} />
                  <Star size={20} fill="currentColor" strokeWidth={0} />
                  <Star size={20} fill="currentColor" strokeWidth={0} />
                </div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">
                  Guadalupe P.
                </h4>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  Un trato amable y muy profesionales, tanto que puedo decir que
                  me dieron vida. Gracias por su atención, los recomiendo
                  muchísimo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformations Gallery */}
      <section className="py-16 px-8 bg-white max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="rounded-xl overflow-hidden shadow-lg border border-gray-200 relative bg-gray-100 h-80"
            >
              <div className="absolute top-0 inset-x-0 flex justify-center z-10">
                <div className="bg-mt-blue text-white text-xs font-bold px-6 py-1.5 rounded-b-lg">
                  TRANSFORMACIÓN {num}
                </div>
              </div>
              <div className="w-full h-full flex flex-col justify-between p-4 mix-blend-multiply opacity-50 bg-gradient-to-b from-gray-200 to-gray-300">
                <div className="text-gray-500 font-bold tracking-widest text-sm mt-8">
                  ANTES
                </div>
                <div className="text-gray-500 font-bold tracking-widest text-sm mb-4">
                  DESPUÉS
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                [Imagen Antes/Después]
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section
        id="nosotros"
        className="bg-mt-dark text-white rounded-[40px] mx-4 md:mx-8 my-16 overflow-hidden flex flex-col md:flex-row"
      >
        <div className="p-12 md:p-20 flex-1">
          <h2 className="font-serif text-5xl font-bold mb-8">Quiénes somos</h2>
          <div className="w-24 h-1 bg-mt-gold mb-10"></div>

          <div className="space-y-6 text-indigo-100 text-lg leading-relaxed font-light">
            <p>
              M&T nació de una convicción simple: que cada paciente merece saber
              exactamente a dónde va antes de dar el primer paso.
            </p>
            <p>
              Somos [Nombre Dr. 1] y [Nombre Dr. 2], ortodoncistas certificados
              AMO con [X] años transformando sonrisas en Querétaro. Nos
              especializamos en [institución] porque creímos desde el principio
              que la ortodoncia merece dedicación completa — no un servicio más
              en una lista.
            </p>
            <p>
              En M&T no trabajamos con casos, trabajamos con personas. Cada
              tratamiento empieza con una conversación real, un diagnóstico
              honesto y un plan que tú puedes ver antes de comprometerte.
            </p>
            <p>
              Porque una sonrisa bien hecha no solo cambia cómo te ves — cambia
              cómo te sientes.
            </p>
          </div>

          <button className="mt-12 bg-white text-mt-dark px-8 py-4 rounded-full text-base font-bold hover:bg-gray-100 transition-colors shadow-lg">
            Ver mi futura sonrisa
          </button>
        </div>

        <div className="flex-1 bg-gray-800 relative min-h-[400px]">
          {/* Placeholder for doctors working photo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%232d3748%22/%3E%3C/svg%3E')",
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-white/40 font-medium z-10 px-8 text-center">
            [Foto o Video de los Doctores trabajando]
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mt-dark pt-16 pb-8 border-t-2 border-mt-gold mt-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <h3 className="font-serif text-3xl text-white font-bold mb-4">
                M&T Orthodontics
              </h3>
              <p className="text-indigo-200 text-sm leading-relaxed max-w-sm">
                Especialistas certificados AMO
                <br />
                Querétaro, México
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Servicios</h4>
              <ul className="space-y-4 text-indigo-200 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ortodoncia Invisible
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Brackets
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ortodoncia Infantil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Escáner iTero
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Contacto</h4>
              <ul className="space-y-4 text-indigo-200 text-sm mb-8">
                <li className="flex items-center gap-3">
                  <Phone size={16} /> (442) XXX-XXXX
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} /> contacto@mtortodoncia.mx
                </li>
              </ul>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mt-blue transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mt-blue transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mt-blue transition-colors"
                >
                  <MapPin size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-indigo-200/60 text-sm">
            © 2026 M&T Orthodontics. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
