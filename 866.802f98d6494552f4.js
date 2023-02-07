"use strict";(self.webpackChunkcarlosProjectApp=self.webpackChunkcarlosProjectApp||[]).push([[866],{2866:(A,l,a)=>{a.r(l),a.d(l,{CreateModule:()=>s});var u=a(6895),i=a(6773),r=a(433),e=a(8256),f=a(2310),p=a(5146),c=a(6395),g=a(272);function C(n,o){1&n&&(e.TgZ(0,"p",16),e._uU(1,"Fill in all the fields is necessary."),e.qZA())}function h(n,o){1&n&&(e.TgZ(0,"p",16),e._uU(1,"Correct email format is necessary."),e.qZA())}function Z(n,o){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,C,2,0,"p",15),e.YNc(2,h,2,0,"p",15),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.formCreate.get("first_name").hasError("required")||t.formCreate.get("last_name").hasError("required")||t.formCreate.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.formCreate.get("email").hasError("email"))}}class m{constructor(o,t,d,U){this.alerts=o,this.router=t,this.api=d,this.formbuilder=U,this.formCreate=this.formbuilder.group({first_name:new r.NI("",[r.kI.required]),last_name:new r.NI("",r.kI.required),email:new r.NI("",[r.kI.required,r.kI.email])})}putForm(){this.api.postUser(this.formCreate.getRawValue()).subscribe({next:o=>{this.alerts.showSuccess("User created successfully","Done!"),this.router.navigate(["list"])},error:o=>{this.alerts.showError("There was an error creating the user, try again","Error")}})}}m.\u0275fac=function(o){return new(o||m)(e.Y36(f.m),e.Y36(i.F0),e.Y36(p.s),e.Y36(r.qu))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-create"]],decls:32,vars:3,consts:[[1,"container"],["novalidate","",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["type","text","formControlName","first_name","placeholder","Introduce a first username",1,"form-control"],["for","exampleInputPassword1",1,"form-label"],["type","text","formControlName","last_name","placeholder","Introduce a last username",1,"form-control"],["type","email","aria-describedby","emailHelp","formControlName","first_name","placeholder","Introduce an email address","formControlName","email",1,"form-control"],["id","emailHelp",1,"form-text"],[4,"ngIf"],[1,"buttons"],[1,"buttons-group"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button","routerLink","/list",1,"btn","btn-secondary"],["type","button","routerLink","/home",1,"btn","btn-outline-dark"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(o,t){1&o&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0)(2,"h2"),e._uU(3,"Create new user"),e.qZA(),e.TgZ(4,"form",1),e.NdJ("ngSubmit",function(){return t.putForm()}),e.TgZ(5,"div",2)(6,"label",3),e._uU(7,"First Name"),e.qZA(),e._UZ(8,"input",4),e.qZA(),e.TgZ(9,"div",2)(10,"label",5),e._uU(11,"Last Name"),e.qZA(),e._UZ(12,"input",6),e.qZA(),e.TgZ(13,"div",2)(14,"label",5),e._uU(15,"Email Address"),e.qZA(),e._UZ(16,"input",7),e.TgZ(17,"div",8),e._uU(18,"We'll never share your email with anyone else."),e.qZA()(),e._UZ(19,"br"),e.YNc(20,Z,3,2,"div",9),e._UZ(21,"hr"),e.TgZ(22,"div",10)(23,"div",11)(24,"button",12),e._uU(25,"Add"),e.qZA()(),e.TgZ(26,"div",11)(27,"button",13),e._uU(28,"Go Back"),e.qZA(),e.TgZ(29,"button",14),e._uU(30,"Return to Home"),e.qZA()()()()(),e._UZ(31,"app-footer")),2&o&&(e.xp6(4),e.Q6J("formGroup",t.formCreate),e.xp6(16),e.Q6J("ngIf",t.formCreate.get("first_name").errors&&t.formCreate.get("first_name").dirty||t.formCreate.get("last_name").errors&&t.formCreate.get("last_name").dirty||t.formCreate.get("email").errors&&t.formCreate.get("email").dirty),e.xp6(4),e.Q6J("disabled",t.formCreate.invalid))},dependencies:[u.O5,i.rH,c.G,g.c,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:["h2[_ngcontent-%COMP%]{text-align:center}input[_ngcontent-%COMP%]{opacity:.8}.container[_ngcontent-%COMP%]{margin-bottom:16rem}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.buttons[_ngcontent-%COMP%]   .buttons-group[_ngcontent-%COMP%]{display:flex;gap:2rem}.error-message[_ngcontent-%COMP%]{color:red}"]});var v=a(1137),b=a(4801);const y=[{path:"",component:m}];class s{}s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[u.ez,i.Bz.forChild(y),b.O,v._,r.UX]})}}]);