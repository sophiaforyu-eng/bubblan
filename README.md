# 泡泡臉八德館｜正式上架候選版 V4

這一版的目標是：網站可以先上架，未完成內容不出現半成品，之後資料陸續補進來即可自然長大。

## 第一版已可上架的內容
- 首頁
- 護膚項目：4 張正式圖片左右滑動
- AI 肌膚檢測：直接連 ai.bubblan.tw
- 肌膚知識：沒有文章時先顯示主題入口；有文章後自動顯示文章卡
- 居家保養：沒有文章時先顯示主題入口；有文章後自動顯示文章卡
- 想進入美業：資料驅動，可持續新增新的美業入口
- 關於我們：資料驅動，可直接新增美容師
- 預約與來店資訊
- 隱私權政策
- SEO 基礎：Meta、canonical、Open Graph、JSON-LD、sitemap、robots、404

## 未來直接補，不需要重做網站
### 護膚詳細頁
`_data/services.yml` 每個項目已預留 `detail_url:`。
現在空白時圖片會連 LINE；詳細頁完成後只要填網址，首頁與護膚項目頁就會自動改連詳細頁。

### 肌膚知識
新增檔案到 `_knowledge/`。

### 居家保養
新增檔案到 `_homecare/`。

### 丙級美容考照文章
新增檔案到 `_license/`。

### 新美容師
在 `_data/team.yml` 增加一筆人物資料即可；卡片會自動增加並可左右滑。

### 花漾皙產品
新增檔案到 `_products/`。
每個產品可有自己的 `buy_url:`，直接連既有電子商務系統，不在本站重建購物車。

### 來店故事
新增檔案到 `_stories/`。
只有 `consent_public: true` 的內容才會出現在網站與 sitemap。

## 圖片目錄
- `assets/images/team/`
- `assets/images/certificates/`
- `assets/images/environment/`
- `assets/images/products/`
- `assets/images/stories/`
- `assets/images/services/`

## 正式發布時還要做
1. 上傳到 GitHub repository `sophiaforyu-eng/bubblan`
2. GitHub Pages 實際 build 測試
3. 檢查手機與桌機
4. 檢查 LINE / Facebook / Maps / AI / 電話連結
5. 正式啟用 GitHub Pages
6. 若本次就綁 `bubblan.tw`，同步調整 `_config.yml` 的 `url/baseurl` 與 Custom Domain
7. 正式網域確定後再接 Google Search Console / Analytics
