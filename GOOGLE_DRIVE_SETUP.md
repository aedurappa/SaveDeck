# SaveDeck Google Drive Setup Guide

**English** · [한국어](GOOGLE_DRIVE_SETUP.ko.md)

To use Google Drive sync in SaveDeck, you create a **Client ID** and **Client secret** in Google Cloud once.
These values only tell Google "SaveDeck may access my Drive". They are not a key to the rest of your Drive.

- **Cost**: free. No payment card is needed.
- **Time**: about 15–20 minutes, once.
- **You need**: one Google account.

> If you see "Start free trial" or "Link a billing account", ignore it. It is not needed for this.
> If a screen asks for a card, stop there.

The console may show menu names in your language. This guide uses the English names, with the Korean names in parentheses where helpful.

---

## Contents

1. [Create a project](#1-create-a-project)
2. [Enable the Google Drive API](#2-enable-the-google-drive-api)
3. [Get started with Google Auth Platform](#3-get-started-with-google-auth-platform)
4. [Add the data access scope](#4-add-the-data-access-scope)
5. [Add a test user](#5-add-a-test-user)
6. [Create a client](#6-create-a-client)
7. [Connect SaveDeck](#7-connect-savedeck)
8. [Use it on other devices (Steam Deck, etc.)](#8-use-it-on-other-devices-steam-deck-etc)
9. [Limits when the app is not published](#limits-when-the-app-is-not-published)
10. [Publishing the app (branding, optional)](#publishing-the-app-branding-optional)
11. [Troubleshooting](#troubleshooting)

---

## 1. Create a project

1. Open <https://console.cloud.google.com/projectcreate> and sign in.
2. On **New Project**:
   - **Project name**: `SaveDeck` (any name is fine)
   - **Parent resource / Location**: leave it as **No organization**.
3. Click **Create**.
4. Check that the project picker at the top left shows `SaveDeck`. If another project is shown, click it and pick `SaveDeck`.

> Do every following step with this project selected.

## 2. Enable the Google Drive API

1. Open <https://console.cloud.google.com/apis/library/drive.googleapis.com>
   (or go to **APIs & Services → Library** and search for `Google Drive API`).
2. Click **Enable**.
3. When **API Enabled** appears next to the button, you are done.

## 3. Get started with Google Auth Platform

The old "OAuth consent screen" is now called **Google Auth Platform**.

1. Open <https://console.cloud.google.com/auth/overview>.
2. Under "Google Auth Platform not configured yet", click **Get started**.
3. Fill in each step:
   - **App information**: App name `SaveDeck`, User support email = your email.
   - **Audience**: choose **External**. (Personal Google accounts cannot choose Internal.)
   - **Contact information**: an email for Google's notices about the project.
   - **Finish**: agree to the Google API Services User Data Policy.
4. Click **Create**.

The left menu now shows **Overview, Branding, Audience, Clients, Data Access**, and more.

## 4. Add the data access scope

SaveDeck asks for one permission: `drive.file`. It is the smallest Drive permission and only reaches **files and folders that SaveDeck itself created**.

1. Click **Data Access** in the left menu.
2. Click **Add or remove scopes**.
3. In the panel, find and check this row (typing `drive.file` in the filter box helps):
   - API: **Google Drive API**
   - Scope: **`.../auth/drive.file`**
   - Description: "See, edit, create, and delete only the specific Google Drive files you use with this app"
4. Click **Update** at the bottom of the panel, then **Save** at the bottom of the page.
5. You are done when `.../auth/drive.file` is listed under **Your non-sensitive scopes**.

> Do not choose `.../auth/drive` or `.../auth/drive.readonly`. They are restricted scopes that need a separate Google review, and SaveDeck does not use them.

## 5. Add a test user

While the app is not published ("Testing"), **only test users can sign in**.

1. Click **Audience** in the left menu.
2. Under **Test users**, click **+ Add users**.
3. Enter the **Google email you will sign in with** and save.

> If you publish the app, this step is not needed. See [Publishing the app](#publishing-the-app-branding-optional).

## 6. Create a client

1. Click **Clients** in the left menu.
2. Click **+ Create client**. The "Create OAuth client ID" screen opens.
3. For **Application type**, choose **Desktop app**.
4. **Name**: `SaveDeck` (any name is fine).
5. Click **Create**.
6. Copy the two values shown:
   - **Client ID**: looks like `numbers-letters.apps.googleusercontent.com`
   - **Client secret**

> The secret may only be shown at creation time. Download the JSON or copy it right away.
> If you lose it, open the `SaveDeck` client in **Clients** and add a new secret.

## 7. Connect SaveDeck

1. In SaveDeck, click **구글 드라이브 연결** (Google Drive connect) at the top right.
2. Paste the **Client ID** and **Client secret**, then click **구글 로그인** (Google sign-in).
3. A browser opens:
   1. Choose the Google account you added as a test user.
   2. On **"Google hasn't verified this app"**, click **Continue** (or **Advanced → Go to SaveDeck**). It appears because you made the app yourself.
   3. On the permission screen, click **Continue**.
   4. When "SaveDeck 로그인 완료" (sign-in complete) appears, close the browser tab.
4. The top of SaveDeck shows **구글 드라이브: 연결됨** (Google Drive: connected).

Now select a game and click **구글 드라이브 → 선택 게임 동기화** (sync selected game). A `SaveDeck/<game name>/` folder is created in your Drive with the save files as they are.

## 8. Use it on other devices (Steam Deck, etc.)

- On other devices, enter the **same Client ID and secret** and sign in with the **same Google account**. You do not need a new client.
- Register each game with the **same name** on every device so they share the same cloud folder. The save path may differ per device.
- Settings location:
  - Windows: `settings.json` and `gdrive_token.json` next to `SaveDeck.exe`
  - Steam Deck / Linux: `~/.config/SaveDeck/`
  - Copying these two files to another device skips typing and signing in. `gdrive_token.json` holds your sign-in. Do not share it.

---

## Limits when the app is not published

After steps 1–7 the app is in **"Testing"**. That is fine for personal use, with these limits:

| Item | Details |
|---|---|
| **Sign in again every 7 days** | In Testing, an authorization expires 7 days after consent. When SaveDeck's log says "로그인 정보 갱신 실패" (refresh failed), click **구글 드라이브 연결 → 구글 로그인** again. |
| **Test users only** | Only accounts added in step 5 can sign in (up to 100). |
| **Unverified app screen** | "Google hasn't verified this app" appears at every sign-in. |

Things that are **not** a problem:

- **Cost**: standard Drive API use is free.
- **Usage quotas**: the per-minute quotas are far above what save syncing uses.
- **"100 users before verification" cap**: applies only to apps using unapproved sensitive or restricted scopes. Google classifies `drive.file` as **non-sensitive**.
- **Number of devices**: one account can hold up to 100 sign-ins per client. A few devices are fine.

## Publishing the app (branding, optional)

If signing in every 7 days is annoying, publish the app to **"In production"**. Then sign-ins do not expire, except after long disuse (about 6 months) or if you revoke access. Test users are no longer needed.

Publishing needs a **home page URL** and a **privacy policy URL**. Without them, the **Publish app** button stays disabled. If you do not have your own pages, you can use SaveDeck's official pages.

1. Click **Branding** in the left menu.
2. Under **App domain**, enter:
   - Application home page: `https://aedurappa.github.io/SaveDeck/`
   - Application privacy policy link: `https://aedurappa.github.io/SaveDeck/privacy.html`
3. "Missing domain: aedurappa.github.io" appears under **Authorized domains**. Click **+ Add domain** and enter `aedurappa.github.io`.
4. Click **Save** at the bottom.
5. In **Audience**, click **Publish app** and confirm.
6. When the status shows **In production**, sign in to SaveDeck once more.

What remains after publishing:

- **The "unverified app" screen still appears.** To remove it you need Google's **brand verification**, which requires a home page and privacy policy on a **domain you can prove you own** (verified in Google Search Console). Third-party platform addresses like `github.io` may not be provable.
- `drive.file` is non-sensitive, so publishing without brand verification does **not** put a user cap on the app (according to Google's docs).

> Note: saving these SaveDeck page URLs and enabling the Publish button was confirmed on the developer's own project. Google's screens and policies may change.

## Troubleshooting

| Symptom | Fix |
|---|---|
| "Access blocked" or "app is in testing" on sign-in | Make sure the account is added as a test user (step 5). |
| SaveDeck log says "로그인 정보 갱신 실패" | The 7-day Testing expiry. Sign in again or publish the app. |
| "토큰 발급 실패: invalid_client" | Wrong Client ID or secret. Paste them again without spaces. |
| "드라이브 오류 403 ... API has not been used" | The Drive API (step 2) is not enabled, or enabled in another project. |
| The browser does not open | Check that a firewall is not blocking SaveDeck's local connection (127.0.0.1). Finish sign-in within 3 minutes. |
| You want to delete the cloud files | Delete the `SaveDeck` folder in Drive, or use SaveDeck's **클라우드에서 삭제** (delete from cloud). Revoke access at <https://myaccount.google.com/permissions>. |

---

### Google documentation used

- [Manage App Audience (test users, 7-day expiry, 100-user cap)](https://support.google.com/cloud/answer/15549945?hl=en)
- [Using OAuth 2.0 to Access Google APIs (refresh token expiry)](https://developers.google.com/identity/protocols/oauth2)
- [Choose Google Drive API scopes (drive.file classification)](https://developers.google.com/workspace/drive/api/guides/api-specific-auth)
- [Unverified apps (unverified screen, user cap)](https://support.google.com/cloud/answer/7454865?hl=en)
- [Google Drive API usage limits (quotas, free)](https://developers.google.com/workspace/drive/api/guides/limits)
- [App Homepage (home page requirements)](https://support.google.com/cloud/answer/13807376)
- [Submit for brand verification](https://developers.google.com/identity/protocols/oauth2/production-readiness/brand-verification)

Google's screens and policies may change. This guide reflects the console as of November 2026.
