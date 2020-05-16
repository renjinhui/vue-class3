let btn = document.getElementById('btn');
btn.onclick = function(){
  /* let xhr = new XMLHttpRequest();
  // xhr.open('get','/list?qq=123&bb=66');
  xhr.open('post','/add')
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
      console.log(xhr.response)
    }
  }
  xhr.send(JSON.stringify({time:1111,age:4444,name:6666}));
 */
  let xhr = new XMLHttpRequest();
  xhr.open('post','/add')
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
      console.log(xhr.response)
    }
  }
  xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
  xhr.send('qqq=123&ddd=345&hhh=888');
}