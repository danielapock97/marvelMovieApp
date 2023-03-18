let mainview =  document.getElementById("mainview");

const array = [1,2,3];
for(const element of array) {
mainview.innerHTML += "<span>" + element + "</span>"
}