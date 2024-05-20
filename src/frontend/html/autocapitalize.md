---
title: autocapitalize自动大写
---

> The autocapitalize 全局属性 是一个枚举属性，它控制用户输入/编辑文本输入时文本输入是否自动大写，以及如何自动大写。   
属性必须取下列值之一：    
off or none: 没有应用自动大写（所有字母都默认为小写字母）。   
on or sentences: 每个句子的第一个字母默认为大写字母；所有其他字母都默认为小写字母。   
words: 每个单词的第一个字母默认为大写字母；所有其他字母都默认为小写字母。   
characters: 所有的字母都默认为大写。    
在物理键盘上输入时，autocapitalize 属性不会影响行为。相反，它会影响其他输入机制的行为，比如移动设备的虚拟键盘和语音输入。

**总结**: pc端实体键盘根本就不起作用，手机移动端能够起作用    
比如当autocapitalize="characters"时候，掉起键盘以及每输入一个字符都会改成大写键盘（可以手动调成小写键盘，小写输入的input框的值也是小写），相当于每一次都帮你点击了大写按钮。

下面还有最新的语音识别，贼吊，需要使用静态服务器打开页面
```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <input id="input" type="text" autocapitalize="characters">
  <textarea id="textarea" autocapitalize="characters"></textarea>
  <button id="start">开始识别</button>
  <button id="end">结束识别</button>
  <div>下面是识别结果</div>
  <div class="output"></div>
  <script>
    var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
    var recognition = new webkitSpeechRecognition();
    var speechRecognitionList = new webkitSpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    //recognition.continuous = false;
    // recognition.lang = 'en-US';
    // recognition.lang = 'zh-CN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    var diagnostic = document.querySelector('.output');
    var bg = document.querySelector('html');

    document.getElementById('start').onclick = function() {
      console.log(1111);
      recognition.start();
      console.log('Ready to receive a color command.');
    }
    document.getElementById('end').onclick = function(){
      console.log(44);
      recognition.stop();
    }

    recognition.onspeechend = function() {
      recognition.stop();
      console.log('Speech recognition has stopped.');
    }

    recognition.onresult = function(event) {
      console.log(222, event);
      var color = event.results[0][0].transcript;
      diagnostic.textContent = '识别结果为: ' + color;
      document.getElementById('input').value = event.results[0][0].transcript;
      bg.style.backgroundColor = color;
    }
  </script>
</body>
</html>
```