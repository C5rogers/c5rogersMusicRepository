class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="logo">
            <img src="image/bank.png">
        </div>
        <nav id="navigation">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTUCT US</a></li>
                <li><a href="#">REPORT BUG</a></li>
            </ul>
            <button id="hide"><img src="image/3.png" alt=""></button>
        </nav>
        <button class="menu" id="appear"><img src="image/7.png" alt=""></button>
    </header>
        `
    }
}
customElements.define("my-header", myHeader);
class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="content">
            <ul>
                <div class="cont">
                    <li><a href="#">hleping the community</a></li>
                    <li><a href="#">about the community</a></li>
                    <li><a href="#">knowing about the community</a></li>
                    <li><a href="#">what is about the community</a></li>
                </div>
                <div class="cont">
                    <li><a href="#">hleping the community</a></li>
                    <li><a href="#">about the community</a></li>
                    <li><a href="#">knowing about the community</a></li>
                    <li><a href="#">what is about the community</a></li>
                </div>
                <div class="cont">
                    <li><a href="#">hleping the community</a></li>
                    <li><a href="#">about the community</a></li>
                    <li><a href="#">knowing about the community</a></li>
                    <li><a href="#">what is about the community</a></li>
                </div>
            </ul>
        </div>
        <div class="copyright">
            <div class="copy">
                <p>&copy; copyright is resrved 2015 E.C</p>
            </div>
        </div>
    </footer>
        `
    }
}
customElements.define("my-footer", myFooter);
var hide = document.getElementById("hide");
hide.addEventListener("click", function() {
    document.getElementById("navigation").style.right = "-100%";
});
var display = document.getElementById("appear");
display.addEventListener("click", function() {
    document.getElementById("navigation").style.right = "-15%";
});