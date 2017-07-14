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

/*
Utmaning 2
1. skrivene funktion som iterativt löser fibonacci-talen fram till position N
2. skriv en funktion som recursivt löser fibonacci-talen fram till position N
3. skriv en funktion som löser fibonacci-talen fram till position N med hjälp av y-kombinatorn.
*/

/**
 * utmaning 3
 * 1. skriv en function som leter upp ett värde i en sorterad lista iterativt och returnerar positionen
 * 2. skriv en function som leter upp ett värde i en sorterad lista rekursivt och returnerar positionen
 * 3. skriv en function som leter upp ett värde i en sorterad lista rekursivt och returnerar positionen med hjälp av y-kombinatorn
 */

/**
 * Utmaning 4
 * 1. skriv en funktion som iterativt sorterar en lista enligt bubblesort-algoritmen
 * 2. skriv en funktion som rekursivt sorterar en lista enligt quicksort-algoritmen 
 * 3. skriv en funktion som rekursivt sorterar en lista enligt quicksort-algoritmen med hjälp av Y-kombinatorn
 */

/**
 * Utmaning 5
 * 1. skriv en funktion (map) som tar en lista och en funktion som argument och applicerar funktionen på varje element i listan och sedan returnerar den nya listan
 */

/**
 * Utmaning 6
 * 1. skriv en funktion (join) som returnerar resultatet av en annan funktion applicerad på en reduktion och varje element i en lista.
 */

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
