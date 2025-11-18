# GitHub Backend Setup for Bible Notes

## How It Works

The notes system uses your GitHub repository as a backend database:
- **Notes are stored in**: `notes.json` file
- **Everyone can READ notes** (no authentication needed)
- **Only you can WRITE notes** (requires GitHub Personal Access Token)

## Setup Instructions

### Step 1: Create a GitHub Personal Access Token

1. Go to GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
   - Direct link: https://github.com/settings/tokens

2. Click **"Generate new token (classic)"**

3. Configure the token:
   - **Note**: "My Bible Notes Access"
   - **Expiration**: Choose your preference (90 days, 1 year, or no expiration)
   - **Scopes**: Check ✓ **`repo`** (Full control of private repositories)

4. Click **"Generate token"**

5. **IMPORTANT**: Copy the token immediately (you won't see it again!)
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 2: Add Token to Your Website

**IMPORTANT: The token is now stored in your browser, NOT in the code!**

1. Open your website

2. Try to add a note to any verse

3. A prompt will appear asking for your GitHub token

4. Paste your token (starts with `ghp_...`) and click OK

5. Your token is now stored in browser localStorage (locally on your device only)

**SECURITY NOTES**: 
   - ✓ Token is stored only in YOUR browser
   - ✓ Token is NOT committed to GitHub
   - ✓ Each person who wants to add notes needs their own token
   - ✓ Visitors can still READ all notes without any token

### Step 3: Test It

1. Open your website
2. Add a note to any verse
3. Check if `notes.json` file is updated in your GitHub repository
4. Open the website in a different browser/device - you should see the same notes!

## How It Works for Users

### For Visitors (Without Token)
- ✓ Can READ all notes
- ✗ Cannot ADD/EDIT/DELETE notes
- Notes load automatically from GitHub

### For You (With Token)
- ✓ Can READ all notes
- ✓ Can ADD notes
- ✓ Can EDIT notes
- ✓ Can DELETE notes
- Changes sync to GitHub and visible to everyone

## Alternative: GitHub Actions (More Secure)

For public deployment, you can use GitHub Actions to handle note updates:

1. Store token in GitHub Secrets (Settings → Secrets → Actions)
2. Create a GitHub Action workflow that:
   - Receives note data via repository dispatch event
   - Updates `notes.json` with the token from secrets
   - Commits the changes

This keeps your token private even on public deployments.

## Troubleshooting

**"GitHub token not configured" error**
- Make sure you added the token to `config.js`
- Check that there are no extra spaces or quotes

**"Failed to save to GitHub" error**
- Verify your token has `repo` scope
- Check if token has expired
- Ensure repository name and owner are correct in `config.js`

**Notes not loading**
- Check browser console for errors
- Verify `notes.json` exists in your repository
- Try refreshing the page (Ctrl+F5)

## Security Best Practices

1. **Use token expiration**: Set tokens to expire after a reasonable time
2. **Minimal permissions**: Only grant `repo` scope (or even just `public_repo` for public repositories)
3. **Rotate tokens**: Change your token periodically
4. **Monitor usage**: Check GitHub → Settings → Developer settings → Personal access tokens for token activity
5. **Revoke if compromised**: If token is leaked, immediately revoke it from GitHub settings

## Need Help?

- Check GitHub documentation: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
- Check browser console for error messages
- Verify `notes.json` file structure in your repository