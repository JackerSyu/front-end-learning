# Huli front-end mentor program



### 2019-3-16 day3

- 練習使用twitch 的API
  - 到twitch api 看使用方法
  - 取得clientId -> https://dev.twitch.tv/docs/v5/#introduction
  - 如何從瀏覽器呼叫API
    - Ajax(Asynchronous Javascript and XML)
      1. XMLHttpRequest  -> check out src/js/scriptXml.js
      2. $.ajax (底層還是上面那個實作而成) -> check out src/js/scriptAjax.js
        - 寫url盡量不要寫死
        - html一定要include https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    - Asynchronous非同步 & 同步 的概念
      - 如果使用同步
        - 到API拿資料需要時間，等request回來(Response)
        - 網頁看起來像當機
      - 若用非同步
        - 不用等到response回來就可繼續往下執行
        - 需要callback function （美食街例子，會震動的機器）
        - 拿到資料後才會回來的function就叫做callback finction
  - Same origin policy 問題
    - 當要發ajax的request到別的domain的網域會被襠下來
    - 可以去查 "same origin policy"
    - 解決辦法
      - JSONP (json-padding) 原理就是利用script標籤可以跨網域
        - 不推薦使用，引入別人的程式碼，安全性問題
      - CORS
        - 記錄了一些相關規範
        - 可以去f12的network Header看 acess-control-allow-origin 如果是* 代表全部domain皆可發送request
    - preflight request
      - 也是一個跨網域存取的規範
      - 先導請求，先看 acess-control-allow-origin 有沒有* 沒的話就不送了
      - 取消這個功能：不要自定義表頭，xhr.setRequestHeader('client-id', clientId); 放到url裏就好（同ajax）



### 2019-3-15 day2

- 練習CSS的hover
  - cursor
  - box-shadow (可以利用chrome tool 去調)
  - filter
  - 當某些比較舊的瀏覽器，需要加-webkit-
- 練習CSS的transition
  - 可以大大的提升質感
  - 盡量針對自己有在使用的hover做設定（不要用all 會影響效能）
  - 注意transition加的位置，要在.col 裏，不是在.col:hover
- 可以去 https://developers.google.com/web/fundamentals/performance/rendering/ 
  - 最底下有個take course，如同九陽神功祕籍，可以大增前端功力（提升效能）

### 2019-3-15 day2

- 練習preprocessor stylus基本用法
  - http://stylus-lang.com/
  - $ stylus -w main.styl (會持續compiler)
  - 變數應用
- postcss
  - 即 css preprocessor(stylus, sass, less) => compile to css => postcss => css
  - 有很多功能 ex. 自動加上很多prefix 等等


### 2019-3-14 day1

- 復習很久沒碰的CSS
- 復習很久沒碰的html
- 練習切板
- 練習flex
- [解決預覽下方空隙](https://www.cnblogs.com/JoannaQ/archive/2013/03/16/2962443.html)
- 當字太多，超出各式因此影響版面的解決辦法
  



