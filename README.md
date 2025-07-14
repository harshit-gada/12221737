Project Overview

A simple client-side URL shortener built with React, allowing users to:

Input a long URL to generate a unique, shorter code.

Set an expiration time (default: 30 minutes).

Optionally provide a custom shortcode.

Persist link data in browser localStorage.

Redirect shortcodes to original URLs using React Router.

View statistics of all shortened URLs.

Features

Generate Short URLs: Auto-generate a 6-character alphanumeric code if no custom shortcode is given.

Custom Shortcodes: Allow users to specify an alphanumeric string as shortcode (validated for uniqueness).

Link Expiry: Let users choose a validity period in minutes; files expire after that time.

Persistent Storage: Store all URL entries in localStorage so data remains after page reload.

Redirection: Using React Router, dynamic routes (/:shortcode) capture codes and redirect to long URLs.

Statistics Page: List all created entries, showing shortcode, original URL, and expiration time.

Logging Middleware: Custom logger() function logs key events to the console for debugging or analytics.

Tech Stack

React: UI component library

React Router DOM: Client-side routing

JavaScript: Application logic

localStorage: Browser storage

HTML & CSS: Basic styling (or integrate Tailwind/Bootstrap)

Installation & Setup
Install dependencies

npm install

Run the development server

npm start

The app will open at http://localhost:3000

Usage

Navigate to the home page and enter:

Long URL (required, must start with http:// or https://).

Custom Shortcode (optional, must be alphanumeric and unique).

Validity (in minutes, optional; defaults to 30).

Submit the form to generate a shortened link.

Visit http://localhost:3000/<shortcode> to test redirection.

Go to /stats to view all stored URL entries.
