const goceries=['milk','bread','eggs','flour','sugar']
const searchforitems =(items)=>{
    for (let i=0;i<goceries.length;i++){
        if (goceries[i]==items){
            console.log(`Found ${items}`)
         
        }
    }
}
searchforitems("eggs")