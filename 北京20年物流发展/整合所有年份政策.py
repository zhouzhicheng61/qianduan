import os

years = [
    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
    '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018',
    '2019', '2020', '2021', '2022'
]

# years = ['2001']
level = "北京"
fileNames = []
for year in years:
    txtContents = ""
    path = f"F:\课题\北京20年物流发展\政策\{year}\{level}"
    for files in os.walk(path):
        fileNames = files[2]
        for fileName in fileNames:
            with open(path + f"\{fileName}", encoding='ANSI') as file:
                content = file.read()
                txtContents += content.rstrip()
    outPutFileName = f"F:\课题\北京20年物流发展\政策\年份整合\北京\{year}.txt"
    with open(outPutFileName, 'w') as file:
        file.write(txtContents)

for files in os.walk("F:\课题\北京20年物流发展\政策\年份整合\北京"):
    fileNames = files[2]
    tempContents = ""
    for fileName in fileNames:
        with open(f"F:\课题\北京20年物流发展\政策\年份整合\北京\{fileName}",
                  encoding='ANSI') as file:
            content = file.read()
            tempContents += content.rstrip()
    outPutFileName = "F:\课题\北京20年物流发展\政策\年份整合\北京\汇总.txt"
    with open(outPutFileName, 'w') as file:
        file.write(tempContents)