var i = 0, x= 1, goofy, lastnr = -1, bestTime = 1, ended = false, czas1 = Date.now()
function interwal (){
    i++;
    document.getElementById("tekst").innerHTML = i
    if((i.toString().includes("7"))|| i%7 == 0)
        czas1 = Date.now()
    if ((((i - 1).toString().includes("7"))|| (i - 1)%7 == 0) && lastnr != i-1) {
        document.getElementById("czas").innerHTML = "Ominąłeś dzika! Pregrałeś!"
        end()
    }

}
function ustawCzas(){
    x = prompt("Podaj szybkość wyświetlania liczb (w sekundach)")
    zmienCzas()
}

function zmienCzas(){
    if (i != 0){
        clearInterval(goofy)
        goofy = setInterval(interwal,(x*1000))
    }
    
}

function start(){
    i = 0
    document.getElementById("tekst").innerHTML = i
    document.getElementById("czas").innerHTML = "-"
    document.getElementById("best").innerHTML = "Best time: -";
    bestTime = 1
    lastnr = 0
    clearInterval(goofy)
    goofy = setInterval(interwal,(x*1000))
    ended = false
}

function end() {
    clearInterval(goofy)
    ended = true
}

function roznica(){
        var czas2 = Date.now() - czas1
        var time = (Math.round((czas2/1000.00)*100)/ 100)
        if (!((i.toString().includes("7"))|| i%7 == 0) && !ended) {
            document.getElementById("czas").innerHTML = "To nie dzik! Pregrałeś!"
            end()
        }
        else if (lastnr != i && !ended) document.getElementById("czas").innerHTML = time.toString() + " s"
        if (time < bestTime && !ended) {bestTime = time}
        document.getElementById("best").innerHTML = "Best time: " + bestTime;
        lastnr = i
}