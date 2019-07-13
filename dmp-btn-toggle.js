import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/custom-style.js';

/**
 * `dmp-btn-toggle`
 * custom input with polymer3
 * @description style-vars: backgroundColor, backgroundFeatured, , backBroundDisable
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class DmpBtnToggle extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host{
          --backgroundColor: lightblue;
          --backgroundSelected: #52b7d8;
          --featuredBackground: lightblue;
          --featuredBackgroundSelected: gold; 
          --featuredStrokeColor: transparent;
          --featuredStrokeColorSelected: transparent;
        }
        :host([selected]){

        }
        .item {
            position: relative;
            cursor: pointer;
            border-radius: var(--borderRadius, 6px);
            padding: 6px;
            /*margin: 2px;*/
            display: inline-block;
            color: white;
            user-select: none;
            transition: 0.4s box-shadow;
            background-color : var(--backgroundColor, #f4b400);
        }
        .itemFeatured{
          /*
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid black;
          */
          pointer-events: none;
          position: absolute;
          top: -6px;
          right: -6px;
          cursor: not-allowed !important;
        }
        :host([selected]) .itemFeatured{
          cursor: pointer !important;
          pointer-events: auto;
        }
        :host([selected]) .item {
          background-color: var(--backgroundSelected, #3367d6);
        }
        :host([disabled]) .item {
          background: var(--backBroundDisable, #e0e0e0);
          cursor: not-allowed !important;
        }
        /*
        :host([featured-selected]) .itemFeatured{
          background: var(--backgroundFeatured, #ef5350);
        }  
        */
        .itemFeatured slot::slotted(svg) {
          fill: var(--featuredBackground, var(--backgroundSelected,  gold));
          opacity: 0.3;
          stroke: var(--featuredStrokeColor, red);
          width: 20px;
          height: 20px;
          transform: rotate(45deg);


        }
        :host([selected]) .itemFeatured slot::slotted(svg) {
          opacity: unset;
        }
        :host([featured-selected]) .itemFeatured slot::slotted(svg){
          fill: var(--featuredBackgroundSelected,  #3367d6);
          stroke: var(--featuredStrokeColorSelected);
        }

        .itemFeatured slot::slotted(div) {
          fill: red;
          stroke-width: 2px;
          stroke:green;
          width: 24px;
          height: 24px;
        }
      </style>

        <div id='item' class='item' on-click='_toggleElement' >
          <slot name='leftSide'></slot>
          [[value]]
          <slot name='rightSide'></slot>
          <template is='dom-if' if='[[featured]]'>
            <div id='itemFeatured' on-click='_toggleFeatured' class='itemFeatured' featured-selected$='[[featuredSelected]]' >
              <slot name='featured'></slot>
            </div>
          </template>
        </div>
      `;
    }
    static get properties() {
      return {
        /** text of the button */
        value : {
            type : String
        },
        /** id is needed when it is button list */
        ownid :  {
            type : Number
        },
        /** flag to check if button is on/off */
        selected : {
          type : Boolean,
          reflectToAttribute: true,
          notify: true
        },
        /** flag to check show/hide featured selected option */
        featured : {
          type: Boolean,
          reflectToAttribute: true,
        },
        /** flag to check if button featured is on/off */
        featuredSelected : {
          type: Boolean,
          reflectToAttribute: true,
          notify: true
        },
        /** flag to check if buttons is disabled/enabled */
        disabled : {
          type: Boolean,
          value: false,
          reflectToAttribute: true,
          notify: true
        }
    };
  }
  
  ready() {
    super.ready();
    this.validation();
  }
  
  checkDisabled() {
    return this.disabled ? "disabled" : "";
  }
  
  validation() {
    if ( this.ownid === undefined ){
      console.warn(this.constructor.name+" needs and id");
    }
  }

  _toggleFeatured(e) {
    e.stopPropagation();
    if ( !this.disabled ) {
      this.featuredSelected = !this.featuredSelected;
    }
  }

  _toggleElement() {
    if ( !this.disabled ) {
      this.selected = !this.selected;
    }
  }
}

window.customElements.define('dmp-btn-toggle', DmpBtnToggle);





