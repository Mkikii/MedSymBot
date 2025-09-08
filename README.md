# AfyaGo - Online Pharmacy Platform 🏥

> **Note:** This project is actively under development. Features are being added incrementally with a focus on security, accessibility, and performance.

## Overview

AfyaGo is a modern online pharmacy platform built for the Kenyan market. It provides a secure and convenient way to purchase medications, manage prescriptions, and access healthcare products online.

## Key Features

- 🔒 Secure prescription management
- 💊 Product catalog with medication details
- 🤖 AI-powered medical assistant (MedSymBot)
- 🛒 Smart shopping cart with prescription validation
- 📊 Product comparison tools
- 🚚 Delivery tracking
- 💳 Secure payment processing

## Tech Stack

- **Frontend:** Next.js 13+ (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **State Management:** Context API
- **Form Handling:** React Hook Form + Zod
- **Testing:** Jest + React Testing Library
- **Security:**
  - Content Security Policy (CSP)
  - Rate limiting
  - Input validation
  - Secure file uploads

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/afya-go.git
```

2. Install dependencies
```bash
npm install
```

3. Copy environment variables
```bash
cp .env.example .env.local
```

4. Start development server
```bash
npm run dev
```

## Architecture

- `/app` - Next.js 13+ app router pages
- `/components` - Reusable React components
- `/context` - React Context providers
- `/services` - Business logic and API services
- `/utils` - Utility functions and helpers
- `/types` - TypeScript type definitions

## Security Features

- CSP headers configuration
- Rate limiting on API routes
- Secure file upload validation
- Input sanitization
- Error boundaries
- Structured logging

## Development Status

### Completed Features
- ✅ Base application structure
- ✅ Core UI components
- ✅ Authentication system
- ✅ Product catalog
- ✅ Shopping cart

### In Progress
- 🚧 Prescription management system
- 🚧 Payment integration
- 🚧 Admin dashboard
- 🚧 Order management

### Planned Features
- 📋 Prescription refill automation
- 📊 Analytics dashboard
- 🔔 Push notifications

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please email timmaina64@gmail.com or raise an issue in the repository.

---

Made for improving healthcare accessibility in Kenya
