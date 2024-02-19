function make_shirt2(size: string = 'large', msg: string) {
    return `i love typescript`

}


function make_shirt3(msg: string,size: string = 'large') {
    if (size == 'large' || size == 'medium')
        return "i love typescript"
    else if(size == 'small'){
        return 'cool shirt /3'
    }

}


console.log(make_shirt3('','small'))