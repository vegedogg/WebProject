// JavaScript Document

    function openLink() {
      var colorText = document.getElementById('colorText');
      var color = colorText.innerHTML;
      
      if (color == "红树林生态系统") {
        window.open('#');
      } else if (color == "浅海陆架区生态系统") {
        window.open('#');
      } else if (color =="热液喷口生态系统") {
        window.open('#');
      } else if (color == "珊瑚礁生态系统"){
		window.open('#');	
	  }	else if (color == "深海生态系统"){
		window.open('https://lexue.bit.edu.cn/');	
	  }
    }

	var Text = document.getElementById("colorText");
    var texts = ["红树林生态系统","浅海陆架区生态系统","热液喷口生态系统","珊瑚礁生态系统","深海生态系统"];
	var currentIndex = 0;
	
 	setInterval(function() {
  // 更新文本内容
  	colorText.innerText = texts[currentIndex];

  // 增加当前文本索引，如果达到数组末尾，则重新开始
  	currentIndex = (currentIndex + 1) % texts.length;
	}, 5000);