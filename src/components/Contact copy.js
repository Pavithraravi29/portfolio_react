import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const inputClasses =
  'w-full p-4 rounded-full border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-100';
const textareaClasses =
  'w-full p-4 rounded-2xl border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-100 h-32';
const buttonClasses =
  'bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 px-6 rounded-full shadow-md hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500';

const ContactForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vewgy4h', 'template_hbtvegf', e.target, '460R6y1gUKAsbTLqC')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.error(error.text);
        alert('Failed to send email.');
      });

    e.target.reset();
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/pavithra-ravi-34473b24b', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Pavithraravi29', '_blank');
  };

  return (
    <div id="contact-section" className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-8 w-full max-w-4xl flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center mb-4 text-zinc-900 dark:text-zinc-100">
            Get in touch.
          </h1>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-8">
            I find joy in establishing connections with others for the purpose of mutual learning, sharing knowledge, and working together towards a common goal.
            Feel free to drop me an email.
          </p>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <input 
                type="text" 
                name="from_name" 
                placeholder="Your Name" 
                className={inputClasses}
                required
                />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="from_email"
                placeholder="Your Email Id"
                className={inputClasses}
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                className={textareaClasses}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className={buttonClasses}>
                Send Email
              </button>
            </div>
          </form>
          <div className="flex justify-center mt-8 space-x-4">
            <FaGithub
              size={40}
              className="text-gray-700 dark:text-gray-300 cursor-pointer"
              onClick={handleGitHubClick}
            />
            <FaLinkedin
              size={40}
              className="text-blue-500 cursor-pointer"
              onClick={handleLinkedInClick}
            />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img src="contact.png" alt="Contact" className="w-40 md:w-80" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
