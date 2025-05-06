class Coffee:
    def cost(self):
        return 100


class SugarDecorator:
    def __init__(self, coffee):
        self.coffee = coffee

    def cost(self):
        return self.coffee.cost() + 10


coffee = Coffee()
print(coffee.cost())
coffee_with_sugar = SugarDecorator(coffee)
print(coffee_with_sugar.cost())
