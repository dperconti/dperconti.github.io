import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data || { frontmatter: { title: "Contact" } };
  const { title } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <div className="site-frame">
      <p className="site-page-sub">contact</p>
      {markdownify(title || "Contact", "h1", "site-page-title")}
      <p className="site-lede">
        Send a note with the form below. Prefer LinkedIn? Use the link in the
        footer.
      </p>
      <form
        className="contact-form mt-8"
        action={contact_form_action}
        method="POST"
      >
        <div className="mb-6">
          <label className="mb-2 block" htmlFor="name">
            Name
          </label>
          <input className="form-input w-full" name="name" type="text" required />
        </div>
        <div className="mb-6">
          <label className="mb-2 block" htmlFor="email">
            Your email
          </label>
          <input
            className="form-input w-full"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block" htmlFor="subject">
            Subject
          </label>
          <input
            className="form-input w-full"
            name="subject"
            type="text"
            required
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-textarea w-full"
            name="message"
            rows="6"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary rounded text-sm px-5 py-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
