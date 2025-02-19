/*
for ( let i =0; i< 10; i++ ) {

setTimeout(()=>console.log(i), 1000);

}
*/

function delay(){
return new Promise((resolve)=>setTimeout(resolve,1000))
}

(async function(){
for(let i = 0; i<10; i++) {
 console.log(i)
 await delay();
}
})()
