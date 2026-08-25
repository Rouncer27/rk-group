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

export const Difference_Query = `
    difference: differenceComponent {
        title
        points {
            title
            content
        }
    }
`;

export const Services_Display_Query = `
    servicesDisplay: servicesDisplayComponent {
        displayServices
        title
        logo {
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

export const All_Services_Query = `
    services: services(first: 999999) {
        edges {
            node {
                slug
                title
                servicesPost {
                    excerpt
                    excerptImage {
                        node {
                            altText
                            sourceUrl
                        }
                    }
                }
            }
        }
    }

`;
