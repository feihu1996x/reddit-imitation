import { Component, OnInit, Input } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: { // 在宿主元素( app-article标签)上设置 class 属性,使其具有 名为row 的CSS类
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() {
    // pass
  }

  voteUp() {
    this.article.voteUp();
    return false; //告诉浏览器不要向上冒泡
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
