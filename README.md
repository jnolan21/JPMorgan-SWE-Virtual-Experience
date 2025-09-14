# JPMorgan Chase Software Engineering Virtual Experience

This repository contains my consolidated solutions for the **JPMorgan Chase Software Engineering Virtual Experience Program** hosted by Forage.  
The program simulates real-world software engineering tasks in the technology team at JPMorgan Chase.

---

## 📂 Modules Overview

### **Module 1 – Stock Price Data Feed**
- Interface with a stock price data feed and set up the system for analysis.  
- Implemented:
  - `getRatio`, `getDataPoint`, and `main` functions.  
  - Bonus: Added unit tests and edge case handling.  
- Goal: Process data for stocks A and B to determine when trades should occur.

---

### **Module 2 – Data Visualization Setup**
- Integrated JPMorgan’s open-source **Perspective** library for live data visualization.  
- Implemented:
  - Fixed duplicate entries when streaming new data.  
  - Enabled continuous data requests every 100ms.  
  - Configured Perspective to display historical `ask_price` of stock ABC as a Y line chart.  

---

### **Module 3 – Trader Dashboard Enhancements**
- Enhanced the live trader dashboard with real-time visualizations.  
- Implemented:
  - Tracking and displaying the ratio between two stock prices over time.  
  - Displaying historical upper and lower bounds of the ratio.  
  - Triggering alerts (red lines) when ratio crosses defined bounds.  

---

## 🚀 Setup & Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/JPMorgan-SWE-Virtual-Experience.git
