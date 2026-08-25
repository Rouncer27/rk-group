export const Page_Intro_Query = `
    pageIntro: pageIntroComponent {
        title
        content
        image {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
    }
`;

export const Image_By_Content_Query = `
    imageByContent: imageByContentComponent {
    section {
        title
        content
        image {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                    }
                }
            }
        }
    }
`;
