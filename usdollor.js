var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    var count =data.filter((item)=>{
        for(i in item.currencies){
            return item.currencies[i].code=='USD';
        }
    
    })
    console.log(count);
}
