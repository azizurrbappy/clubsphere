# ClubSphere – Membership & Event Management for Local Clubs

<div align="center">
  <br />
  <img src="public/logo.png" alt="ClubSphere Logo" width="100" />
  <br />
  <h3>Discover, Join, and Manage Local Clubs with Ease</h3>
  <br />
  
  [**Live Website**](https://clubsphere.web.app)
  
  <br />
</div>

## 📌 Project Overview
**ClubSphere** is a full-stack MERN web application designed to help people discover, join, and manage local clubs (e.g., photography, hiking, tech). It provides a seamless platform for:
- **Club Managers** to create clubs, organize events, and manage members.
- **Members** to browse clubs, join communities, and register for events.
- **Admins** to oversee the platform, approve clubs, and monitor payments.

The project features a **secure authentication system**, **role-based dashboards**, **Stripe payment integration**, and a modern, responsive UI built with **React** and **Tailwind CSS**.

---

## 🚀 Key Features

### 🌍 Public Features
- **Club Discovery**: Browse and search for clubs by category or name.
- **Event Listings**: View upcoming events and details.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Interactive UI**: Animations using Framer Motion.

### 🔐 Authentication & Security
- **Firebase Authentication**: Secure email/password and Google login.
- **Role-Based Access Control**: Distinct capabilities for Admins, Club Managers, and Members.
- **JWT Verification**: Secure private routes and API endpoints.

### 👤 User Roles & Dashboards

#### 👑 Admin
- **Platform Overview**: Visual stats on users, clubs, and payments (Recharts).
- **Club Management**: Approve or reject new club requests.
- **User Management**: Promote/demote user roles.
- **Financial Monitoring**: View all transaction history.

#### 🏢 Club Manager
- **Club Management**: Create and update club profiles (Banner, Fee, Description).
- **Event Management**: Create, update, and delete events.
- **Member Oversight**: View club members and manage their status.
- **Revenue Tracking**: Monitor payments and registrations.

#### 👤 Member
- **Join Clubs**: Paid (via Stripe) or free memberships.
- **Event Registration**: Register for specific club events.
- **Personal Dashboard**: Track joined clubs, registered events, and payment history.

---

## 🛠️ Technology Stack

### Frontend
- **React.js**: Component-based UI.
- **Vite**: Fast build tool.
- **Tailwind CSS & DaisyUI**: Utility-first styling and component library.
- **Framer Motion**: Smooth animations.
- **TanStack Query (React Query)**: Efficient server state management.
- **React Hook Form**: Form handling and validation.
- **Recharts**: Data visualization charts.
- **Axios**: HTTP requests.

### Backend (MERN)
- **Node.js & Express.js**: RESTful API.
- **MongoDB**: NoSQL database for flexible data storage.
- **Stripe**: Payment processing.
- **JWT**: Secure authentication.

### Tools & Services
- **Firebase**: User authentication and hosting.
- **Vercel / Netlify**: Deployment.
- **ImgBB**: Image hosting (optional/implied).

---

## 📦 Important NPM Packages Used

| Package | Purpose |
| :--- | :--- |
| `@tanstack/react-query` | Data fetching, caching, and state management |
| `react-hook-form` | Efficient form validation and handling |
| `firebase` | Authentication services |
| `framer-motion` | Animations and transitions |
| `recharts` | Dashboard charts and graphs |
| `daisyui` | Tailwind CSS component library |
| `axios` | API requests |
| `react-router` | Navigation and routing |
| `react-toastify` | Notifications and alerts |

---

## ⚙️ Installation & Run Locally

Follow these steps to set up the project locally.

### Prerequisites
- Node.js installed
- MongoDB installed or MongoDB Atlas URI
- Firebase Project setup
- Stripe Account

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/clubsphere.git
cd clubsphere
```

### 2. Setup Environment Variables
Create a `.env.local` file in the **client** directory and add your keys:

```env
# Firebase Config
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id

# Backend URL
VITE_API_URL=http://localhost:5000
```

Create a `.env` file in the **server** directory:
```env
PORT=5000
DB_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
ACCESS_TOKEN_SECRET=your_jwt_secret
```

### 3. Install Dependencies

**Client:**
```bash
# Inside root/client folder
npm install
```

**Server:**
```bash
# Inside server folder
npm install
```

### 4. Run the Project

**Start Client:**
```bash
npm run dev
```

**Start Server:**
```bash
nodemon index.js
```

User: `admin@clubsphere.com` | Pass: `Admin123!` (Example credentials)

---

## 📸 Screenshots
*(Add screenshots of your Home page, Dashboards, and Login screen here)*

---

## 🤝 Contribution
Contributions are welcome! Please fork the repository and create a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License
This project is licensed under the MIT License.
