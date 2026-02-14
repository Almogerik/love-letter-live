# 🎵 Instructions pour la musique

## Pour ajouter votre chanson romantique :

1. **Choisissez votre chanson** - Trouvez une chanson romantique spéciale (MP3)

2. **Placez le fichier** :
   - Créez le dossier `/public/music/` s'il n'existe pas déjà
   - Renommez votre fichier audio en `romantic-song.mp3`
   - Placez-le dans `/public/music/romantic-song.mp3`

3. **Alternative** : Si vous voulez garder le nom original de votre chanson
   - Éditez le fichier `src/components/Slideshow.tsx`
   - Ligne ~55, changez `"/music/romantic-song.mp3"` par le nom de votre fichier
   - Exemple : `"/music/ma-chanson-damour.mp3"`

## 🎨 Personnalisation des photos

### Photos du diaporama
Placez vos 4 photos principales dans `/public/images/` :
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`

Et mettez à jour les textes dans `src/components/Slideshow.tsx` (lignes 8-27)

### Galerie photos complète
Placez toutes vos autres photos dans `/public/images/gallery/` :
- `photo5.jpg`
- `photo6.jpg`
- `photo7.jpg`
- ... (autant de photos que vous voulez!)

La galerie s'ouvrira à la fin après la lettre d'amour.

## 💌 Personnaliser la lettre d'amour

Éditez le fichier `src/components/LoveLetter.tsx` pour personnaliser :
- Le message d'amour
- Les mots doux
- La signature
- Tout ce qui vient du cœur ❤️

## 🎮 Fonctionnalités :

✨ **Pétales de roses** qui tombent doucement avec les cœurs flottants
🎵 **Musique romantique** - Bouton en haut à droite pour activer/désactiver
⬅️➡️ **Navigation manuelle** - Boutons pour avancer/reculer entre les photos
🎊 **Confettis** - Explosion de confettis sur le message final
💌 **Lettre d'amour** - Belle lettre personnalisable à la fin du diaporama
📸 **Galerie photos interactive** - Toutes vos photos dans une galerie cliquable avec lightbox
💝 **Animations préservées** - Effet Ken Burns et toutes les transitions originales

## 🚀 Lancer le projet :

```bash
npm run dev
```

Bonne Saint-Valentin ! ❤️
