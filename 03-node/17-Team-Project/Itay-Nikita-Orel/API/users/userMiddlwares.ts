import UserModel, { ROLE } from "./userModel";
import jwt from "jwt-simple";

export async function adminAccess(req: any, res: any, next: any) {
  try {
    const secret = process.env.JWT_SECRET;
    const { currentUser } = req.cookies;
    if (!secret) throw new Error("No secret");
    const decoded = jwt.decode(currentUser, secret);
    
    const { userId } = decoded;

    const userDB = await UserModel.findById(userId);
    if(userDB?.ROLE !== `admin`){
      throw new Error("Unauthorized");
    }
    

    next();
  } catch (error: any) {
    console.error(error);
    res.status(401).send({ok:false, error: error.message });
  }
}
