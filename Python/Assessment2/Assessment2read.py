import csv

with open('Python/Assessment2/Supplementary File.csv') as csvfile:
    readCSV = csv.reader(csvfile,delimiter=',')
    firstns = []
    marks = []
    surns = []
    for row in readCSV:
        firstn = row[0]
        mark = row[2]
        surn = row[1]

        firstns.append(firstn)
        surns.append(surn)
        marks.append(mark)

    print(firstns)
    print(surns)
    print(marks)
