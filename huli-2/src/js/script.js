let nowIndex = 0;
let isLoading = false;
let LANG = 'zh-tw';

function changeLang(lang){
  console.log("change language : "+ lang);
  $('.menu h1').text(window.I18N[lang]['TITLE']);
  nowIndex = 0;
  LANG = lang;
  $('.deafult-row').empty();
  appendData(LANG);
}


// clientId 到這：https://dev.twitch.tv/docs/v5/#introduction
function getData (lang, cb) {
    const clientId = 'wnlc89u86vwa7lrmdnzz7haxdatq1z';
    const limit = 20;
    const apiUrl = `https://api.twitch.tv/kraken/streams/?client_id=${clientId}&game=League%20of%20Legends&limit=${limit}&offset=${nowIndex}&language=${lang}`
    
    isLoading = true;

    $.ajax({
        url: apiUrl,
        success:(response) =>{
            console.log(response);
            cb(null, response);
        }
    })
}

function appendData(lang){
  getData(lang,(err, data) => {
    const {streams} = data; // 即 const streams = data.streams;
    const $deafult_row = $('.deafult-row'); // html 裏的 class='deafult-row'
    for(let stream of streams)
    {
      $deafult_row.append(getColumn(stream));
    }
    nowIndex += 20;
    isLoading = false;
  })
}

$(document).ready(() =>{
  appendData(LANG);
  console.log("etes");
  $(window).scroll(() => {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 200)
    {
      if(!isLoading){
        appendData(LANG);
      }
    }
  
  })
})

function getColumn(data)
{
  return `
  <a href="${data.channel.url}">
    <div class="deafult-col">
      <div class="preview">
        <img src="${data.preview.medium}" onload="this.style.opacity=1"> 
      </div>
      <div class="deafult-bottom">
        <div class="avatar">
          <img src="${data.channel.logo}" onload="this.style.opacity=1">
        </div>
        <div class="intro">
          <div class="channel_name">${data.channel.status}</div>
          <div class="owner_name">${data.channel.display_name}</div>
        </div>
      </div>
    </div>
  </a>
  `
}

