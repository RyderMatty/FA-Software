var Basic_salary = 0;
var Bonus = 0;
var Tax_free_allowance = 40000;
var Taxable_income = 0;
var Tax_rate = 0;
var Weekly_income = 0;

Basic_salary = parseInt(prompt("Input your basic salary"));

Bonus = parseInt(prompt("Input your bonus"));


Taxable_income = (Basic_salary + Bonus);

Tax_rate = Taxable_income * 0.25;

if (Taxable_income >= Tax_free_allowance)
    {
        document.write("Since " + Taxable_income + " is more than the 40000, then Tax rate is = " + Tax_rate);
    }
    else
        if (Taxable_income <= 40000)
            {
                document.write("Since " + Taxable_income + " is less than 40000 than you have no tax");
            }

Weekly_income = Taxable_income / 52;
    document.write("Your weekly income is " + Weekly_income);
