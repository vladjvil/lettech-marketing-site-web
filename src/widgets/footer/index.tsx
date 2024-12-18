import { useState } from 'react';
import { postSubscriber } from '../../shared/api/request';
import { cn } from '../../shared/lib/cn';
import { useTheme } from '../../shared/lib/providers/theme-provider';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Input } from '../../shared/ui/input';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contacts', label: 'Contacts' },
];

export function Footer() {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    try {
      await postSubscriber(email);
      setIsSubscribed(true);
      setError('');
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <footer
      className={cn(
        'py-20 transition-colors duration-300 relative overflow-hidden',
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
          : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'
      )}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-purple-500 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid gap-16 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center text-lg transition-colors hover:text-blue-500"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 opacity-0 -ml-6 transition-all group-hover:opacity-100 group-hover:ml-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>ceo@lettech.io</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>123 Tech Street, Digital City</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            {isSubscribed ? (
              <div className="p-4 bg-green-500 bg-opacity-10 rounded-lg border border-green-500">
                <p className="text-green-500">Thank you for subscribing!</p>
              </div>
            ) : (
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  error={error}
                  className="w-full"
                />
                <button
                  onClick={handleSubscribe}
                  className={cn(
                    "w-full px-6 py-3 rounded-lg font-semibold",
                    "bg-gradient-to-r from-blue-500 to-purple-500",
                    "text-white transition-all duration-300",
                    "hover:from-blue-600 hover:to-purple-600",
                    "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    "transform hover:-translate-y-0.5"
                  )}
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm opacity-60">
            © {new Date().getFullYear()} LetTech. All rights reserved.
            <br />
            <span className="text-xs">
              Crafted with passion for a better digital experience
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}