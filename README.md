
# 🌐 MultiConnect – Bridging Talent with Opportunity

**MultiConnect** is a **full-stack role-based career platform** designed to connect **students, recruiters, and admins** seamlessly. It simplifies **internships, job applications, and recruitment management** with **secure authentication, resume uploads, instant notifications, and analytics dashboards**.

---

## 🎯 Objective

To create a **centralized platform** where students can **showcase their skills**, recruiters can **discover top talent**, and admins can **manage the ecosystem** effectively — all in a **secure, real-time environment**.

---

## 🔥 Core Features

* 🔐 **Role-Based Login** → Students, Recruiters & Admins
* 📄 **Resume Upload & Preview** with validation
* 📬 **Instant Alerts & Notifications** for job updates & application status
* 👥 **Student Dashboard** → Profile management, applications, progress tracking
* 💼 **Recruiter Dashboard** → Post jobs, filter applicants, shortlist candidates
* 📊 **Admin Dashboard** → Monitor activity, analytics, and moderation
* 🗂️ **Filters & Bookmarks** → Easy job search & favorites
* 🎥 **Interactive UI with Animations** powered by **Framer Motion** & **Particles**

---

## 🧱 Tech Stack

| Layer    | Technology                                         |
| -------- | -------------------------------------------------- |
| Frontend | React.js, Framer Motion, React Router, React Icons |
| Backend  | Spring boot                                |
| Database | Mysql                                 |
| Realtime | Socket.IO (planned)                                |
| Auth     | JWT, bcrypt                                        |
| Styling  | TailwindCSS / CSS                                  |
| Tools    | Git, Postman, VSCode                               |

---

## 🧪 How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone [https://github.com/your-username/MultiConnect.git](https://github.com/07Mkmohan/MultiPlatform.git)
```

### 2️⃣ Install Backend

```bash
cd backend
npm install
npm start
```

### 3️⃣ Install Frontend

```bash
cd ../frontend
npm install
npm run dev
```

### 4️⃣ Setup Environment Variables

Create a `.env` file in the backend folder with:

```env
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASS}
PORT=5000
```

---

## 🚀 Planned Enhancements

✅ **AI-Powered Resume Screening** for recruiters
✅ **WhatsApp/Email Bot** for real-time alerts
✅ **Advanced Analytics** for admins (engagement, hiring metrics)
✅ **Gamified Student Profiles** with skill badges

---

💡 *MultiConnect empowers students to launch their careers, recruiters to discover talent, and admins to manage everything — all from one platform.
