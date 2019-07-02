var source = $("#template_paisesAll").html();
var template = Handlebars.compile(source);

Handlebars.registerHelper("enumeracion",function(pval,operador,sval){
   pval = parseFloat(pval);
   sval = parseFloat(sval);

   var operaciones ={
       '+': pval + sval,
       '-': pval - sval,
       '*': pval * sval,
       '/': pval / sval
   }

   return operaciones[operador];
});

$.ajax({
    url:"https://restcountries-v1.p.rapidapi.com/all",
    type:"GET",
    datatype:"json",
    headers:{'X-RapidAPI-Key':'9cf42aa0b3msha9ae1a71ac4d6d4p1b1d37jsn926848524200'}
}).done(function(data){
    //console.log(data);
    var html = template({'paises':data});
    $("#contenedor").html(html);
}).fail(function(){
    console.log("error");
}).always(function(){
    console.log("completo");
});

var personas =[
    {'nombre':'Jairo','apellido':'Palacios R','correo':'jarryj.palacios@gmail.com'},
    {'nombre':'Jarry','apellido':'Palacios Rivas','correo':'palacios@gmail.com'},
    {'nombre':'Javier Alfonso','apellido':'Palacios','correo':'japalacios@gmail.com'},
]





