  function validation(){
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value
    var nameValidation = /^[A-Za-z]+$/;
    reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    email_result = reg.test(email);

    if(name == ''){
      alert("Enter a valid name please");
      return false
    }else if(name.length<=3){
      alert("The  name must be atleast 3 character")
      return false
    } else if(name.indexOf(" ") >= 0){
      alert("Name not entered")
      return false
    } else if (!nameValidation.test(name) ) {
      alert("Invalid characters");
      return false
    }
    else{
      document.getElementById('name').innerHTML=""
      name = true
    }

   
    if(email == ''){
      alert("Please enter your correct email")
      return false
    }else if(email.length<8){
      alert("Please enter your correct E-mail")
      return false
    } else if(!email_result){
      alert("Please provide a correct E-mail")
      return false
    }
    else{
      document.getElementById('email').innerHTML = ""
      email = true
    }


    if(message == ''){
      alert("Message must not be Blank")
      return false
    }else if(message.length<10){
      alert("Message must be more than 10 char")
      return false
    }
    else{
      document.getElementById('message').innerHTML = ""
      message = true
    }
}



    $("#submit-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwOpTdKAdgqu188opcS3Q9Dgx7H03itOkC9IGiExBNsSDMDQniJEBFa0F-TTvL6Kd0G/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })
