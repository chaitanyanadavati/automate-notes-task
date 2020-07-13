import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    private hcontent: string;
    private hsearchTerm: string;
    private separatedText = [];
    private separatedSearchedText = [];
    private final = '';
    searchPattern: any;
    matchpattern: any;
    splitFlag = '';
    matchFlag = '';
    spanStart = '<span class="text-highlight">';
    spanEnd = '</span>';

    @Input('content')
    set content(content: string) {
        this.hcontent = content;
    }
    get content(): string {
        return this.hcontent;
    }

    @Input('searchTerm')
    set searchTerm(searchTerm: string) {
        this.hsearchTerm = searchTerm;
        this.highlight();
    }
    get searchTerm(): string {
        return this.hsearchTerm;
    }

    @Input() caseSensitive: boolean;

    constructor(private el: ElementRef) {
        this.caseSensitive = false;
    }

    highlight() {
        this.final = '';
        if (!this.caseSensitive) {
            this.splitFlag = 'i';
            this.matchFlag = 'gi';
        } else {
            this.splitFlag = '';
            this.matchFlag = 'g';
        }
        this.searchPattern = new RegExp(this.hsearchTerm, this.splitFlag);
        this.matchpattern = new RegExp(this.hsearchTerm, this.matchFlag);

        if (
            this.hsearchTerm !== undefined &&
            this.hsearchTerm != null &&
            this.hsearchTerm.length > 0 &&
            this.hsearchTerm[0] !== '.'
        ) {
            this.separatedText = this.hcontent.split(this.searchPattern);
            this.separatedSearchedText = this.hcontent.match(this.matchpattern);

            if (
                this.separatedSearchedText != null &&
                this.separatedSearchedText.length > 0
            ) {
                for (let i = 0; i < this.separatedText.length; i++) {
                    if (i <= this.separatedSearchedText.length - 1) {
                        this.final +=
                            this.separatedText[i] +
                            this.spanStart +
                            this.separatedSearchedText[i] +
                            this.spanEnd;
                    } else {
                        this.final += this.separatedText[i];
                    }
                }
            }
            if (this.final.length > 0) {
                this.el.nativeElement.innerHTML = this.final;
            } else {
                this.el.nativeElement.innerText = this.hcontent;
            }
        } else {
            this.el.nativeElement.innerText = this.hcontent;
        }
    }
}
