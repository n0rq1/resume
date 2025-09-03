import React from 'react';
import profilePhoto from '../assets/profile-photo.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14 animate-fade-up">
          <div className="md:ml-6">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Austin Norquist"
                className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover ring-4 ring-white dark:ring-gray-800 shadow-xl"
              />
              <div className="absolute inset-0 rounded-full -z-10 blur-2xl bg-gradient-to-tr from-sky-400/30 via-blue-500/20 to-indigo-500/20"></div>
            </div>
          </div>
          <div className="md:flex-1">
            <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">DevOps Engineer</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Hi, I'm <span className="text-gradient">Austin</span>
            </h1>
            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl">
              I currently live in Chico, CA. I'm a DevOps engineer. I like DevOps things, and I like graph theory.
            </p>
            <p className="mt-3 max-w-2xl">
              <span className="glam-sparkles" title="Container orchestration, but make it glamorous.">
                <span className="glam-text glam-sparkles-aux fancy-kube text-2xl md:text-3xl">KUBERNETES!!!!!!!!!!!!!!!!!!!</span>
              </span>
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/n0rq1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 transition"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/austin-norquist"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full ring-1 ring-gray-300 dark:ring-gray-600 text-gray-800 dark:text-gray-100 hover:bg-gray-100/70 dark:hover:bg-gray-700/50 transition"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:austin.norquist@liatrio.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full ring-1 ring-sky-300/70 dark:ring-sky-700/60 text-sky-700 dark:text-sky-300 hover:bg-sky-50/70 dark:hover:bg-sky-900/30 transition"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
