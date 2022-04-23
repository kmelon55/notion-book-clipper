
function import_data() {
  var title = document.getElementsByClassName("gd_name");
  var author = document.getElementsByClassName("lnk_author");
  var img = document.querySelector('.imgBdr').querySelector('img[alt="' + title[0].innerText + '"]');
 

  data = {
    ti : title[0].innerText,
    au : author[0].innerText,
    im : img.src
  }
}



whale.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("onMessage");
  import_data()
  if (message === 'import clicked') {
    sendResponse(data);
  }
});


/*
  alert(img.src);
  alert(title[0].innerText);
  alert(author[0].innerText);
*/