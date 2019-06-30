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
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid black;
          position: absolute;
          top: -6px;
          right: -6px;
        }
        :host([selected]) .item {
          background: var(--backgroundSelected, #3367d6);
        }
        :host([disabled]) .item {
          background: var(--backBroundDisable, #e0e0e0);
          cursor: not-allowed !important;
        }
        :host([featured-selected]) .itemFeatured{
          background: var(--backgroundFeatured, #ef5350);
        }  
      </style>

        <div id='item' class='item' on-click='_toggleElement' >[[value]]
          <template is='dom-if' if='[[featured]]'>
            <div id='itemFeatured' on-click='_toggleFeatured' class='itemFeatured' featuredSelected$='[[featuredSelected]]' ></div>
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
          reflectToAttribute: true
        },
        /** flag to check show/hide featured selected option */
        featured : {
          type: Boolean,
          reflectToAttribute: true          
        },
        /** flagh to check if button featured is on/off */
        featuredSelected : {
          type: Boolean,
          reflectToAttribute: true,
        },
        /** flag to check if buttons is disabled/enabled */
        disabled : {
          type: Boolean,
          value: false,
          reflectToAttribute: true          
        }
    };
  }
  
  ready() {
    super.ready();
    this.validation();
    this.listeners(); 
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





