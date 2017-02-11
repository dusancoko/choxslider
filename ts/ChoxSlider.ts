/**
 * Responsive Slide class
 * Author: Dušan Čoko
 * Version: 0.1
 * This code for JS slider feature, which allows user to slide between elements with arrow elements
 * =========================
 * Requirements:
 * Every image elements has to have class 'item'. In your CSS 'display' should be set to 'none'.
 * There should be two elements which have classes 'previous' and 'next' respectfully
 */
class ChoxSlider {
    private previousElement : Element = null;
    private nextElement : Element = null;
    private rootElement : Element = null;
    private childrenList : any = null;
    private current : number = 0;

    public constructor(rootSelector: string)
    {

        this.rootElement = document.querySelector(rootSelector);
        this.previousElement = this.rootElement.querySelector(".previous");
        this.nextElement = this.rootElement.querySelector(".next");
        this.childrenList = this.rootElement.querySelectorAll(".item");
        this.nextElement.addEventListener("click",this.viewNext.bind(this));
        this.previousElement.addEventListener("click", this.viewPrevious.bind(this));
        if(this.childrenList !== undefined) { this.childrenList[0].classList.add("visible"); }
    }

    /** Method that shows next item */
    public viewNext() {
        if(this.current < this.childrenList.length - 1) this.switchItem(++this.current);
    }

    /** Method that set class 'visible' to item for given index, and hides rest of elements */
    private switchItem(index:number) {
        for(let i = 0; i < this.childrenList.length; i++) {
            this.childrenList[i].classList.remove("visible");
            //optional - fadeInEffect
            this.childrenList[index].classList.remove("fadein");
        }
        this.childrenList[index].classList.add("visible");
        //optional - fadeInEffect
        this.childrenList[index].classList.add("fadein");
    }

    /** Method that shows previous item */
    public viewPrevious() {
        if(this.current > 0) this.switchItem(--this.current);
    }

}
