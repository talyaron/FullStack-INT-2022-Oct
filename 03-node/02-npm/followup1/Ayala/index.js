//מייבא את הספרייה של vi4
const { v4: uuidv4 } = require('uuid');
for(let i=0; i<4; i++ ){
    console.log(uuidv4());
}