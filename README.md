# SaveDeck

**English** · [한국어](#한국어)

Keep your game saves in sync across your devices — Windows PC, Steam Deck and more — for games that have **no Steam Cloud**.

## English

SaveDeck is a free desktop app that syncs game save files between your own devices.
Register a game by name on each device, and SaveDeck keeps the saves of games with the same name in sync.

### Features

- **Works on your home network** — your devices find each other automatically and swap saves directly. No account needed.
- **Optional Google Drive sync** — saves go into a `SaveDeck` folder in *your own* Google Drive as ordinary folders and files, so you can open, download or delete them there. SaveDeck can only touch the files it created, never the rest of your Drive.
- **Your old save is never lost** — before a save file is replaced, SaveDeck keeps a backup copy of the old one (`.bak` files; you choose how many).
- **Fast** — only the files that changed are sent.
- **Won't overwrite blindly** — if both devices changed the save and SaveDeck can't tell which is newer, it leaves both untouched and tells you.
- **Catches broken transfers** — every received file is checked to be complete before it replaces anything.
- **Steam Deck friendly** — the folder picker shows hidden folders, and you can also paste a path.

### How it works

1. Install SaveDeck on each device.
2. Add the same game name on every device and point it at that device's save path (paths may differ per device).
3. Press **Sync** (to another device on your network, or to Google Drive).

### Google Drive setup

Google Drive sync needs a free Client ID that you create once in Google Cloud.
Follow the step-by-step guide: **[Google Drive Setup Guide](GOOGLE_DRIVE_SETUP.md)**.

It covers creating the project, enabling the Drive API, the data access scope, test users, creating the client, publishing the app (optional), and the limits when the app is not published (for example, signing in again every 7 days).

### Run from source

```powershell
pip install -r requirements.txt
python main.py
```

Build a Windows executable: `.\build.ps1` (requires PyInstaller).

### Privacy

SaveDeck sends nothing to the developer's servers. See the [Privacy Policy](https://aedurappa.github.io/SaveDeck/privacy.html).

---

## 한국어

**스팀 클라우드가 없는 게임**의 세이브를 Windows PC, 스팀덱 등 여러 기기에서 이어서 하게 해 주는 무료 프로그램입니다.
각 기기에 같은 이름으로 게임을 등록하면, 이름이 같은 게임의 세이브를 서로 맞춰 줍니다.

### 기능

- **집 네트워크에서 바로 동기화** — 같은 네트워크에 있는 내 기기를 자동으로 찾아서 세이브를 직접 주고받습니다. 계정이 필요 없습니다.
- **선택 기능: 구글 드라이브** — 내 드라이브의 `SaveDeck` 폴더에 일반 폴더와 파일 그대로 저장돼서, 드라이브에서 직접 열어 보고 내려받고 지울 수 있습니다. SaveDeck은 자기가 만든 파일에만 손댈 수 있고, 드라이브의 다른 파일은 건드리지 못합니다.
- **기존 세이브가 사라지지 않습니다** — 세이브 파일을 바꾸기 전에 이전 파일을 자동으로 백업해 둡니다. (`.bak` 파일이며, 보관 개수는 직접 정할 수 있습니다.)
- **빠르게** — 바뀐 파일만 보냅니다.
- **함부로 덮어쓰지 않습니다** — 양쪽 기기에서 모두 바뀌어서 어느 쪽이 최신인지 알 수 없으면, 아무것도 건드리지 않고 알려 줍니다.
- **전송 오류를 감지합니다** — 받은 파일이 온전한지 확인한 뒤에만 교체합니다.
- **스팀덱에서도 편하게** — 폴더 선택 창에 숨김 폴더가 보이고, 경로를 붙여넣을 수도 있습니다.

### 사용 방법

1. 각 기기에 SaveDeck을 설치합니다.
2. 모든 기기에서 **같은 게임 이름**으로 추가하고, 기기마다 그 기기의 세이브 경로를 지정합니다. (경로는 기기마다 달라도 됩니다.)
3. **동기화**를 누릅니다. (같은 네트워크의 다른 기기 또는 구글 드라이브)

### 구글 드라이브 설정

구글 드라이브 동기화를 쓰려면 Google Cloud에서 무료 클라이언트 ID를 한 번 발급받아야 합니다.
단계별 안내는 **[구글 드라이브 설정 가이드](GOOGLE_DRIVE_SETUP.ko.md)** 를 참고해 주시기 바랍니다.

프로젝트 만들기, Drive API 사용 설정, 데이터 액세스 범위, 테스트 사용자, 클라이언트 만들기, 앱 게시(선택 사항), 그리고 게시하지 않았을 때의 제한(7일마다 다시 로그인 등)을 다룹니다.

### 소스로 실행

```powershell
pip install -r requirements.txt
python main.py
```

Windows 실행 파일 빌드: `.\build.ps1` (PyInstaller 필요)

### 개인정보

SaveDeck은 개발자 서버로 어떤 정보도 보내지 않습니다. [개인정보처리방침](https://aedurappa.github.io/SaveDeck/privacy.html)을 참고해 주시기 바랍니다.
