let n=5;let count=0;
for(let i=1;i<n;i++){
if(i%2==0){

count++;
}
}
if(count>2){
console.log("not a prime");
}
else{
console.log("prime");
}