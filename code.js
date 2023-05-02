var keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ç']

var letters = keys.length
var button = document.createElement('button')


for (var i = 0; i < keys.length; i++) {
    var divb = document.createElement('div')
    document.write(keys[i])
    document.getElementById('keyBoard').appendChild(divb)
    divb.setAttribute("id",i)
    var button = document.createElement('button')
    document.getElementById(i).appendChild("divb")
}