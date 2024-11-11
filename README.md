# 程式學習平台

這是一個專注於 Cursor、GitHub 和 Vercel 教學的線上學習平台。提供完整的基礎到進階課程內容，幫助學習者掌握現代開發工具和部署流程。

## 專案結構


elearn_web/
├── index.html # 主頁面
├── README.md # 專案說明文件
├── styles/ # 樣式檔案
│ ├── main.css # 主要樣式
│ └── course.css # 課程頁面樣式
├── js/ # JavaScript 檔案
│ ├── main.js # 主要功能
│ ├── progress.js # 學習進度追蹤
│ └── service-worker.js # 離線支援
├── images/ # 圖片資源
│ ├── common/ # 共用圖片
│ ├── cursor/
│ │ ├── basics/ # Cursor 基礎教學圖片
│ │ └── advanced/ # Cursor 進階教學圖片
│ ├── github/
│ │ ├── basics/ # GitHub 基礎教學圖片
│ │ └── advanced/ # GitHub 進階教學圖片
│ └── vercel/
│ ├── basics/ # Vercel 基礎教學圖片
│ └── advanced/ # Vercel 進階教學圖片
└── courses/ # 課程頁面
├── cursor-basics.html # Cursor 基礎教學
├── cursor-advanced.html # Cursor 進階教學
├── github-basics.html # GitHub 基礎教學
├── github-advanced.html # GitHub 進階教學
├── vercel-basics.html # Vercel 基礎教學
└── vercel-advanced.html # Vercel 進階教學

## 功能特點

### 1. 響應式設計
- 適配桌面和移動設備
- 漢堡選單導航
- 流暢的動畫效果

### 2. 課程功能
- 課程進度追蹤
- 代碼示例展示
- 實作練習指南
- 互動式學習體驗

### 3. 使用者體驗
- 深色模式支援
- 離線訪問功能
- 平滑滾動效果
- 載入動畫

### 4. 性能優化
- 圖片優化和錯誤處理
- 資源預加載
- 代碼分割
- 快取策略

## 技術棧

- HTML5
- CSS3
- JavaScript (ES6+)
- Service Worker
- LocalStorage

## 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 開發指南

1. 克隆專案
git clone https://github.com/your-username/elearn_web.git

2. 安裝依賴（如果有使用套件管理器）
npm install

3. 啟動開發伺服器
npm start

# 部署說明

1. 建置專案
npm run build

2. 部署到 Vercel
vercel deploy


## 貢獻指南

1. Fork 專案
2. 創建特性分支
3. 提交變更
4. 發起 Pull Request

## 圖片處理指南

- 圖片格式：JPG/PNG
- 最大寬度：1200px
- 壓縮率：80%
- 命名規則：feature-name-type.jpg

## 維護指南

### 添加新課程
1. 在 courses/ 目錄下創建新的 HTML 文件
2. 在 images/ 下添加相應的圖片資源
3. 更新主頁面的課程列表
4. 更新導航選單

### 更新現有課程
1. 修改相應的課程 HTML 文件
2. 更新或添加新的圖片資源
3. 更新課程大綱
4. 測試所有連結和功能

## 授權

MIT License

## 聯絡資訊

- Email: contact@example.com
- Website: https://your-website.com

## 更新日誌

### v1.0.0 (2024-01-01)
- 初始版本發布
- 基礎課程內容
- 響應式設計實現