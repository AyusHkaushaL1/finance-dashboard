Finance Dashboard

An interactive Finance Dashboard UI built with React + Vite + Tailwind CSS to track and visualize personal finances. Users can view overall balance, explore transactions, analyze spending patterns, and simulate role-based UI behavior.

Features
Dashboard Overview
Summary cards: Total Balance, Income, Expenses
Balance trend chart
Category-wise spending chart
Transactions
List of transactions with date, category, type, and amount
Search and filter functionality
Role-based UI Simulation
Viewer: can view data only
Admin: can add or edit transactions
Switch roles easily via a dropdown
Insights
Total expenses
Top spending category
Monthly comparison highlights
UI/UX
Fully responsive
Clean and readable design
Handles empty or no-data scenarios gracefully
Optional Enhancements
Dark mode toggle
Data persistence via localStorage
Smooth transitions and animations
Tech Stack
Frontend: React, Vite
Styling: Tailwind CSS
Charts: Chart.js / Recharts
State Management: React Context API
Utilities: Mock data, helper functions for formatting
Project Structure
src/
 ├─ assets/          
 ├─ components/      # UI components (charts, cards, lists)
 ├─ context/         # App context for state management
 ├─ data/            # Mock data
 ├─ pages/           # DashboardPage
 ├─ utils/           # Helper functions
 ├─ index.css
 ├─ main.jsx
Setup & Run
git clone https://github.com/AyusHkaushaL1/finance-dashboard.git
cd finance-dashboard
npm install
npm run dev

Open [http://localhost:5173](https://nimble-naiad-96f10c.netlify.app/)

