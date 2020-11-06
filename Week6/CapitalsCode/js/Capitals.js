var countryChoice = prompt("Please choose a Country from the following:
Italy,
Ireland,
New Zealand,
Scotland);

/*
Italy - Rome
Ireland - Dublin
New Zealand - Wellington
Scotland - Edinburgh
*/

if (countryChoice == 'Italy')
    {
        document.getElementById("capital").innerHTML = "The capital city of Italy is Rome";
    }
        else if (countryChoice == 'Ireland')
        {
            document.getElementById("capital").innerHTML = "The capital city of Ireland is Dublin";
        }
            else if (countryChoice == 'New Zealand')
            {
                document.getElementById("capital").innerHTML = "The capital city of New Zealand is Wellington";
            }
                else if (countryChoice == 'Scotland')
                {
                    document.getElementById("capital").innerHTML = "The capital city of Scotland is Edinburgh";
                }