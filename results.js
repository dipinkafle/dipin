let resultpdf = document.querySelector(".marksheet iframe");

resultpdf.style.display = 'none';

function checkresult(){
    resultpdf.style.display = 'block';
    resultpdf.src= 'assets/results/'+document.getElementById("symbol").value+'.pdf';
}
