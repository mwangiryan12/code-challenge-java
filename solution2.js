
let speed=80
let speedlimit=70
let points=Math.floor((speed-speedlimit)/5)
if(speed<=70){
    console.log('OK')
} else if(points>=12){
    console.log('license suspended')
}else if(speed>70){
    console.log('points:' + points)
}


























