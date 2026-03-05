# niizo_blog

這是一個主要用於存放 niizo 品牌部落格 (Blog) 靜態網頁與相關資源的專案儲存庫。本專案目前透過 GitHub Pages / Cloudflare Pages 進行線上部署。

## 部署說明
部署路徑：本地 Mac 修改 -> GitHub Desktop 推送 (Push) -> Cloudflare Pages 自動偵測並發布。

---

## 關於 `customization` 目錄的特殊性

專案下的 `customization` 資料夾包含了一系列**與 Blog 內容完全無關**的獨立前端小工具頁面。

### 1. 用途說明
這個資料夾存放的是專為 niizo 官方網路商店 (shop.niizo.com) 顧客所開發的**「客製化配色模擬工具」**。
目前包含兩支主要的工具：
*   **`SGB01tool.html`**：niizo 輕量護脊書包 配色小工具
*   **`BAG030tool.html`**：無添加托特包 配色小工具

顧客可以在這些頁面上自選袋身、袋蓋、揹帶等不同部位的布料顏色，即時預覽成品樣貌。選定後，顧客可透過點擊「產生訂製參數並複製」按鈕，將配色參數帶回購物車結帳頁面填寫。

### 2. 技術規格與現況 (2026年3月優化版本)
這些小工具是一個極度輕量、無需後端資料庫介入的純靜態前端應用（Static SPA）。其最新技術規格如下：

*   **無框架核心 (Vanilla JS)**：
    *   已於近期全面重構，**移除了對 jQuery 的依賴**。所有的 DOM 操作、圖片切換與事件監聽皆採用現代瀏覽器原生 JavaScript (`document.querySelector`, `addEventListener`) 實作。
*   **圖片預載與最佳化 (WebP)**：
    *   為達到點擊「秒換色」的無縫體驗，書包預覽圖層（包含具透明度 Alpha Channel 的袋蓋、揹帶等 PNG 圖檔）已全數轉換為高效能的 **`.webp` 格式**，大幅縮減了 50% 以上的檔案載入體積。
    *   JavaScript 層實作了預先載入 (Preloading) 機制，顧客一進入頁面即會在背景載入 WebP 素材，避免換色時出現破圖或閃爍。
*   **一鍵複製功能 (Clipboard API)**：
    *   採用原生的 `navigator.clipboard.writeText` API。按下產生參數按鈕時，會動態抓取當前各部位被附加 `selected` class 的色塊屬性，組合成自訂格式（例如：「【袋身布】宇宙黑、【袋蓋款式】太空黑熊」），寫入剪貼簿，並給予 UI 的綠色按鈕成功回饋。
*   **行動版介面優化 (Responsive UX)**：
    *   在 `customTool.css` 與 `customTool2.css` 樣式表中，實作了小螢幕 (`max-width: 768px`) 環境下的 **Sticky 定位 (`position: sticky`)**。當使用者在手機往下捲動尋找更多顏色選項時，上方的即時預覽圖會固定於螢幕頂端，提供極佳的操作手感。同時也微調了色塊間距，放大了手指觸控的安全範圍 (Touch Targets)。
*   **乾淨的原始碼**：
    *   頁面中所有過期失效的 Google Analytics (`ga()`)、Facebook Pixel SDK 以及舊版的再行銷 iframe 皆已被清除，以保障未來維護的安全與效能。

---

*版權所有 © SINCE 2008 niizo All Rights Reserved.*
