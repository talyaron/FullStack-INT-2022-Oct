                                                //Model//

      Entities:
   
  Word: 
      name: string, 
      id: string,


words-list: sorted by ABC


   User: <>
      id: string,
      streak?: number,


  


                                                      //View//

log in page:
   a form that requests a user name.


main page:
   keyboard: with all the letters, ENTER button and BACK button.
   playing board: composed of 6 lines (guesses), each line has 5 cells(for letters).

rules and statistics page: <>
   games: shows the number of the games played by the user.
   streak: shows the length of the user's current streak.
   rules: scss only




                                                         //Control//

insertLetterToCell(letter: string): void = iserts a letter to the current cell

deleteLetterFromCell(): void  = deletes a letter from the current cell

enter(): void = checks if the word id valid and marks the cell with the suitable color(
   "orange" = the letter is in the right position;
   "blue" = the letter is included in the solution, but not in the right place;
   "black" = the letter is not on the solution)


 


                                                            //Helpers//

uid() = gives a unique id to the  user / word

-validate() = checks if the word entered by the user is a valid word (exists on the words array)

randomSolutionSelector = selects a random word from the words array
