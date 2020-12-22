const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        // change localhost to heroku here
        // and the name to yours
        super({title:"Contact", sName:"Mimi Pham", sAction:"https://thank-you-app.herokuapp.com/send/"});
    }
    render(sPage) {
        return `
        ${this.requireMarked('_pages/contact.md')}
        <form action="${this.sAction}" method="POST">
            <div class="form-group">
                <label>Name: <input name="Name" placeholder="Name" class="form-control" /></label>
            </div>
            <div class="form-group">
                <label>Email:<input name="Email" placeholder="Email" type="Email" class="form-control" /></label>
            </div>
            <div class="form-group">
                <label>Phone Number:<input name="Phone" placeholder="Phone Number" type="tel"
                        class="form-control" /></label>
            </div>
            <div class="form-group">
                <label>Message:<textarea name="Message" placeholder="Type Your Message Here"
                        class="form-control"></textarea></label>
            </div>
            <button type="Submit">Send Message</button>

        </form>
        `;
    }
}