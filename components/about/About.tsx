import SocialMedia from "../contact/SocialMedia";
import CardItems from "./CardItems";

const About = () => {
  return (
    <section className="p-4 ">
      <h2 className="text-2xl text-center font-bold mb-4">Quienes somos</h2>
      <div className="flex items- py-5 justify-center">
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/Ycs7gq_fRcA"
          title="Espectacular vídeo corporativo para empresa | DOSIS VIDEOMARKETING"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="text-2xl text-center font-bold my-4">Secciones - Beneficios</h2>
      <CardItems/>
    </section>
  );
};

export default About;
