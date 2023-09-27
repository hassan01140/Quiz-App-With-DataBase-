import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase,ref,set,onValue } from "firebase/database";
import { app } from "./firebaseconfig";

let auth = getAuth(app)
let db = getDatabase(app)

export const fbLogin=(body:any)=>{
    return(
        new Promise ((resolve,reject)=>{
    if(!body.email || !body.password){
        reject("Email or Password is Required")
    }else{
    signInWithEmailAndPassword(auth,body.email,body.password).then(res=>{
    let id = res.user.uid;
    const refrence=ref(db,`users/${id}`)
    onValue(refrence,(data)=>{
        if(data.exists()){
            resolve(data.val())
        }else{
            reject("No Data Found")
        }
    })
}
).catch((err)=>{
        reject("No Data Found")
        // reject(err)

    })
    }
        })
    )
}

export let fbSignUp=(body:any)=>{
    return new Promise((resolve,reject)=>{
        if(!body.email || !body.password){
            reject("Email and Password is Required")
        }else{
            createUserWithEmailAndPassword(auth,body.email,body.password).then(res=>{
                let id = res.user.uid

                body.id = id
                const referece = ref(db,`users/${id}`)
                set(referece,body).then(user=>{
                    resolve("User Created Succefully")
                }).catch(error=>{
                    reject(error)
                })

            }).catch(err=>{
                reject(err)
            })
        }
    })


}