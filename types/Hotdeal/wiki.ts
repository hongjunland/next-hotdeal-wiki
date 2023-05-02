export interface CreateWikiInput {
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export interface UpdateWikiInput {
    id: number;
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export interface Wiki {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    versions: WikiVersion[];
}

export interface WikiPage {
    items: Nullable<Wiki[]>;
    total: number;
}

export interface WikiVersion {
    id: string;
    title: string;
    content: string;
    wiki: Wiki;
    diff?: Nullable<string>;
    createdAt: string;
    updatedAt: string;
}

export interface WikiTitle{
    title: string;
}

export interface IQuery {
    listWiki(limit?: Nullable<number>, offset?: Nullable<number>): WikiPage | Promise<WikiPage>;
    wiki(id: number): Nullable<Wiki> | Promise<Nullable<Wiki>>;
    searchWiki(searchTerm: string, searchType?: Nullable<string>, limit?: Nullable<number>, offset?: Nullable<number>): WikiPage | Promise<WikiPage>;
}

export interface IMutation {
    createWiki(createWikiInput: CreateWikiInput): Wiki | Promise<Wiki>;
    updateWiki(updateWikiInput: UpdateWikiInput): Wiki | Promise<Wiki>;
    removeWiki(id: number): Nullable<Wiki> | Promise<Nullable<Wiki>>;
}

export type Nullable<T> = T | null;