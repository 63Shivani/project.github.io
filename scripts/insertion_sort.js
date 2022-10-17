function Insertion()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"moccasin");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"lightcoral");//Color update
            div_update(divs[i+1],div_sizes[i+1],"lightcoral");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"lightcoral");//Height update
            div_update(divs[i+1],div_sizes[i+1],"lightcoral");//Height update
    
            div_update(divs[i],div_sizes[i],"deepskyblue");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"moccasin");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"deepskyblue");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"turquoise");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"turquoise");//Color update

    enable_buttons();
}