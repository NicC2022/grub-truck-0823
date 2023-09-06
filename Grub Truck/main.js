class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container nav">
                <div class="nav-options">
                    <a href="food-menu.html" class="nav-item">Food Menu</a>
                    <a href="about-us.html" class="nav-item">About Us</a>
                </div>
            
                <div class="logo">
                    <a href="index.html">
                    <img src="resources/images/brand/Grub Truck logo.png" 
                    alt="Food Truck Logo">
                    </a>
                </div>
                    
                <div class="nav-options">
                    <a href="locations.html" class="nav-item">Locations</a>
                    <a href="contact-us.html" class="nav-item">Contact Us</a>
                </div>

                <div class="menu-button">
                    <img src="resources/images/icons8-menu-rounded-100.png" alt="Hamburger menu button that includes: About Us, Food Menu, Locations, and Contact Us stacked from top to bottom, respectively">
                </div>      
            </div>
            `
    }
}

customElements.define('my-header', MyHeader) 

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="footer">
            <p class="cr">Insert Copright Info Here</p>
        </div>
            `
    }
}

customElements.define('my-footer', MyFooter) 