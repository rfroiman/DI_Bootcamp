class Plant:
    def __init__(self, type, size, is_blooming=False):
        self.type = type
        self.size = size
        self.is_blooming = is_blooming

    def grow(self):
        self.stop_blooming()
        if self.size == "small":
            self.size = "medium"
        elif self.size == "medium":
            self.size = "large"
        elif self.size == "large":
             self.size = "large"

    def bloom(self):
        self.is_blooming = True
        
    def stop_blooming(self):
        self.is_blooming = False

    def status(self):
        print(f"Type: {self.type}")
        print(f"Size: {self.size}")
        print(f"Blooming: {self.is_blooming}")
        print()


plants = [
    Plant("Rose", "small"),
    Plant("Sunflower", "medium"),
    Plant("Tulip", "small"),
    Plant("Orchid", "large"),
    Plant("Lily", "medium")
]

for plant in plants:
    plant.grow()
    plant.bloom()

for plant in plants:
    plant.status()

