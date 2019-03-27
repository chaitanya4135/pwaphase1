function loadJson(file,callback)
 {
  var xhr=new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()
  {
    if(xhr.readyState=== 4 && xhr.status=="200")
    {
    callback(xhr.responseText);
    }
}
xhr.send();
}

loadJson("dynamic.json",function(text)
{
  let data=JSON.parse(text);
  console.log(data);
profile(data.profile);
career(data.career);
education(data.education);
skills(data.skills);
})

//here h0 is the child1 variable
var h0=document.querySelector(".child1");
function profile(p)
{
  var image=document.createElement("img");
  image.src=p.image;
  h0.append(image);

  var h1=document.createElement("h1");
  h1.textContent=p.name;
  h0.append(h1);

  var h2=document.createElement("h2");
  h2.textContent=p.design;
  h0.append(h2);
  var h3=document.createElement("h3");
  h3.textContent=p.mobile;
  h0.append(h3);

  var h4=document.createElement("h3");
  h4.textContent=p.email;
  h0.append(h4);

   }
   //here v0 is the child1 variable
   var v0=document.querySelector(".child2");
   function career(p1)
    {
     var v1=document.createElement("h1");
     v1.textContent="CAREER OBJECTIVE";
     v0.append(v1);

     var hr=document.createElement("hr");
     v0.append(hr);

    var v2=document.createElement("h2");
    v2.textContent=p1.info;
    v0.append(v2);
  }

   //here v0 is the child1 variable
function education(z0)
 {
  var z1=document.createElement("h1");
  z1.textContent="EDUCATION DETAILS";
  v0.append(z1);

  var hr=document.createElement("hr");
  v0.append(hr);

  var table=document.createElement("table");
  table.border="4;"
  var tr1="<tr><th>institute</th><th>qualification</th><th>percentage</th><th>yop</th></tr>";
  var tr2=" ";
  for(var i=0;i<z0.length;i++)
  {

    tr2=tr2+"<tr><td>"+z0[i].institute+"</td><td>"+z0[i].qualification+"</td><td>"+z0[i].percentage+"</td><td>"+z0[i].yop+"</td></tr>";
  }
  table.innerHTML=tr1+tr2;
  v0.append(table);


  }
     //here v0 is the child1 variable
  function skills(s0)
  {

var rr=document.createElement("h1");
rr.textContent="SKILLS";
v0.append(rr);

var hr=document.createElement("hr");
v0.append(hr);

var ul=document.createElement("ul");
for(var i in s0)
{
  var li=document.createElement("li");
  li.innerHTML=s0[i].name+":"+s0[i].info;
  ul.append(li);
}
v0.append(ul);
  }
