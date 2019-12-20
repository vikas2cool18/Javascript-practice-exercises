let a = [{name:"htc", stock:25}, {name: "nokia", stock:1000}];
const b = [{name:"htc", stock:25}, {name: "nokia", stock:1000}, {name:"apple", stock:200}]

function updateInventory(a,b) {
    b.forEach(function(item) {
        let aItems = a.find(function(item1){
            return item1.name == item.name;
            }); 
            console.log(aItems);
            if(aItems) {
                aItems.stock+=item.stock;
            } else {
                a.push(item);
            }
    })
    
   return a;
}

console.log(updateInventory(a,b));