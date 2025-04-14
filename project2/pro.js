let toastbox = document.getElementById('toastbox');
let successMsg ='<i class="ri-checkbox-circle-fill"></i> successfully submited';
let errorMsg ='<i class="ri-close-circle-fill"></i>please fix the error!';
let invalidMsg ='<i class="ri-error-warning-fill"></i>Invalid input, check again';
function showToast (msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastbox.appendChild(toast);

    if(msg.includes("error"))
    {
       toast.classList.add("error");
    }
    if(msg.includes("Invalid"))
    {
        toast.classList.add("invalid");
    }

        setTimeout(() => {
            toast.remove();
        }, 4000);
}