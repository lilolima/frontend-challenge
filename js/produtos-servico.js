var xhr = new XMLHttpRequest();

    xhr.open("GET", "produtos.json");

    xhr.addEventListener("load", function() {
        

        if (xhr.status == 200) {
            
            var resposta = xhr.responseText;
            var products = JSON.parse(resposta);
            
                console.log(products); 
       
    }

    });

    xhr.send();
    console.log(xhr.status);
    console.log(xhr.statusText);

   
 