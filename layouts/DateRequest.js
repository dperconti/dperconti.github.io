import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote";
import { useState, useEffect } from "react";
import shortcodes from "./shortcodes/all";
import InstagramGallery from "./components/InstagramGallery";

const DateRequest = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title } = frontmatter;
  const { contact_form_action } = config.params;
  const [instagramHandle, setInstagramHandle] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [isValid, setIsValid] = useState(null);
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    const validateInstagram = async () => {
      const handle = instagramHandle.trim().replace(/^@/, "");
      
      if (!handle) {
        setIsValid(null);
        setValidationError("");
        return;
      }

      // Basic format validation
      if (!/^[a-zA-Z0-9._]{1,30}$/.test(handle)) {
        setIsValid(false);
        setValidationError("Invalid Instagram handle format");
        return;
      }

      setIsValidating(true);
      setValidationError("");

      try {
        const response = await fetch("/api/validate-instagram", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: handle }),
        });

        const data = await response.json();
        
        if (data.exists) {
          setIsValid(true);
          setValidationError("");
        } else {
          setIsValid(false);
          setValidationError("This Instagram handle doesn't exist");
        }
      } catch (error) {
        console.error("Validation error:", error);
        setIsValid(false);
        setValidationError("Could not verify Instagram handle");
      } finally {
        setIsValidating(false);
      }
    };

    // Debounce validation
    const timeoutId = setTimeout(() => {
      validateInstagram();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [instagramHandle]);

  return (
    <section className="section pt-[72px]">
      <div className="container">
        <div className="row">
          <div className="mx-auto lg:col-8">
            {/* Glass morphism content card */}
            <div className="glass-card mb-8">
              <div className="content">
                {<MDXRemote {...mdxContent} components={shortcodes} />}
              </div>
            </div>
            
            <div className="glass-card mb-8">
              <InstagramGallery username="dperconti" />
            </div>
            
            {/* Glass morphism form card */}
            <div className="glass-card">
              <div className="mt-12 pt-12">
                {markdownify(title, "h3", "h5 font-normal text-3xl glass-heading")}
                <form className="contact-form mt-6" action={contact_form_action} method="POST">
                <input type="hidden" name="_subject" value="Date Request" />
                <div className="row mb-6">
                  <div className="md:col-6">
                    <label className="mb-2 block" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      className="form-input w-full"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="mt-6 md:mt-0 md:col-6">
                    <label className="mb-2 block" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-input w-full"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="mb-2 block" htmlFor="preferredDate">
                    Preferred Date & Time
                  </label>
                  <input
                    className="form-input w-full"
                    name="preferredDate"
                    type="text"
                    placeholder="e.g., Saturday evening, next weekend, or any time that works for you"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2 block" htmlFor="activity">
                    Activity Idea
                  </label>
                  <input
                    className="form-input w-full"
                    name="activity"
                    type="text"
                    placeholder="What would you like to do? (coffee, dinner, hike, etc.)"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2 block" htmlFor="message">
                    Tell me about yourself
                  </label>
                  <textarea
                    className="form-textarea w-full"
                    name="message"
                    rows="6"
                    placeholder="A bit about you, why you'd like to go on a date, or anything else you'd like to share..."
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2 block" htmlFor="instagram">
                    Instagram Handle <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={`form-input w-full glass-input ${
                      isValid === false ? "border-red-400" : isValid === true ? "border-green-400" : ""
                    }`}
                    name="instagram"
                    type="text"
                    placeholder="@yourusername"
                    value={instagramHandle}
                    onChange={(e) => setInstagramHandle(e.target.value)}
                    pattern="^@?[a-zA-Z0-9._]{1,30}$"
                    required
                  />
                  {isValidating && (
                    <p className="mt-2 text-sm text-gray-600">Checking Instagram handle...</p>
                  )}
                  {!isValidating && isValid === true && (
                    <p className="mt-2 text-sm text-green-600">✓ Instagram handle verified</p>
                  )}
                  {!isValidating && isValid === false && validationError && (
                    <p className="mt-2 text-sm text-red-600">{validationError}</p>
                  )}
                  {!isValidating && isValid === null && (
                    <p className="mt-2 text-sm text-gray-600">
                      Your Instagram handle (with or without @)
                    </p>
                  )}
                </div>
                <button 
                  type="submit" 
                  className="glass-button btn btn-primary rounded-lg text-sm font-secondary px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                  disabled={isValidating || isValid === false}
                >
                  Send Date Request
                </button>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DateRequest;

