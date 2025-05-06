import xmltodict
import json

with open("example.xml") as xml_file:
    data_dict = xmltodict.parse(xml_file.read())

json_data = json.dumps(data_dict, indent=2)
print(json_data)
