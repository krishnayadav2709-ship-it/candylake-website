# CandyLake Website (Frontend only)

## Requirements
- Windows 10/11
- Node.js 24 LTS (or newer supported LTS)
- VS Code (recommended)

## Run locally
1. Install Node.js LTS from https://nodejs.org/ (Windows Installer `.msi`). Keep the "Add to PATH" option enabled.
2. Restart PowerShell / VS Code after installation.
3. Verify:
   ```powershell
   node -v
   npm -v
   ```
4. Extract this ZIP, open the `candylake-nextjs` folder in VS Code.
5. In the VS Code terminal run:
   ```powershell
   npm install
   npm run dev
   ```
6. Open http://localhost:3000

## Add the real CandyLake logo
Copy the exact existing company logo image into:
`public/images/logo.png`
If your logo is JPG or WEBP, either convert it to PNG or change the `src` in `src/components/Navbar.tsx` and `src/components/Footer.tsx` to match the filename.
The code intentionally uses the existing logo asset; it does not redraw or replace the brand mark.

## Product images
Product pack images are stored in `public/images/products/` and referenced from `src/data/products.ts`.

## Contact form
The form is frontend-only. It validates required fields and displays a demo success message. It does NOT send email, save data, call an API, or write to Google Sheets. Google Sheets integration can be added later.

## Production build
```powershell
npm run build
npm start
```

## Notes
- No backend, database, Docker, or environment variables are required.
- The 3D hero is loaded only on the client and has a CSS fallback for reduced-motion users. Optional rotating hero videos can be added to `public/videos/`.
- Product list and company details are static frontend data. Confirm all contact details and product descriptions before publishing.
