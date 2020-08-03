
  a=Math.random()*(-100-100)+100;
  a=Math.round(a);
  b=Math.random()*(-100-100)+100;
  b=Math.round(b);
  c=Math.random()*(-100-100)+100;
  c=Math.round(c);
  d=Math.random()*(-100-100)+100;
  d=Math.round(d);
  var arreglo  = [a,b,c,d];
  function mostrar(){

    maximo = 0;
    document.write("numeros aleatorios"+"  =>  "+arreglo)
    document.write("<br>")

 

for(var i=0;i<=7;i++){
    if(maximo < arreglo [i]){
        maximo = arreglo [i];
    }
}
document.write("numero mayor"+"  =>  "+maximo)
document.write("<br>")
document.write("arreglor ordenado"+"  => "+arreglo.sort())

    }
  
