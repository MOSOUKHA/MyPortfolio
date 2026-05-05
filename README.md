# Portfolio Oukha Mostafa — React + Vite

## 🚀 Comment lancer le projet sur ton PC

### Prérequis
- Node.js installé (version 18 ou plus) → https://nodejs.org
- Un terminal (CMD, PowerShell, ou Terminal)

### Étapes

**1. Décompresse le projet**
Extrais le fichier ZIP dans un dossier de ton choix.

**2. Ouvre le terminal dans le dossier**
```bash
cd portfolio-oukha
```

**3. Installe les dépendances**
```bash
npm install
```

**4. Lance le serveur de développement**
```bash
npm run dev
```

**5. Ouvre dans le navigateur**
Visite : http://localhost:5173

---

## 🖼️ Ajouter ta photo de profil

1. Place ta photo dans `public/images/ma-photo.jpg`
2. Dans `src/components/Hero.jsx`, commente la ligne `<div className="profile-placeholder">` et décommente la ligne avec `<img src="/images/ma-photo.jpg" />`

## 🖼️ Remplacer les images des projets

Dans `src/components/Projects.jsx`, chaque projet a un champ `image`.
Remplace les URLs par tes propres captures d'écran :
1. Place tes images dans `public/images/`
2. Modifie le champ : `image: '/images/nom-de-ton-image.png'`

## 🖼️ Remplacer les images des clubs

Dans `src/components/Experience.jsx`, même principe.
Place tes photos dans `public/images/` et mets le chemin.

## 📦 Build pour la production

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`.
