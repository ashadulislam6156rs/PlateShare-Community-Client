# 🍽️ PlateShare

**Live Site View for Netlify:** [View Live](https://plateshare-community.netlify.app/)

**Live Site View for Cloudflare:** [View Live](https://plateshare-community.pages.dev/)

GitHub Server Repo: https://github.com/ashadulislam6156rs/PlateShare-Community-Server.git


PlateShare is a community-powered food sharing platform that connects generous donors with individuals and families in need. Built with empathy, trust, and accessibility at its core, PlateShare helps reduce food waste while strengthening local bonds.

---

User
Email  : ashadulislam6156rs@gmail.com
Password : Asd123456

Admin
Email  : ashadulislam@gmail.com
Password : Asd123456

---

## 🌟 Key Features

🥗 Browse Available Meals
Discover fresh, home-cooked or packaged food donations with detailed descriptions, pickup times, and expiry info.

📊 Food Request System
Donors can accept or reject food requests in real time.

🕒 Smart Date & Time Formatting
Cooked and expiry times are displayed in a human-readable format.

📩 Request Food with Purpose
Authenticated users can submit personalized food requests, including location, contact number, and a message explaining their need.

🍱 Add, Edit, and Manage Foods
Users can easily post, edit, and manage their donated food items.

👤 Verified Donor Profiles
Each listing includes donor details with profile image, email, and verification status to ensure transparency and trust.

📦 Clear Packaging & Pickup Info
Listings include packaging type, cooked time, and pickup time windows to help recipients plan safely and efficiently.

🚫 Robust Error Handling & Protected Routes
Includes graceful fallback pages like “404 Not Found” and “Food Not Found,” plus secure access for authenticated users only.

🛠️ User Role Management (Admin)
Admin users can manage other users, including promoting, demoting, or restricting access.

---

## 🛠️ Technologies & npm Packages Used

| Category            | Tools / Libraries                                   |
|---------------------|-----------------------------------------------------|
| **Frontend**        | React, React Router DOM                             |
| **Backend**         | Node.js, Express.js, CORS, dotenv, MongoDB, Vercel  |
| **Styling**         | Tailwind CSS, DaisyUI                               |
| **Authentication**  | Firebase                                            |
| **Animations**      | AOS, React Simple Typewriter                        |
| **Icons**           | React Icons                                         |
| **Notifications**   | React Toastify, SweetAlert2                         |
| **Client Deployment** | Netlify, Cloudflare                               |
| **Server Deployment** | Vercel                                            |
| **Data Fetching**   | fetch, Axios                                        |
| **State Management**| React Query                                         |
| **Database**        | MongoDB Database                                    |





---

## 📂 Folder Structure (Client Side)

Below is the folder structure for the **client** side of PlateShare:

```
client/
├── public/
│   └── _redirects
│
├── src/
│   ├── assets/                
│   │
│   ├── AuthContext/
│   │   └── AuthContext.jsx     
│   ├── AuthProvider/
│   │   └── AuthProvider.jsx    
│   ├── components/            
│   │   ├── Container/          
│   │   ├── ErrorPages/         
│   │   ├── Footer/             
│   │   ├── HomeComponants/ 
|   │   │   ├── FeatureFoods.jsx            
│   │   |   ├── FoodCard.jsx             
│   │   |   ├── HowItWorks.jsx            
│   │   |   └── OurMission.jsx 
│   │   ├── ManageMyFoodsComponants   
│   │   |   └── UpdateMyFood.jsx
│   │   ├── Navbar/            
│   │   |   ├── Navbar.jsx           
│   │   |   └── UserDeshboard.jsx 
│   │   ├── Banner.jsx              
│   │   ├── FoodDetails.jsx            
│   │   ├── FoodRequestCards.jsx           
│   │   └── RequestFoods.jsx          
│   │
│   ├── pages/                
│   │   ├── AddFood.jsx             
│   │   ├── AvailableFoods.jsx           
│   │   ├── Home.jsx       
│   │   ├── LogIn.jsx           
│   │   ├── ManageMyFoods.jsx        
│   │   ├── Register.jsx          
│   │   ├── ViewAllFoods.jsx      
│   │   └── MyFoodRequests.jsx               
│   │
│   ├── Firebase/
│   │   └── Firebase.init.js    
│   │
│   ├── Routes/
│   │   └── Router.jsx          
│   │
│   ├── PrivateRoutes/
│   │   └── PrivateRoutes.jsx          
│   ├── Layouts/
│   │   └── MainLayout.jsx        
│   ├── Loading/
│   │   └── Loading.jsx        
│   │
│   ├── index.css           
│   │   └── tailwind.css        
│   └── main.jsx              
├── .gitignore                      
├── package.json                
├── index.html              
├── eslint.config.js               
├── package-lock.json        
├── vite.config.js             
└── README.md                  
```
---
## Dependencies (Client Side)
```
"dependencies": {
  "@tailwindcss/vite": "^4.1.17",
  "@tanstack/react-query": "^5.90.16",
  "aos": "^2.3.4",
  "axios": "^1.13.2",
  "firebase": "^12.5.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-hook-form": "^7.69.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.9.5",
  "react-simple-typewriter": "^5.0.1",
  "react-spinners": "^0.17.0",
  "react-toastify": "^11.0.5",
  "sweetalert2": "^11.26.3",
  "swiper": "^11.2.10",
  "tailwindcss": "^4.1.17"
}

```
---
## 📸 Website Screenshots

### 🏠 Home Page
![Homepage Screenshot](public/websiteScreenshot/Home_page.jpeg)

### Food Details Page
![Course Details Screenshot](public/websiteScreenshot/FoodDetails.png)

### User Profile Image (Dropdown Menu)
![Login Screenshot](public/websiteScreenshot/DropdownMenu.png)

---
### 🖥️ How to Run Locally:
1. Clone the Repository

Create file plateshare
```
cd plateshare
```
```
git clone https://github.com/ashadulislam6156rs/PlateShare-Community-Client.git

```
2. Install Dependencies
```
npm i
```
3. Start Development Server
```
npm run dev
```

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.17-blue)
![Firebase](https://img.shields.io/badge/Firebase-12.5.0-yellow)
![Netlify](https://img.shields.io/badge/Netlify-Deployment-green)


## 📞 Support

For support, email ashadulislam6156rs@gmail.com

---

⭐ If you find this project helpful, please give it a star!




