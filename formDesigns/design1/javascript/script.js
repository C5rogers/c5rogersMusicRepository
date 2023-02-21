class myLogin extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ``
    }
}
customElements.define("my-login", myLogin);
class mySignup extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <div class="cont">
						<i class="icon-user"><img src="image/5.png"></i>
						<input type="email" placeholder="Email" name="email" class="input input1">
					</div>
					<div class="cont">
					<i class="icon-user"><img src="image/2.png"></i>
						<input type="text" name="userName" placeholder="Username" class="input input2">
					</div>
					<div class="cont">
					<i class="icon-user"><img src="image/9.png"></i>
						<input type="password" name="passwod" placeholder="Password" class="input input3">
					</div>
					<div class="cont">
					<i class="icon-user"><img src="image/4.png"></i>
						<input type="password" name="confPass" placeholder="Confirm Password" class="input input4">
					</div>
					<div class="cont">
						<input type="checkbox" name="terms">
						<label for="termes of polysy">Accept Terms & Conditions</label>
					</div>
					<div class="cont">
						<button type="submit" name="signUp"><img src="image/2.png" alt=""><label for="desc">Sign Up</label></button>
					</div>
        `
    }
}
customElements.define("my-signup", mySignup);

class mySingin extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
		<div class="cont">
		<i class="icon user"><img src="" alt=""><img src="image/6.png" alt=""></i>
		<input type="text" name="userName" placeholder="User Name" class="input">
	</div>
	<div class="cont">
	<i class="icon-user"><img src="image/5.png"></i>
	<input type="email" placeholder="Email" name="email" class="input input1">
</div>
	<div class="cont">
		<i class="icon user"><img src="image/9.png" alt=""></i>
		<input type="password" name="password" placeholder="password" class="input">
	</div>
	<div class="cont">
		<button type="submit" name="signIn"><img src="image/6.png" alt=""><label for="desc">Sign In</label></button>
	</div>
		`
    }
}
customElements.define("my-signin", mySingin);


var div = document.getElementById("signup");
div.addEventListener("click", function() {
    document.getElementById("font-container").innerHTML = "<my-signup></my-signup>";
});
var div2 = document.getElementById("singin");
div2.addEventListener("click", function() {
    document.getElementById("font-container").innerHTML = "<my-signin></my-signin>";
});