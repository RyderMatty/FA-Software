var planet_names = ["Mercury","Venus","Earth","Mars","Jupitar","Saturn","Uranus","Neptune","Pluto"]
var distance = ["35 million","67 million","93 million","142 million","484 million","889 million", "1079 million", "2800 million","3670 million"]
var i = 0

for (i = 0; i <= 8; i++)
{
    document.write( planet_names[i] + " is " + distance[i] + " from the Sun.")
    document.write("</br>")
}