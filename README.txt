# 家務管家 PWA v0.8｜寵物顯示修正版

這版是針對「底部沒有顯示寵物」製作的修正版。

## 修正內容
- 底部固定 6 個選單：首頁／家事／耗材／採購／物品／寵物
- 首頁新增「寵物項目」數量卡
- 標題下方直接顯示 v0.8，方便確認 GitHub Pages 是否真的更新
- 清除舊 Service Worker 快取，避免 Safari/PWA 一直讀舊版
- 保留既有 v0.7 / v0.6 / v0.5 / v0.4 / v0.3 / v0.2 本機資料
- 保留：寵物、RO 五道濾芯、空氣清淨機濾網、洗衣精／柔軟精用量資料庫

## GitHub 更新
解壓縮 ZIP 後，將以下四個檔案直接覆蓋上傳到 home-manager 根目錄：
- index.html
- manifest.webmanifest
- sw.js
- README.txt

Commit changes 後，等 GitHub Pages 部署完成。

開啟：
https://joinjoycrystal.github.io/home-manager/?v=08

成功時，畫面上方一定會看到「v0.8」，底部一定會有「寵物」。
如果仍看不到 v0.8，代表 GitHub 根目錄 index.html 沒有被新版覆蓋。
