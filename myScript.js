function show_flag()
{
    alert("FLAG{HTML_IS_THE_BEST_PROGRAMMING_LANGUAGE}");
}
function random_swap_array(arr=[])
{
    let swap_time = Math.ceil(arr.length / 2);
    for(let i=0; i<swap_time; i++)
    {
        for(let j=0; j<arr.length-1; j++)
        {
            if(Math.random() < 0.5)
            {
                let obj = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = obj;
            }
        }
    }
}

let answer;
const images_count = 18;

function img_load()
{
    let arr = [];

    let container = document.getElementById("img_container");
    for(let i=0; i<images_count; i++)
    {
        let node = document.createElement("img");
        node.id = `img_${i}`;
        node.src = `img/${i}.jpg`;
        node.setAttribute("onclick", `make_a_guess(${i});`);
        arr.push(node);
    }
    
    random_swap_array(arr);

    for(let i=0; i<arr.length; i++)
    {
        container.appendChild(arr[i]);
    }
}
function image_control(index=0, display=true)
{
    let obj = document.getElementById("img_"+index);
    if(obj === null || obj.tagName !== "IMG")
    {
        return;
    }

    obj.style.visibility = (display)? "visible": "hidden";
}

function generate_ans()
{
    answer = Math.floor(Math.random() * images_count);
}
function make_a_guess(guess)
{
    if(guess === answer)
    {
        show_flag();
        // for(let i=0; i<images_count; i++)
        // {
        //     image_control(index=i, display=true)
        // }
        window.location.reload();
    }
    else
    {
        image_control(index=guess, display=false)
    }
}