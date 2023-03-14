//import nodemailer from 'nodemailer';


function senaMailByMailer(data:any):Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('enter12');
            resolve({'message':'success'});
        }catch(error){
            console.log(error);
            reject(error);
        }
    });
}

export default {
    senaMailByMailer
} as const;