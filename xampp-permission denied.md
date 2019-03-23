---


---

<h1 id="無法存取xampp資料夾">無法存取xampp資料夾</h1>
<p><a href="https://askubuntu.com/questions/55312/how-to-save-php-file-in-opt-lampp-htdocs-without-going-to-terminal-and-type-sud">https://askubuntu.com/questions/55312/how-to-save-php-file-in-opt-lampp-htdocs-without-going-to-terminal-and-type-sud</a></p>
<pre><code>sudo chown username:groupname /opt/lampp/htdocs

sudo chown timothysyu:timothysyu /opt/lampp/htdocs/timothy
</code></pre>
<h2 id="open-the-xampp-panel">open the xampp panel</h2>
<p><a href="https://askubuntu.com/questions/890818/ubuntu-16-04-how-to-start-xampp-control-panel">https://askubuntu.com/questions/890818/ubuntu-16-04-how-to-start-xampp-control-panel</a></p>
<h1 id="開啓xampp後-localhost-出現禁止訪問！">開啓Xampp後 localhost 出現禁止訪問！</h1>
<p><a href="https://question.itread01.com/fqhkhkhkx.html">https://question.itread01.com/fqhkhkhkx.html</a></p>
<blockquote>
<p>在linux終端導航到你的lampp目錄.</p>
</blockquote>
<pre><code>cd /opt/lampp

</code></pre>
<blockquote>
<p>在命令列中鍵入：</p>
</blockquote>
<pre><code>sudo chmod 777 -R htdocs

</code></pre>
<p>問題應該解決.</p>
<p>第一編輯：</p>
<p>你剛做的是：</p>
<p>您導航到包含受保護目錄的目錄.你的問題是它是一個被系統訪問保護的資料夾.當您命令chmod 777 -R htdocs時,您所做的是將計算機上每個人的許可權設定為讀/寫/執行 – 允許.</p>
<p>現在,你知道每個數字的含義.它說的是誰的數字是關於.現在每個數字從0-7設定一個許可權級別.我會為您提供一個連結.</p>
<p><a href="http://www.pageresource.com/cgirec/chmod.htm">http://www.pageresource.com/cgirec/chmod.htm</a></p>
<p>我忘了新增為什麼有一個’-R’. ‘-R’使命令遞歸併影響htdoc以及htdocs的所有子目錄以及其他所有子目錄.</p>

