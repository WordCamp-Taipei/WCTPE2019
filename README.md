# WordCamp Taipei 2019 主要官方網站

## 本地端主機測試安裝

本地端測試環境需求：
- [VirtualBox 5.x](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant 2.1+](https://www.vagrantup.com/downloads.html)
- [Varying Vagrant Vagrants (VVV)](https://varyingvagrantvagrants.org/)
- [WordPress Meta Environment](https://github.com/WordPress/meta-environment)

安裝步驟：
1. 安裝 [VirtualBox 5.x](https://www.virtualbox.org/wiki/Downloads)
2. 安裝 [Vagrant 2.1+](https://www.vagrantup.com/downloads.html)
3. 確認安裝 Vagrant `vagrant -v` 檢查版本
4. 安裝 hosts 自動更新插件 `vagrant plugin install vagrant-hostsupdater`
5. 用 `git` 安裝 VVV `git clone -b master git://github.com/Varying-Vagrant-Vagrants/VVV.git ~/vagrant-local`
6. `vagrant up` 啟動 VVV 確認 http://vvv.test/ 是否有確實執行
7. 找到 `vvv-custom.yml` 檔案。
   如果沒有請複製 `vvv-config.yml` 並建立 `vvv-custom.yml` 檔案。 `cp vvv-config.yml vvv-custom.yml`
8. 請把這幾行 uncomment
   ```yml
   #wordpress-meta-environment:
   #  repo: https://github.com/WordPress/meta-environment.git
   ```
9. 複製貼上以下內容，不需要的網站可以改成 `false` 才不會啟動安裝跑太久。
   ```yml
   wordpress-meta-environment:
   description: "An environment useful for contributions to the WordPress meta team."
   repo: https://github.com/WordPress/meta-environment.git
   hosts:
     - wp-meta.test
   custom:
     provision_site:
       "buddypressorg.test": true
       "jobs.wordpressnet.test": true
       "wordcamp.test": true
       "wordpressorg.test": true
       "wordpresstv.test": true
   ```
10. 重新啟動 VVV
    `vagrant reload --provision`
11. 檢查 http://wp-meta.test 是否成功，主要 WordCamp 測試網站為：http://central.wordcamp.test/

## 安裝 WordCamp Taipei 2019 主題

`cd /vagrant-local/www/wordpress-meta-environment/wordcamp.test/public_html/wp-content/themes/`
1. pull WordCamp Taipei 2019 主題 `git clone git@github.com:yuliyang/WCTPE2019.git`
2. 啟用 WordCamp Taipei 2019 主題
3. 去 [WordCamp Taipei 2019 網站](https://2019.taipei.wordcamp.org/wp-admin/export.php) Tools 匯出 xml 檔案
4. Tools > Import > Run WordPress Importer (download and import attachment)
5. Appearance > Customize > Site Identity - 設定網站標題及標語
6. Appearance > Customize > Homepage settings - 設定 Homepage & Post page
7. Appearance > Customize > Menu - 設定剛剛匯入的選單
8. Appearance > Customize > Widgets - 設定 Post page 側邊欄小工具 & 頁尾 Footer
9. Appearance > Customize > Theme options - Page layout: 1 column
10. Appearance > Customize > Theme options - 設定首頁區塊
11. Appearance > Fonts >
    * Google Web Fonts: `@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC|Roboto&display=swap');`
    * Font Awesome: `https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css`
    * Check "Enqueue Dashicons"

## 開工囉！

在主題資料夾內 `cd WCTPE2019` 執行 `npm install` (如果權限不夠請用 `sudo npm install`)。這會安裝所有方便開發的工具：[gulp](https://gulpjs.com/), [livereload](https://www.npmjs.com/package/gulp-livereload), [autoprefixer](https://github.com/postcss/autoprefixer), [cssnano](https://cssnano.co/)
記得安裝 [livereload 瀏覽器插件](http://livereload.com/extensions/)，每次更新 CSS 檔案後，瀏覽器會自動刷新。

- `npm run build` 只跑一次
- `npm run watch` 會持續監控 CSS 檔案

主要修改檔案 /src/style.css
輸出檔案 /dest/style.css
