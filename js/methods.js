/*手机号码正则表达式验证*/
function checkPhone(){ 
    var phone = document.getElementById('phone').value;
    if(!(/^1[34578]\d{9}$/.test(phone))){
    	$('.errorbox').html("号码格式错误");
        return false;
    } 
}
/*或者*/
function checkPhone2(){
    var phone = document.getElementById('phone').value;
    if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){ 
        alert("手机号码有误，请重填");  
        return false; 
    } 
}

/*固定电话号码正则表达式*/
function checkTel(){
	var tel = document.getElementById('tel').value;
	if(!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(tel)){
		alert('固定电话有误，请重填');
		return false;
	}
}