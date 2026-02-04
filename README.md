
# N.I.E.S.A.T CDS Portal

Nigerian Innovation Engineers, Scientists and Applied Technologists - official MVP website for the NYSC Community Development Service (CDS) group.

## Features
- **Project Directory**: Showcase of engineering interventions.
- **Member Management**: List of Executives and General Members.
- **Resource Center**: Repository for learning materials.
- **Community Requests**: Form for the public to submit technological needs.
- **Staff Portal**: Admin dashboard protected by password (`milan000000`).
- **Dark Mode**: Support for system and manual dark mode preference.
- **LocalStorage Storage**: Purely frontend, no server required.

## Technical Details
- **Framework**: React 18+
- **Styling**: Tailwind CSS
- **Routing**: React Router (HashRouter for static hosting)
- **Database**: LocalStorage

## How to Edit Content
1. **Initial Data**: Modify `constants.tsx` to change default projects and members.
2. **Persistence**: The app automatically uses LocalStorage. To reset, clear your browser's site data.
3. **Staff Access**: Use the password `milan000000` on the `/staff` route.

## Deployment
### GitHub Pages
1. Push this code to a GitHub repository.
2. Go to Settings > Pages.
3. Select the branch (usually `main`) and the root directory.
4. Save, and your site will be live at `https://<username>.github.io/<repo-name>/`.

### Vercel
1. Connect your GitHub repository to Vercel.
2. Vercel will auto-detect the configuration and deploy.
3. Use the generated URL.
