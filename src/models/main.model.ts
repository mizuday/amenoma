export class LoadResponse {
  constructor(
    public url: string,
    public name: string,
    public data: ChapterData[],
    public author: string,
    public posterUrl: string,
    public synopsis: string,
    public tags: string[],
    public status: Status = Status.NULL
  ) {}
}

export class SearchResponse {
  constructor(
    public name: string,
    public url: string,
    public nameRoute: string,
    public apiName: string,
    public rating?: number | null,
    public posterUrl?: string | null,
    public latestChapter?: string | null
  ) {}
}

export enum Status {
  NULL = 0,
  ONGOING = 1,
  COMPLETE = 2,
  PAUSE = 3,
  DROPPED = 4,
}

export class ChapterData {
  constructor(
    public name: string,
    public url: string,
    public dateOfRelease?: string
  ) {}
}

export class BookmarkData {
  constructor(
    public type: string,
    public provider: string,
    public name: string,
    public nameRoute: string,
    public currentIdx: number,
    public currentContent: string,
    public nextContent: string,
    public currNovel?: LoadResponse | null
  ) {}
}

export declare type Pair = { [key: string]: string };
