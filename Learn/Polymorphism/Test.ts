import { Ech } from "./Ech";
import { EchCon } from "./EchCon";
import { Nongnoc } from "./Nongnoc";


export class EchManager{
    checkEch(name: string) : Ech{
        if (!name){
            throw new Error("Lam on hay nhap ten ech");
        }

        if (name == "echcon"){
            console.log("1");
            return new EchCon();
        } else if (name == "nongnoc"){
            console.log("2");
            return new Nongnoc();
        } else{
            throw new Error("Nhap ten ech khong dung");
        }
    }
}

let echManager = new EchManager();


let ech = echManager.checkEch("echcon");


// Nếu class cha không có hàm đó, thì mình phải check kiểu của thằng con khi trả về
if (ech instanceof EchCon) {
  (ech as EchCon).initEch(); // Gọi phương thức initEch() của EchCon
} else if (ech instanceof Nongnoc) {
  (ech as Nongnoc).initEch(); // Gọi phương thức initEch() của Nongnoc
} else {
  console.log("Khong the goi initEch");
}

// let ech: Ech = new EchCon();
// ech = new Nongnoc();


