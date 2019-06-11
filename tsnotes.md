# TypeScript Features
1. Typed-JavaScript
2. Used by all modern JS Libs and Frwks
3. Build upon ES 6
4. Created by Microsoft
5. Compiled into JavaScript (Default to ES 5)
6. Configured through the tsconfig.json file for Compilation and feature support
7. Angular is implemented using TypeScript
8. All popular JabaScript Libs and Frwks are haing TypeDefinitions using TypeScript. <LIBName>.d.ts
9. Classical language that supports Server-Side Node.js and Front-End eventing system for HTML aka Isomorphic Apps  

#=============================================================================
# ES 6 Languages
1. JavaScript aka High-Level-JavaScript aka ES 6
2. TypeScript
3. Dart
4. ES  Library Versions
   1. ES 2015 is ES 6
   2. ES 2016 is ES 7
   3. ES 2018 is ES 8
#=============================================================================
# ES 6 Features
1. Local Scopes aka Function or Block Scope
2. Data Types (Only Implemenetd by TypeScript)
3. Rest Parameters
4. Union Types (Only Implemenetd by TypeScript)
5. Array as a Class
6. Template String
7. Arrow Operators aka Arrow Symbol
8. Class
   1. Constructor Enhancements (Only Implemenetd by TypeScript)
   2. Generics (Only Implemenetd by TypeScript)
   3. Interfaces (Only Implemenetd by TypeScript)
   4. Inheritance
   5. No-polimorphism
9.  Modules
10. Promises
11. Core TypeScript Features to Enhance ES 6
    1.  Tuples like a dictionary 

#=============================================================================

# Applicaiton Configuration
1. package.json file
   1. Application config file for Forn-End app develooment aka The application that uses various JavaScript Packages
   2. The npm init -y command 
      1. Create pakcage.json with defaults
   3. The npm init command
      1. Provides a command-line wizard to create a package.json
2. TypeScript Package for Library and Runtime
   1. npm install -g typescript
      1. Installs TypeScript in global scope and provides the 'tsc' command-line tool
      2. The tsc is typescript transpiler tool
         1. Transform .ts file into .js file after compilation
      3. The tsc -init commnad generate tsconfig.json file
         1. Contains the TypeScript configuration for the project
#============================================================================= 

# TypeScript Programming
1. The 'let' keyword for Block-Scope    
   1. This will scope the declaration within the code-block, the variable will be inaccessible out of the declaring block
   2. In JavaScript 'var' is fucntion scope because of it it is accessible across the function
2. The DataType or Static Type System
   1. number
      1. integer and Floating points
   2. string
   3. boolean
   4. date
   5. Object
   6. any
      1. Late binding for data declarations to assign any data to it.
   7. type
3. Iterators
   1. Loops for iterating over collections based on index
   2. The standard for..loop, IN ES 3, ES 5, ES 6....
   3. The for..in loop, simplication of for..loop
   4. The for..of loop, new in ES 6 and it is used as iterator
4. Array
   1. 1-D collection
   2. Implicit Array Declaration
      1. let arr = [];
   3. Explicit Array Declarations
      1. let arr:Array<T> = new Array<T>();
      2. T is generic type parameter
   4. Array Methods and Properties
      1. properties 
         1. length
      2. Methods
         1. push(), pop()
         2. forEach(), map()
         3. sort(), reverse()
         4. reduce()
         5. filter()
5. ES 6 Template string
   1. New syntax for String Concatination where the string will contains placeholders aka Expressions.
   2. This will be parsed as HTML 
   3. This will be used to build an immutable string
   4. The Syntax is `${<EXPRESSION>}`
6. An Arraow Operator
   1. This is the simple syntax over a callback function
   2. We use this as input parameter to function if the function is accepting callback function as input parameter
      1. Syntax is
         1. myFunction((p1,p2...)=> {.....})
7. Union Types 
   1. A variable can be declared with more than one data type.
   2. It can be assigned by values from those data types
   3. Syntax
      1. let data: Type1|Type2;
8. Rest parameters
   1. Syntax
      1. ...<Identityfier>;
   2. Using a = Object.create(b); we create a new 'a' object having same schema of 'b' but 'a' is not havimng any value for schema
   3. Object.assign();     

#=============================================================================

# Object Oriented Programming

1. class
   1. Members
      1. default to public
      2. contains values in it with data types
   2. Properties
      1. setter an getter (ES 5 compatible)
      2. Smart Members, because they contains logic 
      3. public by default
      4. read-write properties
      5. write-only properties
      6. read-only properties
   3. methods / functions
      1. defualt to public
      2. contains logc to move around the members and properties
      3. We do not need function keyword for defining functions within a class 
      4. The return values is set using ':'<Type-Name>
      5. Must specify 'void' for method that does not return anything
      6. The 'never' datatype can be used when the function never return any data
      7. void may be null but never cannot have any value saved in it.
   4. Declaration scoping for members aka access specifier
      1. The default is 'public'
      2. Make members (member/proeprty/function) as private if you do not want them to be accessible put of class
      3. Use protected when the mmbers is scoped within class and in derived class.
      4. The 'this' object is used to refer or access class members within the class.
      5. Constructor parameter improvements
         1. parameterized ctor
            1. private scope ctor parameters
               1. They are trated as private members of class
            2. public scope ctor parameters
               1. They are trated as public members of class
   5. Interitence is defined using 'extends' keyword
      1. Derived class have access to all proteted and public members of base class using 'this' reference
      2. The derive class must have ctor with super() call.
      3. The super() will represent linking between derived class with base class.
2. Interfaces
   1. Class Schemas
   2. Class can implement interface using 'implements' keyword
   3. Class must implement all methods of interface
3. Properties
   1. Smart fields with getter and setter.
   2. They are in ES 5 transpilation
   3. By default they produces a warning for set and get method during transpilation
4. Abstract class
   1. Class that cannot be instantiated
   2. Uses keyword 'abstract'
   3. Methods from Abstract class can be hiddened by derive class with same signeture.
   4. We can have abstract methods in abstract class.  
5. Generic Types
   1. Class
   2. Member
   3. Function
   4. Parameter
#=============================================================================

# Integrating TypeScript with third party library for client-side development

Using jQuery with typescript
npm install --save jquery

# ============================================================================

# Using ES 6 Promises

1. The 'Promise<T>' class
   1. Provides a mechanism to handle long running async calls from the Fron-End script
   2. Uses 'then()' method to evaluate the successful callback
   3. Uses 'catch()' method to evaluate the failed callback
# ===========================================================================
function getDataPromise() :Promise<any> {
    return $.ajax({
        url:'<url>',
        type:'GET'
    });
}
function getResult(){
    getDataPromise()
     .then(function(resp){
        console.log(`In the getResult method ${JSON.stringify(resp)}`);
     }).catch(function(error){
        console.log(error.status);
     });
}  
getResult();
#============================================================================
2. The 'async' and 'await' keywords
   1. The 'async' is a method modifier, thet represents the method contains an asynchromous call e.g. ajax call
   2. The 'await' must be used for the method call that returns a promise object
   3. The 'async' method must have atlead one 'await' method call