import os

years = [
    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
    '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018',
    '2019', '2020', '2021', '2022'
]
level = "北京"
fileNames = []
for year in years:
    path = f"F:\课题\北京20年物流发展\政策\{year}\{level}"
    for files in os.walk(path):
        print(year, len(files[2]))