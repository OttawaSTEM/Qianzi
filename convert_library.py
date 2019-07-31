import csv, json


def convert_library():
    csv_read = ''
    write_buffer = []
    with open('qianzi_word.csv', encoding='utf8') as rfile:
        csv_reader = csv.reader(rfile, delimiter=',')


        for row in csv_reader:
            # print(row[0].split('，'))
            # print(row[1])
            write_buffer.append(row[1].strip())

    print(write_buffer)
    print(len(write_buffer))

    with open('library_d.json', 'w', encoding='utf8') as wfile:
        json.dump(write_buffer, wfile)

def verify_library():
    with open('library_d.json', encoding='utf8') as rfile:
        data = json.load(rfile)
        print(data[0])
        print(data[299])
        print(len(data))



if __name__ == "__main__":
    # convert_library()
    verify_library()