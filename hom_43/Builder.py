class HouseBuilder:
    def __init__(self):
        self.house = {}

    def buildWalls(self):  # պատ
        self.house["walls"] = True
        print("Created walls.")

    def buildDoors(self):  # դուռ
        self.house["doors"] = True
        print("Created doors.")

    def buildWindows(self):  # պատուհան
        self.house["windows"] = True
        print("Created windows.")

    def buildRoof(self):  # տանիք
        self.house["roof"] = True
        print("Created roof.")

    def buildGarage(self):  # ավտոտնակ
        self.house["garage"] = True
        print("Created garage.")

    def getResult(self):
        return self.house

builder = HouseBuilder()
builder.buildWalls()
builder.buildDoors()
builder.buildWindows()
builder.buildRoof()
builder.buildGarage()

result = builder.getResult()
print(result)
