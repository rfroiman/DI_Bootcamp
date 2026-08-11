import math


class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            self.radius = 0

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle: radius={self.radius}, diameter={self.diameter}, area={self.area():.2f}"

    def __repr__(self):
        return f"Circle(radius={self.radius})"

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    def __gt__(self, other):
        return self.radius > other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def __lt__(self, other):
        return self.radius < other.radius


# Create circles
circle1 = Circle(radius=5)
circle2 = Circle(diameter=12)
circle3 = Circle(radius=3)
circle4 = Circle(diameter=20)


# Print circles
print(circle1)
print(circle2)
print(circle3)
print(circle4)


# Calculate area
print("Area:", circle1.area())


# Add two circles
circle5 = circle1 + circle3
print("Added:", circle5)


# Compare circles
print("Circle 1 > Circle 2:", circle1 > circle2)
print("Circle 1 == Circle 3:", circle1 == circle3)


# Sort circles
circles = [circle1, circle2, circle3, circle4]

circles.sort()

print("Sorted circles:")

for circle in circles:
    print(circle)