# SaveDeck

**English** · [한국어](#한국어)

Keep your game saves in sync across your devices — Windows PC, Steam Deck and more — for games that have **no Steam Cloud**.

## English

SaveDeck is a free desktop app that syncs game save files between your own devices.
Register a game by name on each device, and SaveDeck keeps the saves of games with the same name in sync.

### Features

- **LAN peer-to-peer sync** — devices on the same network find each other automatically and exchange saves directly. No account needed.
- **Optional Google Drive sync** — saves are stored as normal folders and files under a `SaveDeck` folder in *your* Drive (you can browse, download or delete them there). SaveDeck only requests the `drive.file` scope, so it can access only the files it created.
- **Safe by design** — SHA-256 verification, atomic replace, rolling `.bak` backups before every overwrite, and path-traversal protection.
- **Only changes are transferred** — unchanged files are skipped.
- **Conflict-aware** — if both sides changed with the same timestamp but different content, SaveDeck skips instead of overwriting.
- **Hidden folders supported** — the path picker shows hidden folders (handy on Steam Deck / Linux), and you can paste a path directly.

### How it works

1. Install SaveDeck on each device.
2. Add the same game name on every device and point it at that device's save path (paths may differ per device).
3. Press **Sync** (P2P peer or Google Drive).

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

- **같은 네트워크 P2P 동기화** — 같은 네트워크의 기기를 자동으로 찾아 세이브를 직접 주고받습니다. 계정이 필요 없습니다.
- **선택 기능: 구글 드라이브 동기화** — *본인* 드라이브의 `SaveDeck` 폴더에 일반 폴더와 파일 그대로 저장되어, 드라이브에서 직접 보고 내려받고 삭제할 수 있습니다. `drive.file` 권한만 요청하므로 SaveDeck이 만든 파일에만 접근합니다.
- **안전한 동작** — SHA-256 검증, 원자적 교체, 덮어쓰기 전 `.bak` 백업 순환, 경로 탈출 차단.
- **바뀐 파일만 전송** — 같은 파일은 건너뜁니다.
- **충돌 감지** — 수정 시각은 같은데 내용이 다르면 덮어쓰지 않고 건너뜁니다.
- **숨김 폴더 지원** — 경로 선택 창에 숨김 폴더가 보이고(스팀덱/리눅스에 유용), 경로를 직접 붙여넣을 수도 있습니다.

### 사용 방법

1. 각 기기에 SaveDeck을 설치합니다.
2. 모든 기기에서 **같은 게임 이름**으로 추가하고, 기기마다 그 기기의 세이브 경로를 지정합니다. (경로는 기기마다 달라도 됩니다.)
3. **동기화**를 누릅니다. (P2P 상대 또는 구글 드라이브)

### 소스로 실행

```powershell
pip install -r requirements.txt
python main.py
```

Windows 실행 파일 빌드: `.\build.ps1` (PyInstaller 필요)

### 개인정보

SaveDeck은 개발자 서버로 어떤 정보도 보내지 않습니다. [개인정보처리방침](https://aedurappa.github.io/SaveDeck/privacy.html)을 참고하세요.
