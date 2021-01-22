import csv

with open('Python/Assessment2/Supplementary File 2.csv', mode='a') as write_stuff_file:
    student_writer = csv.writer(write_stuff_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    student_writer.writerow(['Kai','Brooks','134'])