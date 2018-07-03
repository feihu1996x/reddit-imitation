import { CLIENT_RENEG_LIMIT } from "tls";

export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) { // '?:'表示votes 参数是可选的
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

    getDomain(): string {
        try {
            const link: string = this.link.split('//')[1];
            return link.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}