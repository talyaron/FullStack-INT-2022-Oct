                                                //Model//

      Entities:
   
  Word: 
      name: string, 
      id: string,


words-list: sorted by ABC


   User: <>
      id: string,
      streak: number,

users-list
  


                                                      //View//

log in page:
   a form that requests a user name.


main page:
   keyboard: with all the letters, ENTER button and BACK button.
   playing board: composed of 6 lines (guesses), each line has 5 cells(for letters).

rules and statistics page: 
   user name: 
   streak: shows the length of the user's current streak.
   rules: scss only




                                                         //Control//

insertLetterToCell(letter: string): void = iserts a letter to the current cell

deleteLetterFromCell(): void  = deletes a letter from the current cell

enter(): void = checks if the word id valid and marks the cell with the suitable color(
   "green" = the letter is in the right position;
   "yellow" = the letter is included in the solution, but not in the right place;
   "gray" = the letter is not on the solution)

randomSolutionSelector = selects a random word from the words array

 


                                                            //Helpers//

uid() = gives a unique id to the  user / word

getRandomInt() = selects a random integer for the random solution function

