# 🚀 DevStack — Technology Explorer

DevStack is a modern and interactive technology explorer built with React and TypeScript. It helps developers explore popular development technologies and build their own personalized development stack.

---

## 📑 Table of Contents

- [About the Project](#about-the-project)
- [Project Links](#project-links)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Installation & Setup](#installation--setup)
- [Folder Structure](#folder-structure)
- [How to Contribute](#how-to-contribute)
- [License](#license)
- [Contact](#contact)
- [React Questions & Answers](#react-questions--answers)

---

## 📌 About the Project

DevStack is a Technology Explorer application designed to help developers discover and organize technologies used in modern software development.

Users can explore different technologies, view their details, and add their favorite technologies to their personal development stack.

---

## 🔗 Project Links

- 🌐 Live Demo: https://your-live-site-url.com
- 💻 GitHub Repository: https://github.com/pavelsolutions/devstack

---

## 📖 Project Overview

DevStack provides a simple and user-friendly interface for exploring popular technologies such as React, TypeScript, JavaScript and more.

Each technology contains useful information including its category, description, rating, difficulty level and icon.

Users can select technologies and create their own development stack. They can also remove individual technologies or clear their entire stack.

---

## ✨ Key Features

### 🔍 1. Explore Technologies

Users can explore popular development technologies with:

- Technology name
- Category
- Description
- Rating
- Difficulty level
- Technology icon

### 🧩 2. Build Your Development Stack

Users can add their favorite technologies to a personal development stack and keep track of their selected technologies.

### 🗑️ 3. Manage Your Stack

Users can easily manage their selected technologies by:
- Add technology/stack in your Stack
- Removing individual technologies
- Removing all selected technologies
- Viewing the number of selected technologies
- Receiving toast notifications for different actions

---

## 🛠️ Tech Stack

The project was built using:

- ⚛️ React
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- 🔔 React Toastify
- ⚡ Vite

---

## 📦 Dependencies

Main dependencies used in this project:

- React
- React Toastify
- Tailwind CSS
- DaisyUI

---

## 🚀 Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/pavelsolutions/devstack.git
````

### 2. Navigate to the Project Directory

```bash
cd devstack
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will start on the local development server provided by Vite.

---

## 📁 Folder Structure

```text
devstack/
├── public/
│   └── data.json
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Banner.tsx
│   │   ├── Technology/
│   │   │   ├── Technologies.tsx
│   │   │   ├── TechnologyCard.tsx
│   │   │   └── DevStack.tsx
│   │   ├── Footer.tsx
│   │   └── LoadingSpinner.tsx
│   │
│   ├── types/
│   │   └── technology.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🤝 How to Contribute

Contributions are welcome.

To contribute to this project:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Push your branch.
6. Create a Pull Request.

Example:

```bash
git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```

---

## 📄 License

This project is created for educational and portfolio purposes.

---

## 📧 Contact

If you have any questions, suggestions, or feedback, feel free to contact me.

**Developer:** Pavel Ahammed

* GitHub: [https://github.com/pavelsolutions](https://github.com/pavelsolutions)
* Repository: [https://github.com/pavelsolutions/devstack](https://github.com/pavelsolutions/devstack)

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX stands for **JavaScript XML**. It allows us to write HTML-like syntax inside JavaScript or TypeScript. It is used in React to describe and build the user interface in a simple and readable way.

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component, and they are read-only. **State** is used to store and manage data that can change over time inside a component.

In this project, `technology` and `isSelected` are examples of props, while `selectedStack` is an example of state.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in a functional component. In this project, I used `useState` to store the selected technologies in the development stack.

    const [selectedStack, setSelectedStack] =
      useState<ITechnology[]>([]);

I also used `selectedStack.length` to display the total number of selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in React, such as API calls, event listeners, and timers.

However, I did **not** use `useEffect` in this project. Instead, I used an asynchronous `fetch()` function with React `Suspense` and the `use()` API to load the JSON data.

    const technologyFetch = async (): Promise<ITechnology[]> => {
      const response = await fetch("/data.json");
      const data = await response.json();

      return data;
    };

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` prop helps React identify each item in a list. It allows React to efficiently update, add, or remove items when the list changes.

In this project, I used the technology ID as the key:

    {technologies.map((technology) => (
      <TechnologyCard
        key={technology.id}
        technology={technology}
      />
    ))}

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition.

In this project, I used conditional rendering to show an empty stack message when no technology is selected and to show the `Remove All` button when technologies are available.

    {selectedStack.length === 0 ? (
      <p>Your stack is empty.</p>
    ) : (
      <button>Remove All</button>
    )}

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed from a parent component to a child component using **props**.

In this project, the `Technologies` component passes technology data, selection status, and a callback function to the `TechnologyCard` component.

    <TechnologyCard
      technology={technology}
      isSelected={isSelected}
      handleSelectedStack={handleSelectedStack}
    />

React follows a **unidirectional data flow**, so data normally flows from parent to child.

When the child needs to send information back to the parent, the parent passes a **callback function** as a prop. The child then calls that function.

    handleSelectedStack(technology);

This allows the parent to update its state based on an action performed in the child.



<p align="center">
  🚀 Built with React + TypeScript
</p>

