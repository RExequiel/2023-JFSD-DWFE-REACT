import Link from "next/link";

const Home = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <article className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          ¡Bienvenid@ a Misiotrónica!
        </h1>
        <br />
        <Link href="/sales">
          <span className="bg-blue-500 text-slate-950 font-semibold py-3 px-6 rounded-lg">
            Ver productos
          </span>
        </Link>
      </article>
    </section>
  );
};

export default Home;
