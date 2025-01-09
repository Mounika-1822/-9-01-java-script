// Create a list of items(ul) using createElement and appendChild
var list=document.createElement("ul");
var item1=document.createElement("li");
item1.innerText="html";
var item2=document.createElement("li");
item2.innerText="css";
var item3=document.createElement("li");
item3.innerText="javascript";
var item4=document.createElement("li");
item4.innerText="nodejs";
var item5=document.createElement("li");
item5.innerText="reactjs";
list.append(item1,item2,item3,item4,item5);
document.body.appendChild(list);
var hr=document.createElement("hr");
document.body.appendChild(hr);

//Create a paragraph inside a div and append it to the body

var div=document.createElement("div");
var para=document.createElement("p");
para.innerText="JavaScript is a cross-platform, object-oriented programming language used by developers to make web pages interactive";
div.appendChild(para);
document.body.appendChild(div);
var hr=document.createElement("hr");
document.body.appendChild(hr);

//Build a nested structure and append to the body

var div=document.createElement("div");
var h1=document.createElement("h1");
h1.innerText="About javascript";
var p=document.createElement("p");
p.innerText="JavaScript is a versatile, dynamically typed programming language used for interactive web applications, supporting both client-side and server-side development, and integrating seamlessly with HTML, CSS, and a rich standard library";
div.append(h1,p);
document.body.appendChild(div);
var hr=document.createElement("hr");
document.body.appendChild(hr);

//Genearte a table row and append to body

var table=document.createElement("table");
var tr=document.createElement("tr");
var td1=document.createElement("td");
td1.innerText="cell 1";
var td2=document.createElement("td");
td2.innerText="cell 2";
var td3=document.createElement("td");
td3.innerText="cell 3";
tr.append(td1,td2,td3);
table.appendChild(tr);
document.body.appendChild(table);
var hr=document.createElement("hr");
document.body.appendChild(hr);

//Add multiple buttons and append to body

var div=document.createElement("div");
var button1=document.createElement("button");
button1.innerText="Button 1";
var button2=document.createElement("button");
button2.innerText="Button 2";
var button3=document.createElement("button");
button3.innerText="Button 3";
div.append(button1,button2,button3);
document.body.appendChild(div);