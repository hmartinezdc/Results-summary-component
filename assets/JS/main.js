//Petición al archivo JSON
const dataList = document.querySelector("#summary__container")

fetch("/data.json")
    .then(response => response.json())
    .then((json) => {
        const data = json
        PrintData(data)
    })
    .catch((error) => {
        console.log(error)
    })
    
function PrintData(data) {
    let html = '';
    for(let i = 0; i < data.length; i++) {
        html += `
        <div class="summary__category summary__category-${data[i].category}">
          <div class="category category-${data[i].category}">
            <img src="${data[i].icon}" alt="">
            <P>${data[i].category}</P>
          </div>
          <div class="score">
            <p>${data[i].score} <span class="score-color">/ 100</span></p>
          </div>
        </div>
        `;
    }
    dataList.innerHTML = html;
}

