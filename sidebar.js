whale.tabs.query({active: true, currentWindow: true}, function(tabs){
    document.getElementById('import').onclick = () => {
    whale.tabs.sendMessage(tabs[0].id, 'import clicked', response => {
        document.getElementById("title").innerHTML = "책 제목 : " + JSON.stringify(response["ti"]).replaceAll("\"", "");
        document.getElementById("author").innerHTML = "저자 : " + JSON.stringify(response["au"]).replaceAll("\"", "");
        document.getElementById("img").innerHTML = "이미지 url : " + JSON.stringify(response["im"]).replaceAll("\"", "");
    })
  };
});
