/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.placeholder.com",
      },
    ],
  },
  async redirects() {
    // El ingles paso de /en a la raiz y el español de la raiz a /es.
    // Estas reglas mantienen vivos los links que ya estaban publicados.
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path", destination: "/:path", permanent: true },
      { source: "/sobre-mi", destination: "/es/sobre-mi", permanent: true },
    ];
  },
};

export default nextConfig;
