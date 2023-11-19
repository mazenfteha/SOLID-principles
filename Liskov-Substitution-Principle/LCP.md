## Liskov Substitution Principle LSP
- states that any class should be substitutable for its parent class without unexpected consequences. In others words, if the classes Cat and Dog extend the class Animal, then we would expect all of the functionality held within the Animal class to behave normally for a Cat and Dog object.
- objects of a superclass should be able to be replaced with objects of a subclass without affecting the correctness of the program. In other words, if a class is a subclass of another class, it should be able to be used interchangeably with its superclass without altering the desired behavior.
- if you have class B inhertis from class A then class A should be replaceable by class B without any changes
