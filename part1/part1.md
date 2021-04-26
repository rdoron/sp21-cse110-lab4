## part 1a  
1. values added: 20
2. final result: 20 
3. values added: 20 
4. you would get a error becuase result is define with let. Declaring a variable with the let keyword provides the variable with a block scope so it can only be accessed within the block it is define in. Since line 13 is outside the if statement, where result is defined, it would produce an error that result is not defined.  
5. you would get an error because you would not reach line 9 because you would get an error in line 7. Declaring a variable with the const prevents it from being reassigned after it is assigned for the first time. Therefore, trying to reassign results value to be num1 + num2 would produce an error. 
6. you would get an error because you would not reach line 13 because you would get an error in line 7. Declaring a variable with the const prevents it from being reassigned after it is assigned for the first time. Therefore, trying to reassign results value to be num1 + num2 would produce an error. 
   
## part 1b
1. line 12 will print out 3 because var has no block scope so in line 12 it will still recognize that the variable i holds the value 3. 
2. line 13 will print out 150 becuase the value of discountedPrice changed with each iteration and on the last iteration the value of discounted price is 150. Since var has no block socpe even outside the for loop the value of discoutnedPrice would be recognized as 150. 
3. line 14 will print out 150 because in the last iteration of the for loop finalPrice is assigned the value 150. Since finalPrice is a var it has no block scope making it visable through blocks. 
4. this function will return [50, 100, 150]. each iteration of the for loop stores the value of finalPrice into an array called discounted. the value of discount is still recognized outside of the for loop because it was declared as a var so it does not have block scope. 
5. line 12 would produce an erorr becuase i was delcared with let which means it is only visable in the for loop. variables delcared with let have block scope since line 12 is outside the for loop in which i was declared it would produce an error that i was not defined. 
6. line 13 would produce an erorr becuase discountedPrices was delcared with let which means it is only visable in the for loop. variables delcared with let have block scope since line 13 is outside the for loop in which discountedPrices was declared it would produce an error that discountedPrices was not defined.  
7. line 14 would print out 150 beucase on the last iteration of the for loop the variable finalPrice gets assigned the value 150. Since final price was delcared with let in discountPrices code block and line 14 is also in the discountPrices code block it would print out the value of finalPrice. 
8. this function would return [50, 100, 150] because discounted was delcared with let in the discountPrices so the scope of the variable is within the function. 
9. line 11 would produce an error becuase the vairable i was delcared in the for loop with let so the scope of variable i is only in the code block of the for loop. Since line 11 is not in the for loop's code block it would produce an error that variable i was not defined. 
10. line 12 would print out 3 because the scope of the variable length is within the function discountPrices.  
11. This function would return the array [50, 100, 150] since discounted is define in the same block code as the reutrn statemnt. the variable discounted was define as a const so the variable scope is in that code block. 
12. a. student.name
    b. student['Grad Year']
    c. student.greeting()  
    d. student['favorite teacher'].name 
    e. student.courseLoad[0]
13. a. 32 since integers map to their exact string representation it would use the + to concatnate them 
    b. 1 because you can't preform subtraction on a string javascript converts 3 to and int which results in 3-2=1
    c. 3 because null will be treated like a zero so 3+0=3 
    d. 3null since 3 is a string and the + would be used to concatnate 3 and null 
    e. 4 because true becomes 1 so 3 + 1 = 4
    f. 0 becasue false becomes 0 and null becomes 0 so 0+0=0 
    g. 3undefined beucase 3 is a string the + would be used to concatnate 3 and undefined 
    h. NaN the "-" results in automatic number conversion therefore, so 3 becomes an int and undefined become NaN. 3 - NaN = NaN
14. a. true since there is the ">" 2 will be converted to a number and since 2 is greater than 1 it would output true 
        b. false both '2' and '12' are strings so they will be compared using dictioary ordering. since 1 comes before 2 it would output false 
        c. true when using == data type conversions are allowed so '2' will be converted into a number and 2 == 2 
        d. false data type conversions are not allowed when using === so trying to compare a string and a number would return false 
        e. false data type conversions are allowed when using ==, so true will get converted to 1. 1 is not equal to 2. therfore, it would output false 
        f. true boolean(2) results in true and true is equal to true. 
15. == is equlity test. === is a strict equality operator that checks equality without type conversion. == allows for data type conversions however === does not allow for data type conversions  
17. [2,4,6] each value in the array get passed into doSomething which multiplies the value by 2 and returns the new value and then that new value get pusehd into newArr. at the end of the function newArr gets returned 
19. 1,4,3,2 

