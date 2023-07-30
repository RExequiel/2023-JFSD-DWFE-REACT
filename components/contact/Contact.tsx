import ContactForm from "./ContactForm";
import FAQModal from "./FAQModal";

const Contact = () => {
  return (
    <section className="p-4">
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
