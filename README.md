# Psychotherapie Paternoster Website

Moderne, klientenzentrierte Website für die Psychotherapie-Praxis von Marc Andrea Paternoster.

## 🎨 Design

- **Farben**: Warmes Gold (#AB8443), Cremeweiß (#F3EAD6), Schwarz (#000000)
- **Schriften**: Comfortaa (Überschriften), Avenir Light (Fließtext)
- **Stil**: Warm, einladend, professionell mit sanften Animationen

## ✨ Features

- ✅ Hero-Bereich mit Hintergrundvideo (autoplay, loop, muted)
- ✅ Über-mich-Sektion mit persönlicher Vorstellung
- ✅ Therapieansatz und Spezialisierungen
- ✅ "Was passiert in der ersten Stunde?" Infografik
- ✅ FAQ-Bereich mit Accordion-Funktion
- ✅ Online-Terminbuchung (Platzhalter für Calendly/Jameda/Shore)
- ✅ Download-Bereich (Achtsamkeitsübung, Notfall-Guide)
- ✅ Kontakt-Sektion mit Adresse und Karte (Platzhalter)
- ✅ Responsive Design für alle Geräte
- ✅ Klientenzentrierte Sprache ohne Fachjargon

## 🚀 Schnellstart

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser.

## 📁 Projektstruktur

```
paternoster/
├── app/
│   ├── layout.tsx          # Root Layout mit Fonts und Metadata
│   ├── page.tsx            # Hauptseite
│   └── globals.css         # Globale Styles
├── components/
│   ├── Header.tsx          # Navigation
│   ├── HeroSection.tsx     # Hero mit Video
│   ├── AboutSection.tsx    # Über mich
│   ├── TherapyApproach.tsx # Therapieansatz
│   ├── FirstSessionInfo.tsx # Erstgespräch-Info
│   ├── FAQSection.tsx      # FAQ Accordion
│   ├── BookingSection.tsx  # Terminbuchung
│   ├── DownloadSection.tsx # Downloads
│   ├── ContactSection.tsx  # Kontakt
│   └── Footer.tsx          # Footer
├── public/
│   ├── videos/
│   │   └── hero-background.mp4  # Hintergrundvideo
│   └── downloads/
│       ├── achtsamkeitsuebung.html
│       └── notfall-guide.html
└── package.json
```

## 🎥 Video

Das Hintergrundvideo befindet sich in `public/videos/hero-background.mp4`. 
- Autoplay: ✅
- Loop: ✅
- Muted: ✅
- Größe: ~21MB (kann für Production optimiert werden)

## 📝 Nächste Schritte

### Inhalte anpassen
1. **Kontaktdaten**: Aktualisieren Sie Telefon, E-Mail und Adresse in:
   - `components/BookingSection.tsx`
   - `components/ContactSection.tsx`
   - `components/Footer.tsx`

2. **Persönliche Texte**: Passen Sie die Inhalte an Ihre Praxis an:
   - `components/AboutSection.tsx` - Ihre Qualifikationen und Ansatz
   - `components/TherapyApproach.tsx` - Ihre Spezialisierungen
   - `components/FAQSection.tsx` - Ihre spezifischen Antworten

3. **Profilfoto**: Ersetzen Sie den Platzhalter in `AboutSection.tsx`

### Integrationen

#### Online-Terminbuchung
In `components/BookingSection.tsx` können Sie integrieren:
- **Calendly**: Embed-Code einfügen
- **Jameda**: Widget-Code einfügen
- **Shore**: Booking-Link einfügen

#### Google Maps
In `components/ContactSection.tsx` können Sie eine Google Maps Karte einbetten.

### Downloads
Die HTML-Dateien in `public/downloads/` können Sie:
- Als PDF exportieren (z.B. mit Browser "Drucken → Als PDF speichern")
- Mit Ihren eigenen PDFs ersetzen
- Inhaltlich anpassen

## 🎨 Farben anpassen

Farben werden in `tailwind.config.ts` definiert:

```typescript
colors: {
  primary: "#AB8443",    // Hauptfarbe (Gold)
  accent: "#F3EAD6",     // Akzentfarbe (Creme)
  background: "#FFFFFF", // Hintergrund
  text: "#000000",       // Text
}
```

## 🔧 Build für Production

```bash
# Production Build erstellen
npm run build

# Production Server starten
npm start
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Browser-Unterstützung

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)

## 📄 Lizenz

Privates Projekt für Psychotherapie Paternoster.

---

**Entwickelt mit ❤️ für Ihre Praxis**
