* {
    box- sizing: border - box;
}

body {
    margin: 0;
    font - family: Arial, Helvetica, sans - serif;
    background - color: #0e0e13;
    color: #ffffff;
    line - height: 1.6;
}

.header {
    padding: 60px 20px;
    text - align: center;
    background: linear - gradient(135deg, #4f46e5, #1e1b4b);
}

.header h1 {
    margin: 0;
    font - size: 3rem;
}

.container {
    max - width: 900px;
    margin: auto;
    padding: 40px 20px;
}

h2 {
    color: #a5b4fc;
}

.games {
    display: grid;
    grid - template - columns: repeat(auto - fit, minmax(220px, 1fr));
    gap: 20px;
}

.game - card {
    background - color: #1a1a25;
    padding: 20px;
    border - radius: 12px;
    transition: transform 0.2s;
}

.game - card:hover {
    transform: translateY(-5px);
}

.footer {
    text - align: center;
    padding: 20px;
    background - color: #0b0b10;
    opacity: 0.7;
}

a {
    color: #a5b4fc;
    text - decoration: none;
}
