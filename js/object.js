$(document).ready(function(){
    var JSONObj = { "firstname" : "naveen", "lastname":"kumar" ,"age"  : 25 };
    $("div").append("Name = "+JSONObj.firstname+"<br>");
    $("div").append("LastName = "+JSONObj.lastname+"<br>");
    $("div").append("Age = "+JSONObj.age+"<br>");
});