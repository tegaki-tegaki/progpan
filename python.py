class MyClass:
    "This is my class"
    a = 10
    def func(self):
        print(f'Hello {self.a}')

    def __init__(self, a):
        self.a = a

# Output: 10
print(MyClass.a)

object_instance_1 = MyClass(2)
oi_five = MyClass(5)

object_instance_1.func()
oi_five.func()
