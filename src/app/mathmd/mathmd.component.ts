import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-mathmd',
  templateUrl: './mathmd.component.html',
  styleUrls: ['./mathmd.component.css']
})
export class MathmdComponent implements OnInit {
  @Input() content :string;

  constructor(private markdownService: MarkdownService) { }
  mathJaxObject;

  ngOnChanges(changes: SimpleChanges) {
    // to render math equations again on content change
    if (changes['content']) {
      this.renderMath()
    }
  }
  ngOnInit() {
   this.loadMathConfig()
   this.renderMath();
  }

  updateMathObt(){
    this.mathJaxObject = window['MathJax'];
  }

  renderMath() {
    this.content = this.markdownService.compile(this.content)
    this.updateMathObt();
    let angObj = this;
    setTimeout(() => {
      angObj.mathJaxObject['Hub'].Queue(["Typeset", angObj.mathJaxObject.Hub], 'mathContent');
    },1000)
  }
  loadMathConfig() {
    this.updateMathObt();
    this.mathJaxObject.Hub.Config({
      showMathMenu: false,
      tex2jax: { inlineMath: [["$", "$"]],displayMath:[["$$", "$$"]] },
      menuSettings: { zoom: "Double-Click", zscale: "150%" },
      CommonHTML: { linebreaks: { automatic: true } },
      "HTML-CSS": { linebreaks: { automatic: true } },
      SVG: { linebreaks: { automatic: true } }
    });
  }

}
