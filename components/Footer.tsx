'use client'

import { HiMail } from 'react-icons/hi'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-max py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Habeeba Faiza</h3>
            <p className="text-slate-400 text-sm">
              International Education Specialist | University Admissions Expert
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  University Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Application Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Visa Support
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/habeeba-faiza"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="mailto:faaizaofficial27@gmail.com"
                className="p-3 bg-slate-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="Email"
              >
                <HiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-400 text-sm">
            © {currentYear} Habeeba Faiza. All rights reserved. | Crafted with precision for global education excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
