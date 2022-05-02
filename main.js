function fisherYatesShuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); //random index
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
}

function getQueue() {
    var result_queue = [];
    var lab_member = [];
    var str ="";
    var checkbox = document.getElementById('pair_check');    
    lab_member = lab_member.concat(
        Array.from(document.getElementsByName("doctor")),
        Array.from(document.getElementsByName("master2")),
        Array.from(document.getElementsByName("master1")),
        Array.from(document.getElementsByName("bachelor4"))
    );

    for (let i = 0; i < lab_member.length; i++) {
        if (lab_member[i].checked) {
            result_queue.push(lab_member[i].value + "\n");
        }
    }
    fisherYatesShuffle(result_queue);
    if(!checkbox.checked){
        str = result_queue.join("");
    }else{
        console.log("pair mode\n");
        for (var i = 0; i < result_queue.length; i++) {
            var nameWithoutNl = result_queue[i].substring(0, result_queue[i].length-1);
            str += nameWithoutNl;
            if(result_queue.length % 2 == 0){
                if(i % 2 == 0){
                    str += "  & ";
                }else{
                    str += "\n";
                }
            }else{
                if(i % 2 == 0){
                    if(i != result_queue.length - 1){
                        str += "  & ";
                    }
                }else{
                    if(i == result_queue.length - 2){
                        str += " & ";
                    }else{
                        str += "\n";
                    }
                    
                }
            }
        }
    }
    document.getElementById("presentation_queue").innerText = str;
    
}

function toggle(source, target) {
    checkboxes = document.getElementsByName(target);
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}

