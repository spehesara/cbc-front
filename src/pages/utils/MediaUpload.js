import { createClient } from "@supabase/supabase-js"

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiY2RxdWppYWF0anp5dGxmbWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NDg4OTEsImV4cCI6MjA4OTIyNDg5MX0.shT3Y7hPjD0RF4Bj54zv5c1kHY60LmbqRLiJ_R-tU4I`

const url = "https://zbcdqujiaatjzytlfmjm.supabase.co"


export default function uploadMediaToSupabase(file){

    return new Promise((resolve,reject)=>{

if(file==null){
reject("Please select a file first")

}

let fileName = file.name
const extension = fileName.split(".")[fileName.split(".").length-1]

const supabase = createClient(url,key)

const timestamp = new Date().getTime()
fileName = timestamp+"."+extension

 supabase.storage.from("images").upload(file.name,
    file,{

        cacheControl:"3600",
        upsert:false
    }).then(()=>{

        const publicUrl = supabase.storage.from("images").getPublicUrl(file.name).data.publicUrl;
        resolve(publicUrl);
    }).catch((err)=>{

        reject(err);
    })


    })









}


// if(extension != "jpg" && extension != "png"){
//     alert("Please select a valid image file (jpg or png)")
//     return
// }




