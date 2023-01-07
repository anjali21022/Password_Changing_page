window.onload = function() {


    //check password is available or not

    if(localStorage.getItem("password") == null)
    {
        document.querySelector("#set-btn").style.display = "block";
        document.querySelector("#access-btn").style.display = "none";
    }
    else
    {
        document.querySelector("#set-btn").style.display = "none";
        document.querySelector("#access-btn").style.display = "block";
    }


    //store password in localstorage

    var set_btn = document.querySelector("#set-btn");
    
    set_btn.onclick = function(){
        var user_input = document.querySelector("#user-input").value;
        if(user_input == "")
        {
            document.querySelector("#password-empty-notice").style.display = "block";
        }
        else{
            document.querySelector("#password-empty-notice").style.display = "none";
            localStorage.setItem("password",user_input);

            window.location = location.href;
        }

     
      //login

    var access_btn = document.querySelector("#access-btn");

    access_btn.onclick = function(){
        var real_password = localStorage.getItem("password");
        var user_password = (document.querySelector("#user-input").value);

        if(real_password == user_password)
        {
            document.querySelector("#password-wrong").style.display = "none";
        }
        else
        {
            document.querySelector("#password-wrong").style.display = "block";
        }
    }
    }

}