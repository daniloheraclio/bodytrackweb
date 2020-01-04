(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238097"],{fe57:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"mx-auto"},[r("v-sheet",{staticClass:"mx-auto pa-4",attrs:{"max-width":"720px"}},[r("v-snackbar",{attrs:{timeout:2e3,bottom:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.snackbarText)+" ")]),r("p",{staticClass:"display-1 grey--text text--darken-2"},[r("v-icon",{staticClass:"mb-2 mr-2",attrs:{large:"",color:"grey darken-2"}},[e._v(" mdi-account-plus ")]),e._v(" Edit User ")],1)],1),r("v-sheet",{staticClass:"mx-auto pa-4",attrs:{color:"white","max-width":"720px"}},[r("form",[r("v-text-field",{attrs:{"error-messages":e.nameErrors,counter:30,label:"Name",required:"",color:"blue-grey darken-1",disabled:e.isDisabled},on:{input:function(t){return e.$v.name.$touch()},blur:function(t){return e.$v.name.$touch()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[r("v-icon",{attrs:{slot:"prepend",color:"deep-orange darken-2"},slot:"prepend"},[e._v("mdi-account")])],1),r("v-text-field",{staticClass:"mb-3",attrs:{"error-messages":e.emailErrors,label:"E-mail",required:"",color:"blue-grey darken-1",disabled:e.isDisabled},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}},[r("v-icon",{attrs:{slot:"prepend",color:"deep-orange darken-2"},slot:"prepend"},[e._v("mdi-email")])],1),r("v-row",[r("v-icon",{staticClass:"mb-4 mr-1 ml-3",attrs:{slot:"prepend",color:"deep-orange darken-2"},slot:"prepend"},[e._v("mdi-gender-male-female")]),e._l(e.genders,(function(t){return r("v-radio-group",{key:t.value,staticClass:"mt-1 ml-1",attrs:{column:"",required:"","error-messages":e.genderErrors,disabled:e.isDisabled},model:{value:e.defaultGender,callback:function(t){e.defaultGender=t},expression:"defaultGender"}},[r("v-radio",{attrs:{label:t.label,value:t.value,color:"blue-grey darken-1"}})],1)}))],2),r("v-dialog",{ref:"dialog",attrs:{"return-value":e.birthdate,persistent:"",width:"290px",color:"deep-orange darken-2"},on:{"update:returnValue":function(t){e.birthdate=t},"update:return-value":function(t){e.birthdate=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-text-field",e._g({attrs:{readonly:"",placeholder:"Birthday",required:"","error-messages":e.birthdateErrors,disabled:e.isDisabled},on:{input:function(t){return e.$v.birthdate.$touch()},blur:function(t){return e.$v.birthdate.$touch()}},model:{value:e.birthdate,callback:function(t){e.birthdate=t},expression:"birthdate"}},a),[r("v-icon",{attrs:{slot:"prepend",color:"deep-orange darken-2"},slot:"prepend"},[e._v("mdi-calendar")])],1)]}}]),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[r("v-date-picker",{attrs:{scrollable:"",color:"deep-orange darken-2"},model:{value:e.birthdate,callback:function(t){e.birthdate=t},expression:"birthdate"}},[r("v-spacer"),r("v-btn",{attrs:{text:"",color:"blue-grey darken-1"},on:{click:function(t){e.modal=!1}}},[e._v("Cancel")]),r("v-btn",{attrs:{text:"",color:"blue-grey darken-1"},on:{click:function(t){return e.saveDate(e.birthdate)}}},[e._v("OK")])],1)],1),r("v-row",{staticClass:"mt-8"},[r("v-btn",{staticClass:"mr-4",attrs:{depressed:"",color:"blue-grey white--text",loading:e.isLoading,disabled:e.isDisabled},on:{click:e.update}},[e._v(" update ")]),r("v-btn",{attrs:{depressed:""},on:{click:e.clear}},[e._v(" clear ")])],1)],1)])],1)],1)},i=[],n=(r("a4d3"),r("4de4"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),s=(r("96cf"),r("1da1")),l=r("1dce"),o=r("b5ae"),d=r("56d7");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={name:"EditUser",mixins:[l["validationMixin"]],data:function(){return{id:null,name:"",email:"",defaultGender:null,genders:[{label:"Male",value:"male"},{label:"Female",value:"female"}],checkbox:!1,birthdate:null,isLoading:!1,menu:!1,modal:!1,snackbar:!1,snackbarText:"User successfully updated",isDisabled:!1}},created:function(){this.id=this.$route.params.uid,this.getUser()},methods:{getUser:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["db"].collection("users").doc(this.id).get();case 2:r=e.sent,t=c({},r.data()),this.name=t.name,this.email=t.email,this.defaultGender=t.gender,this.birthdate=t.birthdate;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),update:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$v.$touch(),this.$v.$invalid){e.next=8;break}return this.isLoading=!0,e.next=5,d["db"].collection("users").doc(this.id).set({name:this.name,email:this.email,gender:this.defaultGender,birthdate:this.birthdate});case 5:this.turnDisable(),this.snackbar=!0,this.isLoading=!1;case 8:setTimeout((function(){t.$router.push({path:"/users"})}),2e3);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),clear:function(){this.$v.$reset(),this.name="",this.email="",this.defaultGender=null,this.birthdate=null},turnDisable:function(){this.isDisabled=!0},saveDate:function(e){this.$refs.dialog.save(e),this.modal=!1}},computed:{nameErrors:function(){var e=[];return this.$v.name.$dirty?(!this.$v.name.maxLength&&e.push("Name must be at most 10 characters long"),!this.$v.name.required&&e.push("Name is required."),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.email&&e.push("Must be valid e-mail"),!this.$v.email.required&&e.push("E-mail is required"),e):e},genderErrors:function(){var e=[];return this.$v.defaultGender.$dirty?(!this.$v.defaultGender.required&&e.push("Item is required"),e):e},birthdateErrors:function(){var e=[];return this.$v.birthdate.$dirty?(!this.$v.birthdate.required&&e.push("Birthday is required."),e):e}},validations:{name:{required:o["required"],maxLength:Object(o["maxLength"])(30)},email:{required:o["required"],email:o["email"]},defaultGender:{required:o["required"]},birthdate:{required:o["required"]}}},m=b,h=r("2877"),p=r("6544"),v=r.n(p),f=r("8336"),g=r("62ad"),k=r("2e4b"),x=r("169a"),$=r("132d"),y=r("67b6"),w=r("43a6"),O=r("0fd9"),q=r("8dd9"),D=r("2db4"),_=r("2fa4"),j=r("8654"),E=Object(h["a"])(m,a,i,!1,null,null,null);t["default"]=E.exports;v()(E,{VBtn:f["a"],VCol:g["a"],VDatePicker:k["a"],VDialog:x["a"],VIcon:$["a"],VRadio:y["a"],VRadioGroup:w["a"],VRow:O["a"],VSheet:q["a"],VSnackbar:D["a"],VSpacer:_["a"],VTextField:j["a"]})}}]);
//# sourceMappingURL=chunk-2d238097.542f77bf.js.map