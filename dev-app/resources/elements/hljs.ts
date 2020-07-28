// import { customElement, bindable, containerless, Loader, DOM } from 'aurelia-framework';
// import { HttpClient } from 'aurelia-fetch-client';
// import {highlight, highlightAuto, fixMarkup} from 'highlight.js';

// @customElement('hljs')
// @containerless
// export class Hljs {
//     @bindable language: string;
//     @bindable theme: string;
//     @bindable include: string;
//     @bindable linenumbers: boolean;

//     private mycode:string;
//     private effectiveLanguage: string;
//     private static idCounter: number = 0;
//     id: string = "hljsCodeTag" + Hljs.idCounter++;
//     static styleHeader: Node;
//     private httpClient: HttpClient = new HttpClient();
//     private contentTypeMap: { [key: string]: string; } = {
//         "application/x-sql": "sql",
//         "text/x-java-source": "java",
//         "text/css": "css",
//         "application/x-sh": "bash"
//     };

//     constructor(private loader: Loader) {
//     }

//     attached() {
//         if (!this.hasInclude()) {
//             this.effectiveLanguage = this.language;
//             this.highlightToDom();
//         }
//         else
//         {
//          //this.includeChanged();   
//         }
//     }

//     includeChanged() {
//         this.httpClient.fetch(this.include)
//             .then(response => {
//                 let contentType = response.headers.get("Content-Type");
//                 this.extractLanguageFromContentType(contentType);
//                 return response.text()
//             }).then(data => {
//                 this.highlightToDom(data);
//             });
//     }

//     private extractLanguageFromContentType(contentType: string) {
//         if (!this.language && contentType != null) {
//             let extracted = contentType.split(";")[0].trim();
//             if (extracted != null && this.contentTypeMap[extracted] != null) {
//                 this.effectiveLanguage = this.contentTypeMap[extracted];
//             } else if (this.language) {
//                 this.effectiveLanguage = this.language;
//             } else {
//                 this.effectiveLanguage = undefined;
//             }
//         }
//     }

//     private highlightToDom(data?: string) {
//         if (data == null) {
//             data = document.getElementById(this.id).textContent;
//         }
//         // @ts-ignore
//         let result: hljs.IHighlightResultBase = this.highlight(data);
//         this.effectiveLanguage = result.language;
//         this.fixMarkupAndAppendToDom(result.value);
//     }

//     // @ts-ignore
//     private highlight(data: string): hljs.IHighlightResultBase {
//         return this.effectiveLanguage ?
//             highlight(this.effectiveLanguage, data, true)
//             : highlightAuto(data);
//     }

//     private fixMarkupAndAppendToDom(value: string) {
//         value = fixMarkup(value);
//         value = this.lineGenerator(value);
//         document.querySelector("#" + this.id).innerHTML = value;
//     }

//     private lineGenerator(data: string): string {
//         var codeLineArray = data.split('\n');
//         var codeLineString = '';
//         for (var i = 0; i < codeLineArray.length; i++) {
//             if (this.linenumbers) {
//                 codeLineString += '<span class="line-number">' + (i + 1) + '</span>' + codeLineArray[i];
//             } else {
//                 codeLineString += '<span> </span>' + codeLineArray[i];
//             }
//             if (i != codeLineArray.length - 1) {
//                 codeLineString = codeLineString + '\n';
//             }
//         }
//         return codeLineString;
//     }

//     private hasInclude(): boolean {
//         return this.include != null;
//     }

//     linenumbersChanged() {
//         if (document.getElementById(this.id) != null) {
//             var data = document.getElementById(this.id).innerText;
//             if (!this.linenumbers) {
//                 data = data.split("\n").map(function(line, index) {
//                     return line.substring(("" + (index + 1)).length);
//                 }).reduce(function(a, b) {
//                     return a + "\n" + b;
//                 });
//             } else {
//                 data = data.split("\n").map(function(line, index) {
//                     return line.substring(1);
//                 }).reduce(function(a, b) {
//                     return a + "\n" + b;
//                 });
//             }
//             this.highlightToDom(data);
//         }
//     }

//     themeChanged() {
//         if (this.theme == null) {
//             this.theme = "default";
//         }
//         this.loadTheme();
//     }

//     private loadTheme() {
//         this.loader.loadText("highlight.js/styles/" + this.theme + ".css").then(text => {
//             let oldStyleHeader: Node = Hljs.styleHeader;
//             Hljs.styleHeader = DOM.injectStyles(text);
//             if (oldStyleHeader != null) {
//                 document.getElementsByTagName("head")[0].replaceChild(Hljs.styleHeader, oldStyleHeader);
//             } else {
//                 document.getElementsByTagName("head")[0].appendChild(Hljs.styleHeader);
//             }
//         });
//     }
// }

