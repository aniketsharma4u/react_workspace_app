# MI Hub WorkSpace

A **robust coworking platform** built with Laravel (PHP) and Inertia.js, featuring a React frontend and powered by a MySQL database. This platform is designed to streamline management operations, offering flexibility and scalability for coworking spaces.

---

## ✨ Features

- **Unit Management**: Efficiently allocate and manage coworking units.
- **Tenant Records**: Keep track of tenant details with ease.
- **Rental Contracts**: Simplified handling of contracts and agreements.
- **Payment Management**: Track and manage payments with automated reminders.
- **Admin & Staff Roles**: Role-based access for various levels of permissions.
- **Shared Amenities**: Manage shared spaces and amenities effectively.
- **Agreement Workflows**: Streamlined processes for agreements and approvals.
- **Automated Reminders**: Never miss a deadline with timely alerts.

---

## 🚀 Tech Stack

### Backend:
- **Laravel 12**: A PHP framework for rapid development.
- **Inertia.js**: Bridges the gap between Laravel and React.

### Frontend:
- **React.js**: For a dynamic and responsive user interface.

### Database:
- **MySQL**: Robust and scalable database management.

---

## 📸 Screenshots

Here are some key features of the app in action:

### Dashboard
![Dashboard](images/dashboard.png)

### Unit Allocation
![Unit Allocation](images/unit-allocation.png)

### Tenant Management
![Tenant Management](images/tenant-management.png)

---

## 🛠️ Installation

### Prerequisites:
- **PHP >= 8.x**
- **Node.js >= 16.x**
- **Composer**
- **MySQL**

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/aniketsharma4u/react_workspace_app.git
   ```
2. Install dependencies:
   ```bash
   composer install
   npm install
   ```
3. Configure `.env` file:
   ```bash
   cp .env.example .env
   ```
   Update the database credentials and other environment variables.

4. Run migrations:
   ```bash
   php artisan migrate
   ```

5. Start the development server:
   ```bash
   php artisan serve
   npm run dev
   ```

6. Access the app at `http://localhost:8000`.

---

## 🔐 Role-Based Access

The platform supports role-based access for:
- **Admins**
- **Staff**
- **Tenants**

Each role has tailored permissions to ensure efficient management.

---

## 💡 About

This coworking management platform is designed to make day-to-day operations smooth and efficient. With features like automated reminders, agreement workflows, and shared amenity management, it simplifies complex tasks and ensures scalability.

---

## 📧 Contact

For inquiries or support, contact:
- **Aniket Sharma**
- [GitHub Profile](https://github.com/aniketsharma4u)
