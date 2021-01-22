import csv

#open the CSV file so text can be written to the file
with open('Python/file_read_write/write_stuff.csv', mode='w') as write_stuff_file:
    employee_writer = csv.writer(write_stuff_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL) 

    employee_writer.writerow(['10/01/2021', 'Spent', '200.00']) #writes 1 row of data to the csv file with 3 columns of data
    employee_writer.writerow(['10/01/2021', 'Spent', '400.00']) #writes 1 row of data to the csv file with 3 columns of data
    employee_writer.writerow(['11/01/2021', 'Spent', '500.00'])