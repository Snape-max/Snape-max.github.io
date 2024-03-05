api = "https://xiaohongshuapi1-z6j647l4.b4a.run/api/v1/image"

var picarea = document.getElementById("pic");
var result = document.getElementById("result");
var description = document.getElementById("description");

function Parser(type, link) {
    const url = `${api}/${type}/${link}`;
    
    // 返回一个Promise，以便外部可以处理解析后的数据
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP 错误：${response.status}`);
        }
        // 使用return关键字返回解析后的JSON数据
        return response.json();
      })
      .then((data) => {
        // 确保数据中有images属性再返回
        if (data && data.images) {

            result.style.display = "block";
            console.log(data.images);
            console.log(data.description);
            imgHtml = "";
            for (let i=0;i<data.images.length;i++){
                // imgHtml += `<a href='${data.images[i]}' download>图片${i+1}, 点击下载</a>`;
                imgHtml += 
                `<a href='${data.images[i]}' download><img src='${data.images[i].replace("1080", "120")}' href='${data.images[i]}'></a>`;
            }

            picarea.innerHTML =  imgHtml;
            description.innerHTML = `<h2>文案</h2><p>${data.description}</p>`


        } else {
          throw new Error('No images found in the API response');
        }
      })
      .catch((error) => {
        console.error('There was an error fetching the data:', error);
        throw error; // 抛出错误以在外部捕获
      });
}


document.getElementById("btn").addEventListener('click', () => {
    var text = document.getElementById("data").value;
    var info = document.getElementById("info");
    var url = text.match(/(https?:\/\/|ftp:\/\/)[^\"'\s]+/g);
    console.log(url);
    if (url){
        if (url.length > 0){
            url = url[0];
        }
        
        info.style.display = "none";
        link = null;
        type = null;
        if (url.includes("xhslink")){
            link = url.match(/xhslink\.com\/(.+)/)[1];
            type = "short";
        } else if (url.includes("xiaohongshu.com/explore")){
            link = url.match(/explore\/([^?]+)/)[1];
            type = "long";
        }

        if (link){
            var data = Parser(type, link);
        }
    } else {
        info.style.display = "none";
    }

  });

