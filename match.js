module.exports.match = function(hash) {

  
 var obj=document.getElementByType("text")      
 var s="";     
 for(var elem in obj){
 	s+=elem+"\n";

if(Ecom_Payment_Card_ExpDate_Day!=''){ 
	var o1 =document.getElementByClassName('Ecom_Payment_Card_ExpDate_Day');
    if(Ecom_Payment_Card_ExpDate_Month !=''){      
	    var o2 =document.getElementByClassName('Ecom_Payment_Card_ExpDate_Month');
       if(Ecom_Payment_Card_ExpDate_Year!=''){         
	      var o3 =document.getElementByClassName('Ecom_Payment_Card_ExpDate_Year');      
          var obj = Object.assign(o1, o2, o3);         
          console.log(obj);  
}
}
}
}
function isValidDate() {        

var re = new RegExp (/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/);

var str = obj;
var myArray = str.match(re);
console.log(myArray);

if (mat.find()) { 
	w("date is correct"); 
	return true;         }        
 w("data is invalid");         
 return false; }
}