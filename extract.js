module.exports.extract = function(window) {
 
}

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const dom = new JSDOM(``, {
//   url: "http://autofill.mozdev.org/autofilltest.html",
//   contentType: "text/html",
//   includeNodeLocations: true

// });
//   console.log(dom);

//try to clone the http://autofill.mozdev.org/autofilltest.html, then I can check the element in this website whethern I got correct  
var https = require('http');
 
 https.get('http://autofill.mozdev.org/autofilltest.html/', function(res) {
  console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);
  
    res.on('data', function(d) {
      process.stdout.write(d);
    });
 
 }).on('error', function(e) {
   console.error(e);
 });

 var fs = require('fs');
//write json in mapping.json
fs.writeFile('mapping.json',Jsonfile() , function (err) {
  if (err) throw err;
  console.log('successful write in mapping.json');
});

function Jsonfile() {
	//value
	var finalInfo = new Object(); 
   finalInfo.email=document.getElementByClassName('email');
   finalInfo.name=document.getElementByClassName('name');
   finalInfo.addr1=document.getElementByClassName('addr1');
   finalInfo.addr2=document.getElementByClassName('addr2');
   finalInfo.city=document.getElementByClassName('city');
   finalInfo.state=document.getElementByClassName('state');
   finalInfo.zip=document.getElementByClassName('zip');
   finalInfo.country=document.getElementByClassName('country');
   finalInfo.phone=document.getElementByClassName('phone');
   finalInfo.Ecom_ShipTo_Postal_Name_Prefix=document.getElementByClassName('Ecom_ShipTo_Postal_Name_Prefix');
   finalInfo.Ecom_ShipTo_Postal_Name_First=document.getElementByClassName('Ecom_ShipTo_Postal_Name_First');
   finalInfo.Ecom_ShipTo_Postal_Name_Middle=document.getElementByClassName('Ecom_ShipTo_Postal_Name_Middle');
   finalInfo.Ecom_ShipTo_Postal_Name_Last=document.getElementByClassName('Ecom_ShipTo_Postal_Name_Last');
   finalInfo.Ecom_ShipTo_Postal_Name_Suffix=document.getElementByClassName('Ecom_ShipTo_Postal_Name_Suffix');
   finalInfo.Ecom_ShipTo_Postal_Company=document.getElementByClassName('Ecom_ShipTo_Postal_Name_Company');
   finalInfo.Ecom_ShipTo_Postal_Street_Line1=document.getElementByClassName('Ecom_ShipTo_Postal_Street_Line1');
   finalInfo.Ecom_ShipTo_Postal_Street_Line2=document.getElementByClassName('Ecom_ShipTo_Postal_Street_Line2');
   finalInfo.Ecom_ShipTo_Postal_Street_Line3=document.getElementByClassName('Ecom_ShipTo_Postal_Street_Line3');
   finalInfo.Ecom_ShipTo_Postal_City=document.getElementByClassName('Ecom_ShipTo_Postal_City');
   finalInfo.Ecom_ShipTo_Postal_StateProv=document.getElementByClassName('Ecom_ShipTo_Postal_StateProv');
   finalInfo.Ecom_ShipTo_Postal_PostalCode=document.getElementByClassName('Ecom_ShipTo_Postal_PostalCode');
   finalInfo.Ecom_ShipTo_Postal_CountryCode=document.getElementByClassName('Ecom_ShipTo_Postal_CountryCode');
   finalInfo.Ecom_ShipTo_Telecom_Phone_Number=document.getElementByClassName('Ecom_ShipTo_Telecom_Phone_Number');
   finalInfo.Ecom_ShipTo_Online_Email=document.getElementByClassName('Ecom_ShipTo_Online_Emial');
   finalInfo.Ecom_BillTo_Postal_Name_Prefix=document.getElementByClassName('Ecom_BillTo_Postal_Name_Prefix');
   finalInfo.Ecom_ReceiptTo_Postal_Name_Prefix=document.getElementByClassName('Ecom_ReceiptTo_Postal_Name_Prefix');
finalInfo.Ecom_ReceiptTo_Postal_Name_First=document.getElementByClassName('Ecom_ReceiptTo_Postal_Name_First');
finalInfo.Ecom_ReceiptTo_Postal_Name_Middle=document.getElementByClassName('Ecom_ReceiptTo_Postal_Name_Middle');
finalInfo.Ecom_ReceiptTo_Postal_Name_Last=document.getElementByClassName('Ecom_ReceiptTo_Postal_Name_Last');
finalInfo.Ecom_ReceiptTo_Postal_Name_Suffix=document.getElementByClassName('Ecom_ReceiptTo_Postal_Name_Suffix');
finalInfo.Ecom_ReceiptTo_Postal_Company=document.getElementByClassName('Ecom_ReceiptTo_Postal_Company');
finalInfo.Ecom_ReceiptTo_Postal_Name_First=document.getElementByClassName('Ecom_ReceiptTo_Postal_Name_First');
finalInfo.Ecom_ReceiptTo_Postal_Street_Line1=document.getElementByClassName('Ecom_ReceiptTo_Postal_Street_Line1');
finalInfo.Ecom_ReceiptTo_Postal_Street_Line2=document.getElementByClassName('Ecom_ReceiptTo_Postal_Street_Line2');
finalInfo.Ecom_ReceiptTo_Postal_Street_Line3=document.getElementByClassName('Ecom_ReceiptTo_Postal_Street_Line3');
finalInfo.Ecom_ReceiptTo_Postal_City=document.getElementByClassName('Ecom_ReceiptTo_Postal_City');
finalInfo.Ecom_ReceiptTo_Postal_StateProv=document.getElementByClassName('Ecom_ReceiptTo_Postal_StateProv');
finalInfo.Ecom_ReceiptTo_Postal_PostalCode=document.getElementByClassName('Ecom_ReceiptTo_Postal_PostalCode');
finalInfo.Ecom_ReceiptTo_Postal_CountryCode=document.getElementByClassName('Ecom_ReceiptTo_Postal_CountryCode');
finalInfo.Ecom_ReceiptTo_Telecom_Phone_Number=document.getElementByClassName('Ecom_ReceiptTo_Telecom_Phone_Number');
finalInfo.Ecom_ReceiptTo_Online_Email=document.getElementByClassName('Ecom_ReceiptTo_Online_Email');
finalInfo.Ecom_Payment_Card_Name=document.getElementByClassName('Ecom_Payment_Card_Name');
finalInfo.Ecom_Payment_Card_Type=document.getElementByClassName('Ecom_Payment_Card_Type');
finalInfo.Ecom_Payment_Number=document.getElementByClassName('Ecom_Payment_Number');
finalInfo.Ecom_Payment_Card_Verification=document.getElementByClassName('Ecom_Payment_Card_Verification');
finalInfo.Ecom_Payment_Card_ExpDate_Day=document.getElementByClassName('Ecom_Payment_Card_ExpDate_Day');
finalInfo.Ecom_Payment_Card_ExpDate_Month=document.getElementByClassName('Ecom_Payment_Card_ExpDate_Month');
finalInfo.Ecom_Payment_Card_ExpDate_Year=document.getElementByClassName('Ecom_Payment_Card_ExpDate_Year');
finalInfo.Ecom_Payment_Card_Protocol=document.getElementByClassName('Ecom_Payment_Card_Protocol');
finalInfo.Ecom_ConsumerOderID=document.getElementByClassName('Ecom_ConsumerOderID');
finalInfo.Ecom_User_ID=document.getElementByClassName('Ecom_User_ID');
finalInfo.Ecom_User_Password=document.getElementByClassName('Ecom_User_Password');
finalInfo.Ecom_SchemaVersion=document.getElementByClassName('Ecom_SchemaVersion');
finalInfo.Ecom_WalletID=document.getElementByClassName('Ecom_WalletID');
 
 //key
var InputInfo = new Array(); 
InputInfo[0] = "email"; 
InputInfo[1] = "name"; 
InputInfo[2] = "addr1"; 
InputInfo[3] = "addr2"; 
InputInfo[4] = "city"; 
InputInfo[5] = "state"; 
InputInfo[6] = "zip"; 
InputInfo[7] = "country"; 
InputInfo[8] = "phone"; 
InputInfo[9] = "Ecom_ShipTo_Postal_Name_Prefix"; 
InputInfo[10] = "Ecom_ShipTo_Postal_Name_First"; 
InputInfo[11] = "Ecom_ShipTo_Postal_Name_Middle"; 
InputInfo[12] = "Ecom_ShipTo_Postal_Name_Last"; 
InputInfo[13] = "Ecom_ShipTo_Postal_Name_Suffix"; 
InputInfo[14] = "Ecom_ShipTo_Postal_Company"; 
InputInfo[15] = "Ecom_ShipTo_Postal_Street_Line1"; 
InputInfo[16] = "Ecom_ShipTo_Postal_Street_Line3"; 
InputInfo[17] = "Ecom_ShipTo_Postal_City"; 
InputInfo[18] = "Ecom_ShipTo_Postal_StateProv"; 
InputInfo[19] = "Ecom_ShipTo_Postal_PostalCode"; 
 InputInfo[20]="Ecom_ShipTo_Postal_CountryCode";
 InputInfo[21]="Ecom_ShipTo_Telecom_Phone_Number";
 InputInfo[22]="Ecom_ShipTo_Online_Emial";
 InputInfo[23]="Ecom_BillTo_Postal_Name_Prefix";
 InputInfo[24]="Ecom_ReceiptTo_Postal_Name_Prefix";
InputInfo[25]="Ecom_ReceiptTo_Postal_Name_First";
InputInfo[26]="Ecom_ReceiptTo_Postal_Name_Middle";
InputInfo[27]="Ecom_ReceiptTo_Postal_Name_Last";
InputInfo[28]="Ecom_ReceiptTo_Postal_Name_Suffix";
InputInfo[29]="Ecom_ReceiptTo_Postal_Company";
InputInfo[30]="Ecom_ReceiptTo_Postal_Name_First";
InputInfo[31]="Ecom_ReceiptTo_Postal_Street_Line1";
InputInfo[32]="Ecom_ReceiptTo_Postal_Street_Line2";
InputInfo[33]="Ecom_ReceiptTo_Postal_Street_Line3";
InputInfo[34]="Ecom_ReceiptTo_Postal_City";
InputInfo[35]="Ecom_ReceiptTo_Postal_StateProv";
InputInfo[36]="Ecom_ReceiptTo_Postal_PostalCode";
InputInfo[37]="Ecom_ReceiptTo_Postal_CountryCode";
InputInfo[38]="Ecom_ReceiptTo_Telecom_Phone_Number";
InputInfo[39]="Ecom_ReceiptTo_Online_Email";
InputInfo[40]="Ecom_Payment_Card_Name";
InputInfo[41]="Ecom_Payment_Card_Type";
InputInfo[42]="Ecom_Payment_Number";
InputInfo[43]="Ecom_Payment_Card_Verification";
InputInfo[44]="Ecom_Payment_Card_ExpDate_Day";
InputInfo[45]="Ecom_Payment_Card_ExpDate_Month";
InputInfo[46]="Ecom_Payment_Card_ExpDate_Year";
InputInfo[47]="Ecom_Payment_Card_Protocol";
InputInfo[48]="Ecom_ConsumerOderID";
InputInfo[49]="Ecom_User_ID";
InputInfo[50]="Ecom_User_Password";
InputInfo[51]="Ecom_SchemaVersion";
InputInfo[52]="Ecom_WalletID";



// JavaScript value to a JSON string
var json = JSON.stringify(finalInfoStr,InputInfo); 
//alert(json); 
return json;

}

