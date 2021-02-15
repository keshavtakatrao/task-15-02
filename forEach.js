var request = new XMLHttpRequest;
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    data.forEach((element) => {
        console.log('Name : '+element.name+" Capital : "+element.capital+' Flag: '+element.capital);
    });
 
}