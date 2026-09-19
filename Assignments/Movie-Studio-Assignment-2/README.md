# 🎬 Movie Studio

A modern web application built with **React** and **Tailwind CSS v4** that allows users to search, explore, and discover movies, TV shows, and series.

---

## 🚀 Features

- **Search & Discovery:** Instantly search through thousands of movies and TV shows.
- **Detailed Views:** Browse cast information, plot summaries, and streaming details.
- **Modern UI:** Styled using Tailwind CSS and Flowbite React for a responsive, sleek experience.
- **Seamless Navigation:** Client-side routing powered by React Router.

---

## 🛠️ Tech Stack

- **Frontend Library:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router v8](https://reactrouter.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [@tailwindcss/vite](https://tailwindcss.com/docs/vite)
- **UI Components:** [Flowbite React](https://flowbite-react.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

---

## 💻 Getting Started Locally

Follow these steps to run the project locally on your machine.

### **Prerequisites**

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.x or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

### **Installation & Setup**

1. **Clone the Repository**

   ```bash
   git clone --depth 1 --filter=blob:none --sparse https://github.com/byteFarhan/PH-Foundation-Program.git
   cd PH-Foundation-Program
   git sparse-checkout set Assignments/Movie-Studio-Assignment-2
   cd Assignments/Movie-Studio-Assignment-2
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

4. **View in Browser**
   Open your browser and navigate to `http://localhost:5173` (or the URL provided in your terminal).

---

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

If deploying to **Vercel**, ensure you include a `vercel.json` file in your root directory to prevent 404 errors on route refresh:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
