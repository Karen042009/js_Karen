class Singleton:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self, value=None):
        self.value = value


a = Singleton(4)
b = Singleton(5)

print(a.value)
print(b.value)
print(a is b)
