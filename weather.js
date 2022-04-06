async function weather()
{
    let cityname=document.getElementById("test");
    let url='https://api.openweathermap.org/data/2.5/weather?q='+cityname.value+'&appid=14b6b4b1906c00b0d4956c64498f76ad';
 const res=await fetch(url);
 let data=await res.json();
 console.log(data);
 let { main:{temp,temp_min,temp_max}}=data;
 console.log("temp: "+temp);
 console.log("temp_min: "+temp_min);
 console.log("temp_max: "+temp_max);
}
 