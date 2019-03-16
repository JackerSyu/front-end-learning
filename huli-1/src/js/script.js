
// clientId 到這：https://dev.twitch.tv/docs/v5/#introduction
function getData (cb) {
    const clientId = 'wnlc89u86vwa7lrmdnzz7haxdatq1z';
    const limit = 20;
    const apiUrl = 'https://api.twitch.tv/kraken/streams/?client_id=' + clientId + '&game=League%20of%20Legends&limit='+ limit;
    
    $.ajax({
        url: apiUrl,
        success:(response) =>{
            console.log(response);
            cb(null, response);
        }
    })
}

getData((err, data) => {
  const {streams} = data; // 即 const streams = data.streams;
  const $row = $('.row'); // html 裏的 class='row'
  for(let stream of streams)
  {
    $row.append(getColumn(stream));
  }
})


function getColumn(data)
{
  return `
  <a href="${data.channel.url}">
    <div class="col">
      <div class="preview">
        <img src="${data.preview.medium}">
      </div>
      <div class="bottom">
        <div class="avatar">
          <img src="${data.channel.logo}">
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