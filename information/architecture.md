📁 Root Directory (INMOBI)
│
├── **/public**                     // Public assets (images, icons, etc.)
│
├── **/src**                         // Main source directory
│   ├── **/app**                     // App directory with layout and pages
│   │   ├── **/pages**               // General pages, organized by sections
│   │   │   ├── about                // About page
│   │   │   ├── compare              // Compare properties page
│   │   │   ├── contact              // Contact page
│   │   │   ├── faq                  // Frequently asked questions
│   │   │   ├── invoice              // Invoice page
│   │   │   ├── pricing              // Pricing page
│   │   │   └── property             // Property page details
│   │   ├── **(home)/home-v1**       // Home page (version 1) directory
│   │   │   └── page.js              // Main file for home-v1 page
│   │   ├── **(listing)**            // Listings page for properties
│   │   ├── **(blog)**               // Blog-related content and pages
│   │   ├── **/api**                 // API routes for server-side logic
│   │   ├── **/layout-wrapper**      // Layout wrapper components or utilities
│   │   ├── **/register**            // User registration page or form
│   │   ├── layout.js                // Main layout file for the entire app
│   │   └── page.js                  // Entry page or main index
│
├── **/components**                  // Reusable components
│   ├── **/blog**                    // Components specific to blog pages
│   ├── **/common**                  // Shared/common components across pages
│   ├── **/home**                    // Components specifically for the home page
│   ├── **/listing**                 // Components related to property listings
│   ├── **/pages**                   // Components for general pages
│   ├── **/property**                // Components for property-related functionality
│   └── AuthProvider.js              // Authentication provider component
│
├── **/config**                      // Configuration files or settings
│   └── database.js                  // Database connection or configuration
│
├── **/data**                        // Data files or static content
│   ├── agency.js                    // Agency data
│   ├── agents.js                    // Agents data
│   ├── apartmentType.js             // Apartment types
│   ├── apartmentTypes2.js           // Additional apartment types
│   ├── blogs.js                     // Blog data
│   ├── listings.js                  // Property listings data
│   ├── listings2.js                 // Additional listings data
│   ├── mobileMenuItems.js           // Mobile menu items data
│   ├── navItems.js                  // Navigation items data
│   ├── propertyByCities.js          // Property listings organized by city
│   └── testimonials.js              // Testimonials data
│
├── **/utils**                       // Utility functions or helper modules
│   ├── authOptions.js               // Authentication options or configurations
│   └── isMenuActive.js              // Utility function to check menu state
│
├── .env                             // Environment variables
├── .eslintrc.json                   // ESLint configuration
├── .gitignore                       // Git ignore file
├── jsconfig.json                    // JavaScript project configuration
├── next-env.d.ts                    // Next.js TypeScript environment file
├── next.config.js                   // Next.js configuration
├── package.json                     // Project dependencies and scripts
├── README.md                        // Project README file
└── yarn.lock                        // Yarn lock file for dependency versions


Explanation of Key Sections
App Directory (/src/app):
Contains organized page sections such as about, compare, contact, faq, invoice, pricing, and property.
(home)/home-v1: Home page directory with page.js file for rendering home version 1.
(listing): Directory for listings-related pages.
(blog): Directory for blog-related pages.
/api: Contains API routes for server-side functionality.
/layout-wrapper: Includes layout components or wrappers for consistent styling across pages.
/register: Contains files for user registration.
layout.js: Main layout file that applies across the application.
page.js: Main entry point or root page.
Components Directory (/components):
Structured by sections such as blog, common, home, listing, pages, and property.
AuthProvider.js: Handles user authentication.
Config, Data, and Utils Directories:
config/database.js: Configuration or connection settings for the database.
data: Static data files categorized by type, including agencies, agents, apartment types, listings, and testimonials.
utils: Utility functions like authOptions for authentication and isMenuActive to check the active state of the menu.
Root Files:
.env: Environment variables for sensitive data.
.eslintrc.json: ESLint configuration for code style and linting.
.gitignore: Specifies files to ignore in Git.
jsconfig.json: JavaScript project configurations.
next-env.d.ts: TypeScript environment file for Next.js.
next.config.js: Next.js custom configuration.
package.json: Project dependencies and scripts.
README.md: Documentation for the project.
yarn.lock: Dependency versions managed by Yarn.
