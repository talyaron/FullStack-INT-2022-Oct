    
class Users {
  uid: string;
 

  constructor(
    public userName: string,
    public password: number,
    public level:string
  ){
    this.uid = uid();
  }
}

const users: Users[] = [];



const rowBox = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42, 43, 44],
  [45, 46, 47, 48, 49, 50, 51, 52, 53],
  [54, 55, 56, 57, 58, 59, 60, 61, 62],
  [63, 64, 65, 66, 67, 68, 69, 70, 71],
  [72, 73, 74, 75, 76, 77, 78, 79, 80],
]


const boxBox = [
  [0, 1, 2, 9, 10, 11, 18, 19, 20],
  [3, 4, 5, 12, 13, 14, 21, 22, 23],
  [6, 7, 8, 15, 16, 17, 24, 25, 26],
  [27, 28, 29, 36, 37, 38, 45, 46, 47],
  [30, 31, 32, 39, 40, 41, 48, 49, 50],
  [33, 34, 35, 42, 43, 44, 51, 52, 53],
  [54, 55, 56, 63, 64, 65, 72, 73, 74],
  [57, 58, 59, 66, 67, 68, 75, 76, 77],
  [60, 61, 62, 69, 70, 71, 78, 79, 80],
  
]

const box : {row1: number, row2:number, row3:number, col1: number, col2: number, col3: number} []= [
  {row1: 0, row2:1, row3:2, col1: 0, col2: 1, col3: 2},
  {row1: 0, row2:1, row3:2, col1: 3, col2: 4, col3: 5},
  {row1: 0, row2:1, row3:2, col1: 6, col2: 7, col3: 8},
  {row1: 3, row2:4, row3:5, col1: 0, col2: 1, col3: 2},
  {row1: 3, row2:4, row3:5, col1: 3, col2: 4, col3: 5},
  {row1: 3, row2:4, row3:5, col1: 6, col2: 7, col3: 8},
  {row1: 6, row2:7, row3:8, col1: 0, col2: 1, col3: 2},
  {row1: 6, row2:7, row3:8, col1: 3, col2: 4, col3: 5},
  {row1: 6, row2:7, row3:8, col1: 6, col2: 7, col3: 8},
]

  





const difficult = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0],
  ]

  const middum = [
    [0, 1, 6, 5, 7, 8, 0, 9, 2],
    [5, 0, 9, 1, 3, 4, 7, 6, 8],
    [4, 8, 7, 6, 2, 9, 5, 3, 1],
    [2, 6, 0, 4, 1, 0, 9, 8, 7],
    [9, 7, 4, 8, 6, 3, 1, 0, 5],
    [8, 5, 1, 7, 9, 2, 6, 4, 3],
    [1, 3, 8, 9, 4, 0, 2, 5, 6],
    [6, 0, 0, 3, 5, 1, 8, 7, 4],
    [0, 4, 5, 2, 0, 6, 3, 1, 0]
  ]

  
  const easy = [
    [5, 3, 4, 6, 7, 0, 9, 1, 2],
    [6, 7, 0, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 0, 4, 2, 3],
    [4, 2, 0, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [0, 6, 1, 5, 3, 7, 0, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 5, 2, 8, 6, 1, 0, 9]
]

 