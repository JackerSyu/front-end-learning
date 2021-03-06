# Huli front-end mentor program

## [click here to watch the page](https://jackersyu.github.io/front-end-learning/twitch_v2/twitch_v2/)
## [Twitch API Pracetice](https://timothysyu.000webhostapp.com/)
## [back-end-learning](https://github.com/JackerSyu/back-end-mentor)
## [from huli's Lidemy](https://www.lidemy.com/)

## 2019 4-3

### 嘗試部署到雲端上

- 原本要deploy到Heroku但是連結資料庫，必須先掛上信用卡，我的信用卡無法驗證...就嘗試其他平臺
- 000webhostapp 可以掛資料庫但是掛起來很怪，我的php連接資料庫的地方壞掉..


## day7 2019-3-23

### html + javascript simple form validation

- learn how to make the form validation 

### HTTP & AJAX

- GET vs POST
  1. GET 會在網址後面加參數， ？a=1&b=c
  2. 會自動做 URL encoded
  3. 因爲是網址 所以會有長度限制
  4. 因爲網址會顯示參數，不會放敏感資訊
     http://a.com/login?user=123&password=abc
  5. GET 資源通常不變，例如淘寶查詢頁面


  1. POST 把參數放在request body裏面
  2. 適合放敏感資訊，網址不會顯示
  3. POST http://a.com/login
     body: user=123 password=abc  
  4. POST 無法復制網址，不會給別人網址就完成轉賬
- AJAX: 簡單的說就是，透過瀏覽器的API，可以不換頁(clean all requests)就跟 Server 做溝通
  應用： 輸入賬號就能確認賬號有沒有重復、留言之後不會換頁
- 同步vs非同步：同步需要等到收到Server端的response才會繼續往下執行程式碼（畫面會凍住）
非同步則是利用一個callback function，先繼續執行下面程式，等收到response在回到callback function 去執行裏面的程式。


## day 6 2019-3-22

### Javascript DOM Operation  

- to realize the DOM operation 

- useful DOM operation
  1. document.addEventListener('DOMContentLoaded', function(){})  ('當這個event發生', 執行這個function{} ) （callback function 的概念）
  2. document.querySelector('{id/class}')
  3. you can also do ->      document.querySelector('#id/.class').addEventListener('click', () => {})
  4. document.createElement('(tag)')
  5. document.querySelector('#id/.class').appendChild(item)
  6. document.querySelector('#id/.class').removeChild(item)
  7. **The Usage of e / e.target**


### day5 2019-3-18

### laravel framework

- 嘗試切入一點後端的東西
- 今天弄環境弄蠻久的
- Xampp + laravel的安裝
- https://ithelp.ithome.com.tw/articles/10193428
### bug fixed 

問題：

- 連續點擊中文，讀取不到中文串流，有時候只抓到幾筆
- 解決：當轉換語言時沒有初始化頁碼（offset），在 changeLang function 中加入nowindex = 0 即可


### day4 2019-3-17


### I18N

- 利用i18n轉換語言
- 做選項（中文、英文）
- 到twitch抓不同語言的stream
- 利用lang-en.js/lang-zh-tw.js做轉換字串
- 到html的tag加上 onload=FUNCTION


### vanilla js

優點：
1. 效率高（考慮程式規模，太小無法發揮作用）
2. 節省jquery包的空間（節省30kb）

缺點：
1. 不好維護
2. 瀏覽器兼容性問題
3. 團隊協作困難（別人不會vanilla js）

重點：

- trade-off 權衡： 評估效能到底增加多少？ 



### PlaceHolder

- 在圖片尚未從twitch的網站下載回來時，先用自己預設的圖片代替，以免跑版
- 放兩張圖片在同一個div 將圖片位置高度寫死(relative, absolute)
- 載入完成讓真的圖片蓋掉(z-index relative)
- 把真的圖片opacity設成 0（透過onload事件 設成1）
- transition應用
- before應用
- base64 image （加速載入img，圖片不能太大，encode完檔案變大）
  
### Infinite scroll

- instruction 
  - $(document).height()
  - $(window).height()
  - $(window).scrollTop()
  - $(window).height() + $(window).scrollTop() === $(document).height() 表示拉到底部
  - check the isLoading Usage in script.js


- 今天遇到的一些問題（無關課程）
- git 問題 推不上去 解法 -> https://gitbook.tw/chapters/github/fail-to-push.html 
- 無法編譯stylus
  - 解决 Block-scoped declarations (let, const, function, class) not yet supported outside strict mode at
  - [執行以下](https://blog.csdn.net/tianlongtc/article/details/80230761)

  
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
  



