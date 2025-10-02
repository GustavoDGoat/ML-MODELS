```index.tsx
import './index.css'
import React from "react";
import { render } from "react-dom";
import { App } from "./App";

render(<App />, document.getElementById("root"));

```
```App.tsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import Partnership from './pages/Partnership'
import CookieBanner from './components/CookieBanner'
export function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/partnerships" element={<Partnership />} />
        </Routes>
        <CookieBanner />
      </div>
    </Router>
  )
}

```
```AppRouter.tsx
import React from "react";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import { App } from "./App";

  export function AppRouter() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
      </BrowserRouter>
    );
  }
```
```tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#1e1b4b',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
    },
  },
  plugins: [],
}
```
```index.css
/* PLEASE NOTE: THESE TAILWIND IMPORTS SHOULD NEVER BE DELETED */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
/* DO NOT DELETE THESE TAILWIND IMPORTS, OTHERWISE THE STYLING WILL NOT RENDER AT ALL */
```
```components/Header.tsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, XIcon } from 'lucide-react'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="py-6 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://uploadthingy.s3.us-west-1.amazonaws.com/mvgGTk4dn2WuqzYX4iEmVZ/file_00000000906862439d31c9234df1bce0.png"
            alt="DataMint Logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-indigo-900">DataMint</span>
        </Link>
        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6 text-indigo-900" />
          ) : (
            <MenuIcon className="h-6 w-6 text-indigo-900" />
          )}
        </button>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-indigo-900 hover:text-indigo-700 font-medium"
          >
            Home
          </Link>
          <Link
            to="/partnerships"
            className="text-indigo-900 hover:text-indigo-700 font-medium"
          >
            Partner with DataMint
          </Link>
          <Link
            to="/"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md font-medium"
          >
            Join Waitlist
          </Link>
        </nav>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-indigo-900 hover:text-indigo-700 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/partnerships"
              className="text-indigo-900 hover:text-indigo-700 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner with DataMint
            </Link>
            <Link
              to="/"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
export default Header

```
```components/Footer.tsx
import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/mvgGTk4dn2WuqzYX4iEmVZ/file_00000000906862439d31c9234df1bce0.png"
                alt="DataMint Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">DataMint</span>
            </div>
            <p className="text-gray-300 mb-4">Own your data. Earn From it.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-gray-300 hover:text-white"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/partnerships"
                  className="text-gray-300 hover:text-white"
                >
                  Partner with DataMint
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">datamintapp@gmail.com</p>
            <p className="text-gray-300 mb-4">datamintapp.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center md:text-left">
          <p className="text-gray-300">
            © 2025 DataMint. All rights reserved. Built with ❤️ by Chukwuka
            Paulgreen, CEO & Founder
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer

```
```components/WaitlistForm.tsx
import React, { useState } from 'react'
const WaitlistForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('processing')
    try {
      const response = await fetch('https://formspree.io/f/xeolbedb', {
        method: 'POST',
        body: JSON.stringify({
          email,
          message,
          source: 'Waitlist',
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        setStatus('success')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Your email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 font-medium mb-2"
        >
          Your message (optional):
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
      >
        {isSubmitting ? 'Submitting...' : 'Join the Waitlist 🚀'}
      </button>
      {status === 'success' && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
          🎉 You're on the waitlist! Stay tuned for updates.
        </div>
      )}
      {status === 'error' && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          ⚠️ Something went wrong. Please try again.
        </div>
      )}
      <p className="mt-4 text-sm text-gray-600">
        📌 By signing up, you agree to our Terms of Use and Privacy Policy.
      </p>
    </form>
  )
}
export default WaitlistForm

```
```components/CookieBanner.tsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted')
    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])
  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setIsVisible(false)
  }
  const handleDecline = () => {
    // Still hide the banner but don't set cookies
    setIsVisible(false)
  }
  if (!isVisible) return null
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-700 mb-4 md:mb-0">
          We use cookies to enhance your DataMint experience. By continuing, you
          agree to our{' '}
          <Link
            to="/privacy-policy"
            className="text-indigo-600 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
          >
            Accept Cookies
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
          >
            Decline Cookies
          </button>
        </div>
      </div>
    </div>
  )
}
export default CookieBanner

```
```pages/HomePage.tsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WaitlistForm from '../components/WaitlistForm'
import {
  ShieldCheck,
  Lock,
  DollarSign,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://uploadthingy.s3.us-west-1.amazonaws.com/op4HVNs16NVAXDkjGx1FDW/file_00000000fdf0624688ed063780a4cfa8.png"
              alt="DataMint Logo"
              className="h-20 w-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Own Your Data. <br />
              Earn From It.
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-lg">
              Every day, tech giants profit from your clicks, searches, and
              purchases. With DataMint, you take back control and earn from the
              value you create.
            </p>
            <a
              href="#waitlist"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-md font-medium text-lg inline-flex items-center"
            >
              Join the Waitlist 🚀
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://uploadthingy.s3.us-west-1.amazonaws.com/drSCwgrpyJop1GiqvEVKhe/1758110904867_image.png"
              alt="DataMint App Preview"
              className="max-w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">
            Take back control of your digital life
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-indigo-900">
                Own Your Data
              </h3>
              <p className="text-gray-600">
                Securely store and manage all your digital information in one
                place with full ownership.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Lock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-indigo-900">
                Control Access
              </h3>
              <p className="text-gray-600">
                Choose exactly what data you share, with whom, and for how long
                with granular permissions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-indigo-900">
                Earn Rewards
              </h3>
              <p className="text-gray-600">
                Get paid in DMT tokens when companies use your data, creating a
                new income stream.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* App Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-indigo-900">
            App Preview
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Take a look at how DataMint empowers you to manage, control, and
            monetize your data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4 text-indigo-900">
                Wallet Home
              </h3>
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/hvEGNtymXr8BTdwsX9osd8/1758110879208_image.png"
                alt="DataMint Wallet Home"
                className="rounded-lg shadow-lg mb-4"
              />
              <p className="text-gray-600 text-center">
                View your balance and take quick actions to manage your data
                assets.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4 text-indigo-900">
                Marketplace Overview
              </h3>
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/nCYDKpPgM21mHW6uYF5e6K/1758110888410_image.png"
                alt="DataMint Marketplace"
                className="rounded-lg shadow-lg mb-4"
              />
              <p className="text-gray-600 text-center">
                Browse opportunities to share data and earn DMT tokens in our
                secure marketplace.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4 text-indigo-900">
                Rewards Dashboard
              </h3>
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/cbmT7BvksSkhkQnoqcmQms/file_000000006c7061f4bc94f3cab564c5d4.png"
                alt="DataMint Rewards"
                className="rounded-lg shadow-lg mb-4"
              />
              <p className="text-gray-600 text-center">
                Track your earnings and see how your data is creating value for
                you.
              </p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-800 inline-flex items-center font-medium"
            >
              See more app features <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </section>
      {/* Why DataMint Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why DataMint?
          </h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Data is power. You should hold the keys.
            </h3>
            <p className="text-lg mb-8 text-gray-300 text-center">
              Today, your data fuels trillion-dollar industries, yet you're left
              out. DataMint
