import pdfplumber
import os


def toTextFile(year, level, field, path, fileName):
    pdf = pdfplumber.open(path + "\\" + fileName)
    pages = pdf.pages
    txt = ""
    for each in pages:
        txt += each.extract_text()
    outputPath = path + "\\" + fileName[:-4] + ".txt"
    print(txt)
    with open(outputPath, 'w', encoding='ANSI') as file1:
        print(txt, file=file1)


year = "2022"
level = "北京"
field = "物流"
path = f"F:\课题\北京20年物流发展\政策\{year}\{level}\{field}"
fileNames = []

for i in os.walk(path):
    fileNames = i[2]

for j in range(len(fileNames)):
    toTextFile(year, level, field, path, fileNames[j])
