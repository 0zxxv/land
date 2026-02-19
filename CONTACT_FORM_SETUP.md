# Contact form email setup

The contact form sends emails to **info@myntlabs.com** using [Resend](https://resend.com). To fix "Email is not configured":

## 1. Get a Resend API key

1. Go to **https://resend.com** and sign up (free tier is enough).
2. In the dashboard, open **API Keys** → **Create API Key**.
3. Copy the key (it starts with `re_`).

## 2. Add it to `.env.local`

1. In your project **root** (same folder as `package.json`), open or create **`.env.local`**.
2. Add this line (paste your real key after the `=`):

   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```

3. Save the file.
   - No quotes.
   - No spaces around `=`.
   - Nothing else on that line.

## 3. Restart the dev server

- Stop the current server (Ctrl+C in the terminal).
- Start it again:

  ```bash
  pnpm run dev
  ```

Environment variables are loaded only when the server starts, so a restart is required.

## 4. Test

Submit the contact form again. If the key is set correctly, you should see "Thank you. Your message has been sent." and the email will arrive at info@myntlabs.com.

---

**If it still doesn’t work**

- Confirm the file is named exactly **`.env.local`** (with the leading dot).
- Confirm it’s in the **project root**, not inside `app` or another folder.
- Confirm there are no typos in **RESEND_API_KEY**.
