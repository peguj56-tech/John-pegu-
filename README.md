# Blyster Private Limited - Website

## Overview
Blyster Private Limited is a modern digital marketing agency website built with **Next.js**, **Framer Motion**, and **Tailwind CSS**.

## Features
- ✨ Smooth animations with Framer Motion
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- ✉️ Contact form with EmailJS integration
- 🚀 Optimized for SEO with Next.js
- ⚡ Fast performance and smooth user experience

## Tech Stack
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: EmailJS
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/peguj56-tech/John-pegu-.git
   cd John-pegu-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   ```bash
   cp .env.example .env.local
   ```
   - Add your EmailJS credentials:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## EmailJS Setup

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Create an email service
4. Create an email template
5. Copy your Service ID, Template ID, and Public Key
6. Add them to `.env.local`

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Setup Next.js Blyster website"
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com/)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables from `.env.local`
   - Deploy!

## Project Structure

```
.
├── app/
│   ├── page.js           # Main website component
│   ├── layout.js         # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind configuration
└── postcss.config.js     # PostCSS configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features to Add

- [ ] Navigation bar
- [ ] Mobile menu
- [ ] Testimonials section
- [ ] Pricing section
- [ ] Team members section
- [ ] Blog/Resources section
- [ ] Analytics integration
- [ ] CRM integration

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

Copyright © 2026 Blyster Private Limited. All rights reserved.

## Support

For questions or issues, please contact: contact@blyster.com
