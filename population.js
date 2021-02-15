var request = new XMLHttpRequest;
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    var population = data.filter((item)=>{
        return item.population<200000;
    })
    console.log(population);
}