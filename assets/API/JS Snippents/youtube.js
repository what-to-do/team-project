$(document).ready(function(){

var word = "cat";

var key = "AIzaSyBrQuQ65KpeO3KvEZ6zdmU7psymimrU6Is";

var query_url = "https://www.googleapis.com/youtube/v3/search?part=snippet%2Cid&q=" + word +"&key=" + key ;

console.log(query_url);

$.ajax({

    url: query_url,
    method: "GET"

}).done(function(response){

    console.log(response);

}); // End of Ajax Request / Done Function










}); // End of Document Ready Function
