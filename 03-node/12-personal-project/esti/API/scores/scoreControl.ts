
import { ScoreModel } from './scoreModel';

export const getScores = async (req: any, res: any) => {
    try {
      const { name, score, competitionPlace } = req.body;
      // console.log( name, score, competitionPlace );
      // let scoreDBArray = []
      // for (let i = 1; i < 10; i++ ){
      //     const scoreDB = await ScoreModel.findOne({ i });
      //     console.log(scoreDB)
      //     console.log("scoreDB")
      //     // scoreDBArray.push(scoreDB)
      //   };

      // interface CustomError {
      //   code: number;
      //   message: string;
      // }
  
      // if (!scoreDBArray) throw new Error("Username or password are inncorect");
      // if (!scoreDBArray){
      //     // If an error occurs
      //     const error: CustomError = {
      //       code: 1001,
      //       message: "No play user"
      //     };
      //     res.status(1001).send({ error });
      //   };
        
    //   if (!secret) throw new Error("Missing jwt secret");
//   
    //   const token = jwt.encode({ userId: userDB._id, role: "public" }, secret);
    //   console.log(token);
    //   console.log("token");
  
    //   res.cookie("user", userDB._id , { maxAge: 5000000, httpOnly: true });
  
    //   res.status(201).send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
      
    }
  };
  
  // export const addScore = async (req: any, res: any) => {
  //   try {
  //   //   res.status(201).send({ ok: true });
  //   } catch (error: any) {
  //     console.error(error);
  //     res.status(500).send({ error: error.message });
      
  //   }
  // };
  export const addScore = async (req: any, res: any) => {
    try {
      const { userId, score, competitionPlace } = req.body;
      // console.log(name, password);
      
      console.log(req.body);
             
      // add users to DB;
      const scoreDB = await ScoreModel.create({ userId, score, competitionPlace });
  
      console.log(scoreDB);
      // console.log(UserModel);
      // console.log("userDB");
  
      res.status(201).send({ ok: true, score:scoreDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };
  

  export const updateScore = async (req: any, res: any) => {

    try {
      // const user = req.user;
      console.log(req.body)
      const { scoreUserId, score } = req.body;
      console.log(scoreUserId)
      console.log(score)
  
      const scoreDB = await ScoreModel.findOneAndUpdate({userId:scoreUserId},{score})
      
      
      if(!scoreDB) throw new Error ("no scoreDB")
  
      res.send({ ok: true,scoreDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };


  //     const {userId , score , competitionPlace} = req.body 
  //     if(!userId) throw new Error("no  user id")
      
  
  //     // const userDB =  await ScoreModel.findOne({_ID:userId} );
  //     // console.log(userDB);
  //     // if(!userDB) throw new Error("no found userId")
  //     const scoreDB = await ScoreModel.findByIdAndUpdate({_id:userId},{score}},
         
    
    
  //     res.status(201).send({ok:true , score:updateScore})

    
  //     //   res.status(201).send({ ok: true });
  //   } catch (error: any) {
  //     console.error(error);
  //     res.status(500).send({ error: error.message });
      
  //   }
  // };


// ++++++++++++++++++++++++++++++++++
  //-----Update product (By Admin)
// export const updateProduct = AsyncHandler(async (req:any, res:any) => {
//   const { name, description, sizes, colors, price, totalQty} = req.body

//   //If name exists
//   const productFound = await ProductModel.findOne({ name })
//   if(productFound){
//       throw new Error("The product already exists")
//   }

//   //update
//   const product = await ProductModel.findByIdAndUpdate(
//       req.params.productID,
//       {
//           name,
//           description,
//           sizes,
//           colors,
//           price,
//           totalQty
//       },
//       {
//           new: true
//       }
//   )

//   res.status(200).json({
//       status: "success",
//       message:"The product has been successfully updated",
//       product
//   })
// })
// //-------------------------------------------
