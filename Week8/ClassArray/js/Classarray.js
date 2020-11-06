var names = ["Ryder","Cody","Daniel","Andrew","Jasiu","Kyle","Leah","Harry","Aiden","Ronnie","Thomas","Jerry","Haiden","Emanuel","Kaidyn","David","Rowan","Maks","Liam","Stefan","Vaida"]
var i = 0
var chosen = 0

for (i = 0; i <= names.length -1; i++)
{
    document.write(i +1 + " . " + names[i]);
    document.write("</br>");
}

document.write ("</br>")

chosen = parseInt(prompt("Please choose a number between 1 and " + names.length));

if (chosen > names.length)
    parseInt(prompt("Please choose a number between 1 and " + names.length));
        else
            if (chosen < names.length)
                parseInt(prompt("Please choose a number between 1 and " + names.length));
                    else
                        if (chosen = names.length)
                        {
                            document.write(chosen + " . ");
                            document.write(names[chosen -1]);
                        }


