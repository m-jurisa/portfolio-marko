import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Marko ',
          from_email: form.email,
          to_email: 'marko.jurisa@proton.me',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Danke für deine Nachricht 😃',
            type: 'success',
          });
      
          setTimeout(() => {
            hideAlert();
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, 3000); 
        },
        (error) => {
          setLoading(false);
          console.error(error);
      
          showAlert({
            show: true,
            text: 'Ich habe deine Nachricht leider nicht erhalten 😢',
            type: 'danger',
          });
        }
      );
      
  };

  return (
    <section className="c-space my-0 mb-20 sm:my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col ">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container text-white-600 ">
          <h3 className="sm:text-4xl text-3xl font-semibold mt-16 md:mt-0">Lass uns sprechen</h3>
          <p className="text-lg  mt-3">
          Egal, ob du eine neue Webseite erstellen, deine bestehende Plattform optimieren oder ein einzigartiges Projekt verwirklichen möchtest – ich stehe dir gerne zur Verfügung.

          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Vollständiger Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="z.B. John Doe"
                />
            </label>

            <label className="space-y-3">
              <span className="field-label">E-Mail-Adresse</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="z.B. johndoe@gmail.com"
                />
            </label>

            <label className="space-y-3">
              <span className="field-label">Deine Nachricht</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Teile deine Gedanken oder Anfragen..."
                />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
            {loading ? 'Senden...' : 'Nachricht senden'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;