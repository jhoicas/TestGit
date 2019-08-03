
    var input = document.querySelector('input');
   
   

     input.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
          // code for enter
         
          addTarea(input.value);
          input.value= "";
        }
    });

    
    function addTarea(texto){
       // console.log(texto);
        var conten = document.querySelector('ul');
        
        var tarea = document.createElement("li");
        tarea.setAttribute("class", "list-group-item");

        var rdTachar = document.createElement("INPUT");
        var label = document.createElement("h1");
        label.setAttribute("class", "alert alert-success mx-sm-3");

        var div = document.createElement("div");

        var botonDel = document.createElement("button");
        botonDel.setAttribute("class","btn btn-outline-dark ");
        rdTachar.setAttribute("class", "form-check-input") ;
        
        rdTachar.setAttribute("type", "checkbox");

        botonDel.innerText="X";
       
        botonDel.addEventListener("click", function(){
            tarea.remove();
        });

        rdTachar.addEventListener("click", function(){
            label.setAttribute("class", "alert alert-success tachar");
            
           // label.innerText += " Terminada";
        });
       
        label.innerText = texto;

        //label.setAttribute("textContent", texto);
       // tarea.innerText = texto;
        
      /*  tarea.addEventListener("click", function(){
            this.remove();
        })*/

        
        div.appendChild(rdTachar);
        div.appendChild(label);
        div.appendChild(botonDel);

tarea.appendChild(div);
        conten.appendChild(tarea);
    }
   
    
    
