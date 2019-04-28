let nowIndex = 0;
let isLoading = false;
let LANG = 'zh-tw';

function changeLang(lang){
  console.log("change language : "+ lang);
  $('.row h1').text(window.I18N[lang]['TITLE']);
  nowIndex = 0;
  LANG = lang;
  $('.deafult-row').empty();
  $('.carousel_model').empty();
  appendData(LANG);
  appendCaro(LANG);
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

function getDataCaro (lang, cb) {
  const clientId = 'wnlc89u86vwa7lrmdnzz7haxdatq1z';
  const limit = 3;
  const apiUrl = `https://api.twitch.tv/kraken/streams/?client_id=${clientId}&game=League%20of%20Legends&limit=${limit}&offset=${nowIndex}&language=${lang}`

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

function appendCaro(lang){
  getDataCaro(lang,(err, data) => {
    const {streams} = data; // 即 const streams = data.streams;
    const $carousel_slide = $('.carousel_model'); // html 裏的 class='deafult-row'
    console.log("streams");
    $carousel_slide.append(getCaro(streams));
  })
}

$(document).ready(() =>{
  appendData(LANG);
  appendCaro(LANG);
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

function getCaro(data)
{
  return `
  <div id="demo" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
      
      <!-- The slideshow -->
      <div class="carousel-inner">
        
        <div class="carousel-item active">
          <a href="${data[0].channel.url}">
            <img src="${data[0].channel.video_banner}" alt="Los Angeles" width="1100" height="500">
          </a>
          <div class="carousel-caption">
            <h3>${data[0].channel.display_name}</h3>
            <p>${data[0].channel.status}</p>
          </div>
        </div>
        
          <div class="carousel-item">
          <a href="${data[1].channel.url}">
            <img src="${data[1].channel.video_banner}" alt="Chicago" width="1100" height="500">
          </a>
            <div class="carousel-caption">
              <h3>${data[1].channel.display_name}</h3>
              <p>${data[1].channel.status}</p>
            </div>
          </div>
        
          <div class="carousel-item">
            <a href="${data[2].channel.url}">
              <img src="${data[2].channel.video_banner}" alt="New York" width="1100" height="500">
            </a>
            <div class="carousel-caption">
              <h3>${data[2].channel.display_name}</h3>
              <p>${data[2].channel.status}</p>
            </div>
          </div>
      </div>
      
      <!-- Left and right controls -->
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  `
}