//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "https://ws-ruth2024-458a1e70d2e1.herokuapp.com/presensi/" + presensiId;