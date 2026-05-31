# Portfolio Update Guide

## ✅ Changes Made:

### 1. **Projects Section URLs - FIXED** ✓
Updated in `src/sections/Projects.jsx`:

**Hunger Hive Project:**
- Live URL: `https://hunger-hive.vercel.app` ✓
- GitHub: `https://github.com/Lagadnakul/Food-Delivery` ✓

**Find My Driver Project:**
- Live URL: `https://car-drivers-frontend.vercel.app` ✓
- GitHub: `https://github.com/Lagadnakul/Car-Drivers` ✓

When you click the "Live Demo" button, it will open your deployed website in a new tab.

---

## 2. **Download CV Feature - IMPLEMENTED** ✓

Updated in `src/Components/AnimatedBorderButton.jsx`:

The button now:
- Automatically downloads your CV when clicked
- Downloads with filename: `Resume.pdf`
- Works on all browsers (Chrome, Firefox, Safari, Edge)
- No page refresh needed

---

## 📋 IMPORTANT: Add Your CV File

**YOUR ACTION REQUIRED:**

1. **Locate your CV PDF file** on your computer
2. **Copy it to:** `public/cv.pdf`
   - Path: `d:\VS CODE\PortFolio\RecoveredPortfolio\PORTFOLIO\public\cv.pdf`
3. **Make sure the filename is:** `cv.pdf` (lowercase)

### How to do it:
- **Option 1:** Copy & paste your resume PDF to the public folder and rename it to `cv.pdf`
- **Option 2:** Use Windows Explorer:
  1. Open: `d:\VS CODE\PortFolio\RecoveredPortfolio\PORTFOLIO\public\`
  2. Paste your CV PDF file there
  3. Rename it to `cv.pdf` (right-click → Rename)

---

## 🎯 How It Works Now:

### Live Demo Buttons:
```
User clicks "Live Demo" 
    ↓
Browser opens URL in new tab
    ↓
Your deployed website loads
```

### Download CV Button:
```
User clicks "Download CV"
    ↓
Browser triggers download
    ↓
File saved as "Resume.pdf"
```

---

## 📁 Final File Structure:
```
public/
  ├── cv.pdf                    ← ADD YOUR CV HERE
  ├── Hero.png
  ├── Profile.img.jpeg
  └── projects/
       ├── Proj-1F.D.png
       ├── Proj-2 C.D.png
       └── ...
```

---

## 🚀 Testing:

After adding your CV file:

1. Run your development server: `npm run dev`
2. Click "Download CV" button → Your resume downloads
3. Click "Live Demo" on Hunger Hive → Opens https://hunger-hive.vercel.app
4. Click "Live Demo" on Find My Driver → Opens https://car-drivers-frontend.vercel.app
5. Click GitHub buttons → Opens your GitHub repositories

---

## ✨ Code Changes Summary:

**Projects.jsx:**
- Added `https://` protocol to all URLs
- Fixed Hunger Hive live URL
- Fixed Find My Driver GitHub URL (removed `.git`)
- Changed second project live URL to correct domain

**AnimatedBorderButton.jsx:**
- Changed from `<a>` tag to `<button>` for better control
- Added `handleDownloadCV()` function
- Programmatically triggers file download
- Downloads file as "Resume.pdf"

---

**Everything is ready! Just add your CV file to the public folder.** 🎉
