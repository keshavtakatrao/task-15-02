var request = new XMLHttpRequest;
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    var total = data.reduce((acc,item)=>(acc+item.population),0)
    console.log(total);
}