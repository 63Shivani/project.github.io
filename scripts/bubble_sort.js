function Bubble(){
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="O(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++){
        for(var j=0;j<array_size;j++){
            div_update(divs[j],div_sizes[j],"moccasin");

            if(div_sizes[j]>div_sizes[j+1]){
                div_update(divs[j],div_sizes[j],"lightcoral");
                div_update(divs[j+1],div_sizes[j+1],"lightcoral");

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j],"lightcoral");
                div_update(divs[j+1],div_sizes[j+1],"lightcoral");

            }
            div_update(divs[j],div_sizes[j],"turquoise");
        }
                div_update(divs[j],div_sizes[j],"turquoise");
        
    }

    div_update(divs[0],div_sizes[0], "turquoise");//Color update

    enable_buttons();
    
}