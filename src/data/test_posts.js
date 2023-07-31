import CoralLayers from "../Posts/CoralLayers";
import IsochronIntro from "../Posts/IsochronIntro";
import Zircons from "../Posts/Zircons";

export const test_posts = [
    {
        id: 0,
        "title": "Introduction to isochron dating",
        "author": "caleb", 
        "coverImage": "https://universe-review.ca/I15-31-DatingIsochron.gif",
        "desc": "Covers the main aspects of radiometric dating and common radioisotope series. ",
        "tag": "Geology",
        "body": IsochronIntro(),
        "date": new Date()
    },
    {
        id: 1,
        "title": "Coral Layers",
        "author": "caleb", 
        "coverImage": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F92%2F70%2FraENL2.jpg&f=1&nofb=1&ipt=4997ee3e6731415939df64bb07f2ed455171abe37a18e8f553f8e7d99b978079&ipo=images",
        "desc": "How we can approximate the age of corals by their calcium precipitates.",
        "tag": "Geology",
        "body": CoralLayers(),
        "date": new Date()
    },
    {
        id: 2,
        "title": "Zircons",
        "author": "caleb", 
        "coverImage": "https://www.icr.org/i/wide/jack_hills_zircon_wide.jpg",
        "desc": "What do the oldest mineral rocks tell us?",
        "tag": "Geology",
        "body": Zircons(),
        "date": new Date()
    },
]