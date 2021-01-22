import csv

with open('Python/file_read_write/example.csv') as csvfile:
    readCSV = csv.reader(csvfile, delimiter=',') #opens a link to read the csv test file
    dates = [] #creates an empty array
    colors = [] #creates an empty array
    for row in readCSV:
        color = row[3] #read data in column
        date = row[0] #read data in column
        #append into array as reads each line of CSV file
        dates.append(date)
        colors.append(color)
    #Print the arrays.
    print(dates)
    print(colors)

