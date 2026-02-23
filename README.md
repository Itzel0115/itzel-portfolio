# Yi-Chen Hsiao (Itzel) — Portfolio

個人作品集網站，使用 React + Vite + Tailwind CSS 建置。

## 本地開發

```bash
npm install
npm run dev
```

瀏覽 [http://localhost:5173](http://localhost:5173)。

## 建置

- **一般建置**（本機預覽用）：`npm run build`
- **GitHub Pages 建置**（部署用）：`npm run build:gh`  
  會以 base `/itzel-portfolio/` 打包，適合放在 `username.github.io/itzel-portfolio/`。

## 部署到 GitHub Pages

### 方式一：GitHub Actions（推薦）

1. 將專案推送到 GitHub（例如 repo 名稱：`itzel-portfolio`）。
2. 在 repo 的 **Settings → Pages** 中：
   - **Source** 選 **GitHub Actions**。
3. 之後每次 push 到 `main` 或 `master` 會自動建置並部署。

若 repo 名稱不是 `itzel-portfolio`，請在 `package.json` 的 `build:gh` 裡把 `--base /itzel-portfolio/` 改成你的 repo 名稱，例如 `--base /你的repo名稱/`。

### 方式二：使用個人主頁（username.github.io）

若你的 GitHub Pages 是 `username.github.io`（根目錄），請：

1. 在 `package.json` 將 `build:gh` 改為：`"build:gh": "vite build"`（不帶 `--base`）。
2. 在 **Settings → Pages** 選擇從 `main` 或 `gh-pages` 分支的 `/ (root)` 或 `/docs` 部署（依你實際放檔案的資料夾而定）。

## Master of Ceremonies 活動圖片

「Hosting」區塊的 6 張活動圖片請放在 **`public/hosting/`** 資料夾，時間軸順序（由舊到新）與檔名對應如下：

| 檔名 | 活動 | 日期 |
|------|------|------|
| `masters-hooding.jpg` | 商學院碩士班撥穗典禮 | 2024.05.25 |
| `orientation.jpg` | 新生座談會 | 2024.11.30 |
| `pfizer-signing.jpg` | 輝瑞簽約儀式 | 2025.04.30 |
| `anniversary-98.jpg` | 政大98校慶 | 2025.05.19 |
| `opening-ceremony.jpg` | 政大開學典禮 | 2025.09.01 |
| `zhongni-award.jpg` | 政大仲尼獎頒獎典禮 | 2025.09.26 |

支援 `.jpg`、`.png`、`.webp`，建議使用 16:9 橫式比例。

## 技術

- React 19
- Vite 7
- Tailwind CSS v4
- Lucide React（圖示）
