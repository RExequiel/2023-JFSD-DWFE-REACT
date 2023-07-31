import SocialMedia from "./SocialMedia";
import ContactForm from "./ContactForm";
import FAQModal from "./FAQModal";

const Contact = () => {
  return (
    <section className="p-4">
      <SocialMedia />
      <br />
      <hr />
      <br />
      <div className="flex-col items-center justify-around">
        <ContactForm />
        <br />
        <hr />
        <br />
        <FAQModal />
      </div>
    </section>
  );
};

export default Contact;
