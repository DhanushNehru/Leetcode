Useful Java Tips  

1. String.join() 
When you need to concatenate collections or arrays with a delimiter, 'String.join()' makes the task simple and clean—similar to '.join' in Python.  
Example:  
 
List<String> words = Arrays.asList("Java", "Spring", "React");  
String result = String.join(", ", words);  
System.out.println(result); // Output: Java, Spring, React  

Great for handling strings without manual loops or conditional checks.  

----------------------------

2. 'var' in Java  
Java 10 introduced 'var' for compile-time type inference. Unlike Python’s dynamic typing, 'var' relies on the compiler to infer the type from the assignment.  
Example:  
var name = "Leetcode"; // inferred as a String 
 
In Python, 
x = 10 //int 
x = "Hello" //now str
But Java’s 'var' is not like this— it’s type-safe.  

**Best Practices**:  
-> We can use 'var' when the type is obvious from the right hand side.  
  Example:  
  for (var entry : map.entrySet()) {  
      System.out.println(entry.getKey() + " -> " + entry.getValue());  
  }  

-> Avoid using 'var' when the type is ambiguous, as it may hurt readability. 

Not recommended 
var data = getData(); //what kind of data type? 
