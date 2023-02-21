class mySignInAndLogin extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container flip">
        <div class="flip-inner" id="inner">
        <div class="login">
            <div class="img">
                <img src="image/user5.png" alt="">
             </div>
        <form action="#" method="post">
            <div>
                <label for="username">User Name:</label>
                <input type="text" name="name" placeholder="User Name" class="inpu">
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="Password" name="password" placeholder="Password" class="inpu">
            </div>
            <div class="buttons">
                <input type="submit" name="login" value="Log In">
                <input type="reset" name="reset" value="Reset">
            </div>
        </form>
        <div class="toSignup">
            <button id="goSignup">i dont have an account</button>
        </div>
        </div>
            <div class="signup">
                <div class="img">
                    <img src="image/user5.png" alt="">
                </div>
                <form action="#" method="POST">
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" name="userName" placeholder="User Name" class="inpu">
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" name="email" placeholder="User Email" class="inpu">
                    </div>
                    <div>
                        <label for="password">Password:</label>
                        <input type="password" name="password" placeholder="Password" class="inpu">
                    </div>
                    <div>
                        <label for="confPassword">Confirm Password:</label>
                        <input type="Password" name="confPass" placeholder="Confirm Password" class="inpu">
                    </div>
                    <div class="sex-div">
                        <label for="sex">Sex:</label>
                        <select name="sex" id="sex">
                            <option value="male" selected>Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div class="button">
                        <input type="submit" name="signup" value="Sign Up" class="submit-btn">
                        <input type="reset" name="reset" value="Reset" class="reset">
                    </div>
                </form>
                <div class="toLogin">
                     <button id="goLogin">have an account</button>
                </div>
            </div>
        </div>
    </div>
        `
    }
}
customElements.define("login-signup", mySignInAndLogin);

var login = document.getElementById("goLogin");
login.addEventListener("click", function() {
    var div = document.getElementById("inner");
    div.style.transform = "rotateY(180deg)";

});
var signup = document.getElementById("goSignup");
signup.addEventListener("click", function() {
    var div = document.getElementById("inner");
    div.style.transform = "rotateY(0deg)";
});