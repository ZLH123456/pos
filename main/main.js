'use strict';

function printReceipt(inputs) {

let receipItem=loadAllItems();
    let itemStrings=[];
    let counts=0;
    receipItem.count=0;
    for(let index=0;index<receipItem.length;index++){
        for(let i=0;i<inputs.length;i++){
            if(receipItem[index].barcode===inputs[i]) {
                counts++;
            }
            else{continue;}
        }
        receipItem[index].count=counts;
        counts=0;
    }
    for(let l=0;l<receipItem.length;l++){
        if(receipItem[l].count>=1){
        itemStrings.push({
        barcode:receipItem[l].barcode,
        name:receipItem[l].name,
        unit:receipItem[l].unit,
        price:receipItem[l].price,
        count:receipItem[l].count,
        subTatal:receipItem[l].count*receipItem[l].price
    });}
    else{continue;}
    }
 return itemStrings;
}
function buildSingleItem(itemString) {
    return `商品编码:${itemString.barcode}，名称:${itemString.name}，数量:${itemString.count}${itemString.unit}，单价:${itemString.price.toFixed(2)}(元)，小计:${itemString.subTatal.toFixed(2)}(元)`;

