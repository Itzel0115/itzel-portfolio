# 上傳到 GitHub 步驟

## 一、在電腦上初始化 Git 並提交

在專案資料夾（`itzel-portfolio`）打開終端機，依序執行：

```bash
# 1. 初始化 Git（若尚未做過）
git init

# 2. 加入所有檔案
git add .

# 3. 第一次提交
git commit -m "Initial commit: portfolio with Hosting timeline"
```

## 二、在 GitHub 建立新倉庫

1. 登入 [GitHub](https://github.com)
2. 點右上角 **+** → **New repository**
3. **Repository name** 填：`itzel-portfolio`（或你想要的名稱）
4. 選擇 **Public**，**不要**勾選 "Add a README"（專案已有檔案）
5. 點 **Create repository**

## 三、把本機專案推送到 GitHub

建立好倉庫後，GitHub 會顯示指令，在專案資料夾執行（請把 `你的帳號` 換成你的 GitHub 使用者名稱）：

```bash
# 設定遠端（分支名用 main）
git remote add origin https://github.com/你的帳號/itzel-portfolio.git

# 將目前程式放在 main 分支並推送
git branch -M main
git push -u origin main
```

若 GitHub 已顯示 **…or push an existing repository from the command line**，直接複製那三行指令執行即可。

## 四、開啟 GitHub Pages

1. 進到該 repo 的 **Settings** → 左側 **Pages**
2. **Build and deployment** 底下 **Source** 選 **GitHub Actions**
3. 之後每次 push 到 `main`，會自動建置並部署

網站網址會是：`https://你的帳號.github.io/itzel-portfolio/`

---

**若使用 SSH 而非 HTTPS：**

```bash
git remote add origin git@github.com:你的帳號/itzel-portfolio.git
```

**若已先建立過 GitHub 倉庫並有 README：**

```bash
git pull origin main --rebase
git push -u origin main
```
