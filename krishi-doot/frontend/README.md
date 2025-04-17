npm install

npm start

```
crop-recommendation-system/
├── backend/
│   ├── app.py                  # Flask API server
│   ├── model.pkl               # Your trained model
│   └── requirements.txt        # Python dependencies
│
└── frontend/
    ├── public/
    │   ├── index.html
    │   └── assets/
    │       └── images/
    │           └── hero-bg.jpg
    │
    ├── src/
    │   ├── App.js              # Main React component
    │   ├── index.js            # React entry point
    │   ├── components/         # Reusable components
    │   │   ├── Navbar.js
    │   │   ├── Footer.js
    │   │   └── Charts.js
    │   │
    │   ├── pages/              # Page components
    │   │   ├── Home.js
    │   │   ├── Predict.js
    │   │   ├── Dashboard.js
    │   │   └── About.js
    │   │
    │   └── styles/             # CSS styles
    │       └── index.css
    │
    └── package.json            # Node dependencies
```