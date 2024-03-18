type Category = "Computers";
type Language = "en" | "he";
type Country = "IL";
export type ImageLinks = {
  smallThumbnail?: string;
  thumbnail?: string;
  small?: string;
  medium?: string;
  large?: string;
  extraLarge?: string;
};

export type Book = {
  kind: "books#volume";
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: [
      {
        type: string;
        identifier: string;
      },
      {
        type: string;
        identifier: string;
      }
    ];
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printType: "BOOK";
    categories: Category[];
    maturityRating: "NOT_MATURE";
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    imageLinks: ImageLinks;
    language: Language;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  saleInfo: {
    country: Country;
    saleability: "NOT_FOR_SALE";
    isEbook: false;
  };
  accessInfo: {
    country: Country;
    viewability: "PARTIAL";
    embeddable: true;
    publicDomain: false;
    textToSpeechPermission: "ALLOWED";
    epub: {
      isAvailable: false;
    };
    pdf: {
      isAvailable: true;
    };
    webReaderLink: string;
    accessViewStatus: "SAMPLE";
    quoteSharingAllowed: false;
  };
  searchInfo: {
    textSnippet: string;
  };
};
