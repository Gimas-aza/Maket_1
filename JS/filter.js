let item_none = [];

function filter(categoria) {
    item_none.forEach(item => { item.style.display = "block"; });
    let categoria_elem = document.getElementById(categoria);

    document.querySelectorAll(".Filter_flex > button").forEach(button => {
        button.style.cssText = `
            background: rgba(255, 255, 255, 0);
            color: black;
            cursor: pointer;
        `;
    });

    document.getElementById("button_" + categoria).style.cssText = `
                                                    background: rgb(0, 137, 123);
                                                    color: white;
                                                    cursor: auto;
                                                `;

    item_none = [];
    document.querySelectorAll("#store_grid > div").forEach(item => {
        // console.log(item.id);

        if (categoria_elem.id != item.id) {
            item.style.display = "none";
            item_none.push(item);
        }
    });

}