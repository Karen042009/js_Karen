class Subject:
    def __init__(self):
        self.observers = []
        self._state = None

    def add(self, observer):
        self.observers.append(observer)

    def status(self, state):
        self._state = state
        for observer in self.observers:
            observer.update(self._state)


class Observer:
    def __init__(self, name):
        self.name = name

    def update(self, state):
        print(f"{self.name} - {state}")


subject = Subject()
obs1 = Observer("1_book")
obs2 = Observer("2_book")
subject.add(obs1)
subject.add(obs2)
subject.status("ON")
subject.status("OFF")
