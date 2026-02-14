# ❤️ Guide de Personnalisation - Surprise Saint-Valentin

## 📝 Personnaliser la Lettre d'Amour

Ouvrez [src/components/LoveLetter.tsx](src/components/LoveLetter.tsx) et modifiez :

**Lignes 42-43** : Salutation
```tsx
<p className="italic">
  Ma chérie / Mon chéri,  ← Changez ici
</p>
```

**Lignes 45-72** : Le contenu de votre lettre
- Écrivez vos propres mots d'amour
- Ajoutez ou supprimez des paragraphes
- Exprimez ce que vous ressentez vraiment

**Lignes 79-80** : La signature
```tsx
Avec tout mon amour,
Pour toujours tien/tienne ❤️  ← Personnalisez votre signature
```

## 📸 Ajouter vos Photos

### 1. Photos du Diaporama (4 photos principales)
- Placez 4 photos dans `/public/images/`
- Nommez-les : `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`
- Ces photos s'affichent avec l'effet Ken Burns au début

### 2. Textes du Diaporama
Ouvrez [src/components/Slideshow.tsx](src/components/Slideshow.tsx) (lignes 10-25) :
```tsx
const slides = [
  {
    image: "/images/photo1.jpg",
    text: "Votre premier texte romantique...",  ← Personnalisez
  },
  // ... etc
];
```

### 3. Galerie Photos Complète
- Placez autant de photos que vous voulez dans `/public/images/gallery/`
- Nommez-les : `photo5.jpg`, `photo6.jpg`, `photo7.jpg`, etc.
- Mettez à jour la liste dans [src/components/PhotoGallery.tsx](src/components/PhotoGallery.tsx) (lignes 8-18) :

```tsx
const galleryPhotos = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/gallery/photo5.jpg",  ← Ajoutez vos photos
  "/images/gallery/photo6.jpg",
  // ... ajoutez toutes vos photos
];
```

## 🎵 Ajouter votre Musique

1. Placez votre fichier MP3 dans `/public/music/`
2. Renommez-le en `romantic-song.mp3`
3. ✨ C'est tout ! La musique se lancera automatiquement

**Alternative** : Garder le nom original
- Éditez [src/components/Slideshow.tsx](src/components/Slideshow.tsx) ligne ~75
- Changez `"/music/romantic-song.mp3"` par votre nom de fichier

## 🎨 Personnalisation Avancée

### Changer les couleurs
Éditez [src/index.css](src/index.css) (lignes 8-44) pour modifier :
- `--primary` : Couleur principale (rose)
- `--gold-warm` : Couleur dorée
- Les autres couleurs du thème

### Modifier les animations
Dans [src/components/](/src/components/) vous pouvez ajuster :
- **OpeningScreen.tsx** : Écran d'accueil
- **FloatingHearts.tsx** : Cœurs flottants
- **RosePetals.tsx** : Pétales de roses
- **Confetti.tsx** : Confettis

### Changer les délais
Dans [src/components/Slideshow.tsx](src/components/Slideshow.tsx) :
- Ligne 27 : `const INTERVAL = 4000;` ← Temps entre les slides (millisecondes)

## 🚀 Voir le Résultat

```bash
npm run dev
```

Ouvrez http://localhost:5173 dans votre navigateur

## 💝 Checklist Finale

- [ ] J'ai ajouté mes 4 photos principales dans `/public/images/`
- [ ] J'ai personnalisé les textes du diaporama
- [ ] J'ai ajouté toutes mes photos dans `/public/images/gallery/`
- [ ] J'ai mis à jour la liste dans PhotoGallery.tsx
- [ ] J'ai écrit ma lettre d'amour personnalisée dans LoveLetter.tsx
- [ ] J'ai ajouté ma musique romantique dans `/public/music/`
- [ ] J'ai testé l'application avec `npm run dev`

Bonne Saint-Valentin ! ❤️✨
