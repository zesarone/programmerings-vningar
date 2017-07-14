var Y = f => (
    (g => (f((...x) => g(g)(...x))))
        (g => (f((...x) => g(g)(...x))))
)

/*
Utmaning 1
1. skriv en funktion iterativt som löser fakulteten av talet N
2. skriv en funktion rekursivt som löser fakulteten av talet N
3. skriv en funktion löser fakulteten av talet N med hjälp av y-kombinatorn.
*/

var fac1 = (n) => {
    var res = 1
    while (n > 0) {
        res = res * n
        n--
    }
    return res
}

var fac2 = n => n == 1 ? n : n * fac2(n - 1)

var fac3 = Y(f => (n => (n > 1 ? n * f(n - 1) : n)))

/*
Utmaning 2
1. skrivene funktion som iterativt löser fibonacci-talen fram till position N
2. skriv en funktion som recursivt löser fibonacci-talen fram till position N
3. skriv en funktion som löser fibonacci-talen fram till position N med hjälp av y-kombinatorn.
*/

var fib1 = (n) => {
    res = [1, 1]
    for (let i = 2; i <= n; i++) {
        res[i] = res[i - 1] + res[i - 2]
    }
    return res
}

var fib2 = (n) => {
    let h = (i) => i <= 1 ? 1 : h(i - 1) + h(i - 2)
    return n <= 0 ? [h(0)] : [].concat(fib2(n - 1)).concat(h(n))
}

var h = Y(f => (i => i <= 1 ? 1 : f(i - 1) + f(i - 2)))
var fib3 = Y(f => (n => (n <= 0 ? [1] : [].concat(f(n - 1)).concat(h(n)))))

/**
 * utmaning 3
 * 1. skriv en function som leter upp ett värde i en sorterad lista iterativt och returnerar positionen
 * 2. skriv en function som leter upp ett värde i en sorterad lista rekursivt och returnerar positionen
 * 3. skriv en function som leter upp ett värde i en sorterad lista rekursivt och returnerar positionen med hjälp av y-kombinatorn
 */
var find1 = (val, list) => {
    var i = 0, found = false
    for (; i <= list.length; i++) {
        found = list[i] === val
        if (found)
            break;
    }
    return found ? i : false;
}
var find2 = (val, list, i) => val === list[0] ? (i ? i : 0) : (list.length <= 1 ? false : find2(val, list.slice(1), (i ? i : 0) + 1))

var find3 = Y(f => ((val, list, i) => val === list[0] ? (i ? i : 0) : (list.length <= 1 ? false : f(val, list.slice(1), (i ? i : 0) + 1))))

/**
 * Utmaning 4
 * 1. skriv en funktion som iterativt sorterar en lista enligt bubblesort-algoritmen
 * 2. skriv en funktion som rekursivt sorterar en lista enligt quicksort-algoritmen 
 * 3. skriv en funktion som rekursivt sorterar en lista enligt quicksort-algoritmen med hjälp av Y-kombinatorn
 */

var bubblesort = (list, cmp) => {
    let swap = (i1, i2) => {
        var temp = list[i1]
        list[i1] = list[i2]
        list[i2] = temp
    }
    cmp = cmp ? cmp : (a, b) => a < b
    for (let i = 0; list.length > i; i++) {
        let smalest = i;
        for (let j = i; list.length > j; j++) {
            smalest = cmp(list[smalest], list[j]) ? smalest : j;
        }
        swap(i, smalest);
    }
    return list;
}

var quicksort = (list, cmp) => {
    cmp = cmp ? cmp : (a, b) => a < b
    if (list.length < 2)
        return list
    else {
        let left = [], right = [], pivot = list.shift(1),    partion = (list,pivot)=>{
            if (list.length < 1)
                return
            if (cmp(list [0],pivot))
                left.push(list[0])
            else
                right.push(list[0])
            partion(list.splice(1), pivot)
        }
        partion(list,pivot)        
        return [].concat(sort2(left) ).concat( pivot ).concat( sort2(right) ) 
    }
}

/**
 * Utmaning 5
 * 1. skriv en funktion (map) som tar en lista och en funktion som argument och applicerar funktionen på varje element i listan och sedan returnerar den nya listan
 */

var map = (list,fn,i=0) => {
    if(list.length < 1){
        return []
    }else{
        return [].concat(fn(list[0],i)).concat(map(list.slice(1),fn,i+1))
    }
}

/**
 * Utmaning 6
 * 1. skriv en funktion (join) som returnerar resultatet av en annan funktion applicerad på en reduktion och varje element i en lista.
 */

var join = (list,fn,init) => {
    if(list.length < 1)
        return init
    else
        return fn(join(list.slice(1),fn,init),list[0])
}

/**
 * Utmaning 7
 * 1. skriv en funktion "pair" som skapar ett objekt med två element, "first()" och "rest()"
 * 2. skriv en funktion "list" som länkar tillsamans alla element i en array med hjälp av funktionen pair
 * 3. skriv nu om funktionen "pair" så att värdena i pair sparas i ett closure
 * 4. skriv en funktion "reverse" som vänder på en "list" 
 * 5. skriv en funktion "map" som applicerar en funktion på varje "pair" i en "list"
 * 6. skriv en funktion "join" som returnerar resultatet av en annan funktion applicerad på en reduktion och varje "pair" i en "list"
 * 7. skriv en funktion "sort" som sorterar en "list" med merge sort
 */

function pair(a,b) {
    this.first = ()=>a
    this.rest = ()=>b
    return this
}
var isPair = (a)=> a && a.constructor && a.constructor.name && a.constructor.name === 'pair'
var list = (arr) => {
    if(arr.length === 0)
        return undefined
    else
        return new pair(arr[0],list(arr.slice(1)))
}
pair.prototype.reverse = function(tail){        
    if(!isPair(this.rest()))
        return new pair(this.first(),tail)
    else
        return this.rest().reverse(new pair(this.first(),tail))
}
pair.prototype.map = function(fn) {
    return !isPair(this.rest()) ? 
        new pair(fn(this.first()), this.rest() ? fn(this.rest()) : this.rest()) : 
        new pair(fn(this.first()), this.rest().map(fn))
}
pair.prototype.join = function(fn,start) {
    return !isPair(this.rest()) ? 
        fn(this.first(), this.rest()?fn(this.rest(),start):start ) :
        fn(this.first(),this.rest().join(fn,start))
}
pair.prototype.length = function(i=1){
    return (isPair(this.rest())) ? this.rest().length(i+1) : i
}
pair.prototype.toString = function(){
    return this.join((e,r )=>'('+e+' . '+r+')','')
}

pair.prototype.sort = function(cmp){
    
    cmp = !cmp ? (a,b) => a < b : cmp

    let left, right, flip=true

    this.map((el)=>{ // split in left and right
        if(flip)
            left = new pair(el,left)
        else
            right = new pair(el,right)
        flip = !flip
        })

    var merge = (a,b) => {
        return !isPair(a) ? b : (
            !isPair(b) ? a : (
                cmp(a.first(),b.first()) ? 
                    new pair (a.first(),merge(a.rest(),b)) :
                    new pair (b.first(),merge(a,b.rest()))))        
    }

    return merge(
        !isPair(left.rest())?left:left.sort(cmp),
        !isPair(right.rest())?right:right.sort(cmp))    
}