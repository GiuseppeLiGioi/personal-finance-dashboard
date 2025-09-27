# 💰 Finance Dashboard

Finance Dashboard è un'applicazione web moderna e responsive per la gestione delle finanze personali. Fornisce una dashboard interattiva, gestione avanzata delle transazioni e impostazioni personalizzabili per un'esperienza utente professionale e intuitiva.

---

### 📸 Screenshot

- **Dashboard homePage**
 ![app-home](https://github.com/user-attachments/assets/363db1cd-e710-4b46-a63d-f72e92ba9a58)

- **Transazioni**
 ![app-transazioni](https://github.com/user-attachments/assets/6c3c9cc1-0baf-4b04-843e-d6fda3971129)
  
- **Impostazioni**
 ![app-settings](https://github.com/user-attachments/assets/2a1805c9-3d12-4a1a-be3f-a7ec265e70c9)

- **Modalità Dark**
 ![app-dark](https://github.com/user-attachments/assets/d5e71562-c0d4-4fc3-a401-d55e582f0e8c)



## 🚀 Caratteristiche principali

### 🏠 Dashboard (Home)
- Visualizzazione rapida di:
  - **Saldo attuale**
  - **Totale entrate**
  - **Totale uscite**
  - **Numero di transazioni**
- Grafici interattivi:
  - **Andamento saldo** 📈  
    ![Balance Chart](./assets/demo/balance-chart.gif)
  - **Grafico a torta Entrate vs Uscite** 🥧  
    ![Category Pie](./assets/demo/category-pie.gif)
  - **Heatmap giornaliera** 🔥  
    ![Daily Heatmap](./assets/demo/daily-heatmap.gif)
  - **Andamento mensile** 📊  
    ![Monthly Bar Chart](./assets/demo/monthly-bar-chart.gif)

### 💳 Transazioni
- **Aggiungi, modifica o elimina** transazioni.
- Tabella riepilogativa con filtro e ricerca:
  - Per **titolo** 📝
  - Per **tipo** (entrata/uscita) 💵
  - Per **intervallo di date** 📅
- Validazioni input complete per dati coerenti.

### ⚙️ Impostazioni
- Personalizzazione dell'account:
  - Nome utente
  - Email
  - Password (validazioni e conferme)
- Personalizzazione dell'app:
  - Tema: chiaro, scuro, automatico 🌗
  - Lingua: Italiano, Inglese, Spagnolo, Francese, Tedesco 🌍
- Gestione transazioni:
  - **Esporta CSV** pronto da inviare via email 📤
  - **Importa CSV** per aggiungere dati esistenti 📥
  - **Reset dati o form** 🔄
- Notifiche interattive e conferme per operazioni riuscite o errori ⚠️

---

## 🛠 Tecnologie Utilizzate

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-F7931E?style=for-the-badge&logo=chartdotjs&logoColor=white)
![PapaParse](https://img.shields.io/badge/PapaParse-FF5733?style=for-the-badge&logo=javascript&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

- **React** – Libreria per UI moderne e interattive
- **React Router DOM** – Navigazione tra pagine
- **React Toastify** – Notifiche personalizzate
- **Bootstrap 5** – Layout responsive
- **Chart.js & Recharts** – Grafici dinamici
- **Papaparse** – Import/Export CSV
- **Custom Hooks** – Persistenza locale (`useLocalStorage`)
- **React-Toastify** – Gestione alert moderni

---

## 📁 Struttura del progetto
Finance-Dashboard/

├── src/

│ ├── assets/

│ │ ├── Components/

│ │ │ ├── Header.jsx

│ │ │ ├── Sidebar.jsx

│ │ │ └── charts/  --> BalanceChart.jsx, CategoryPie.jsx, DailyHeatmap.jsx, MonthlyAmount.jsx

│ │ ├── Pages/

│ │ │ ├── Dashboard.jsx

│ │ │ ├── Transactions.jsx

│ │ │ └── Settings.jsx

│ │ └── utils/

│ │ ├── transactions.js

│ │ └── translations.js

│ ├── hooks/

│ │ └── useLocalStorage.js

│ └── App.jsx

├── public/

├── package.json

└── README.md

---

## 🎨 Personalizzazione

- **Tema automatico** che segue le preferenze del sistema operativo
- **Lingua multilingua**: Italiano 🇮🇹, Inglese 🇬🇧, Spagnolo 🇪🇸, Francese 🇫🇷, Tedesco 🇩🇪
- Notifiche **interattive** e posizionabili su schermo (top-right o bottom-center)
- Persistenza dati con **localStorage**

---

## ⚡ Installazione

1. Clona il repository:

git clone [https://github.com/tuo-username/finance-dashboard.git](https://github.com/GiuseppeLiGioi/personal-finance-dashboard)
Entra nella cartella del progetto:
cd finance-dashboard
Installa le dipendenze: npm install
Avvia l'app: npm run dev
L'app sarà disponibile su http://localhost:5173.

---


📬 Contatti

**Autore**: Giuseppe Li Gioi

**GitHub**: https://github.com/GiuseppeliGioi

**Email**: giuseppe.li.gioi.job@gmail.com

⭐ Se ti piace il progetto, lascia una stella su GitHub! ⭐

