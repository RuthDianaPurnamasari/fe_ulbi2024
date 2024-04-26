import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-ruth2024-458a1e70d2e1.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}