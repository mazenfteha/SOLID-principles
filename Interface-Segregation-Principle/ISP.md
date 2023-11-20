## Interface Segregation Principle ISP 
- interface here mean what client see and use.
- clients should not to be forced to depend on methods they dont use
- The interface segregation principle states that an entity should never be forced to implement an interface that contains elements which it will never use. For example, a Penguin should never be forced to implement a Bird interface if that Bird interface includes functionality relating to flying, as penguins (spoiler alert) cannot fly.
- The Interface Segregation Principle (ISP) states that a class should not be forced to implement interfaces it does not use. In other words, it's better to have multiple small, specific interfaces rather than a large, general-purpose one. This helps to avoid forcing classes to implement methods they don't need.