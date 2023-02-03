var name1 = prompt ("Введите имя Козы")
var name2 = prompt ("Введите имя Козлёнка1")
var name3 = prompt ("Введите имя Козлёнка2")
var name4 = prompt ("Введите имя Козлёнка3")
var name5 = prompt ("Введите имя Козлёнка4")
var name6 = prompt ("Введите имя Козлёнка5")
var name7 = prompt ("Введите имя Козлёнка6")
var name8 = prompt ("Введите имя Козлёнка7")
var name9 = prompt ("Введите имя Волка")
var name10 = prompt ("Введите имя Сказочник")
alert (`${name1}
${name2}
${name3}
${name4}
${name5}
${name6}
${name7}
${name8}
${name9}
${name10}`)

let div = document.createElement('div')

div.innerHTML = `Ты -` + `${name2}`
document.body.append(div)



elementList = document.querySelectorAll("p");
for (let i = 0; i < elementList.length; i++){
    console.log(elementList[i].innerHTML)
    if(elementList[i].innerHTML== 'КОЗА :'){
        elementList[i].innerHTML= name1
    }
    if(elementList[i].innerHTML== 'ВОЛК :'){
        elementList[i].innerHTML= name9
    }
    if(elementList[i].innerHTML== 'СКАЗОЧНИК :'){
        elementList[i].innerHTML= name10
    }
    if(elementList[i].innerHTML== '1-Й КОЗЛЕНОК :'){
        elementList[i].innerHTML= name2
    }
    if(elementList[i].innerHTML== '2-Й КОЗЛЕНОК :'){
        elementList[i].innerHTML= name3
    }
    if(elementList[i].innerHTML== '3-Й КОЗЛЕНОК :'){
        elementList[i].innerHTML= name4
    }
    if(elementList[i].innerHTML== '4-Й КОЗЛЕНОК :'){
        elementList[i].innerHTML= name5
    }
    if(elementList[i].innerHTML== '5-Й КОЗЛЕНОК :'){
        elementList[i].innerHTML= name6
    }
    if(elementList[i].innerHTML== '6-Й КОЗЛЕНОК :'){
        elementList[i].innerHTML= name7
    }
    if(elementList[i].innerHTML== '7-Й КОЗЛЕНОК :'){
        elementList[i].innerHTML= name8
    }
}
